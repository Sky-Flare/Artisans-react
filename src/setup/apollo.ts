import { ApolloClient, createHttpLink, from, InMemoryCache } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { RetryLink } from '@apollo/client/link/retry'
// const uri = 'https://swapi-graphql.netlify.app/.netlify/functions/index'
const uri = 'http://localhost:3000/graphql'

const getAuthToken = () => {
  return localStorage.getItem('token') || ''
}

export const client = new ApolloClient({
  link: setContext((_, { headers }) => {
    const accessToken = getAuthToken()
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `${accessToken}` : '',
      },
    }
  }).concat(
    from([
      onError(({ graphQLErrors, networkError, operation, forward }) => {
        if (graphQLErrors) {
          // handle errors
        }
        if (networkError) {
          // eslint-disable-next-line no-console
          console.debug(
            `[GraphQL Network error]: ${networkError} during ${operation.operationName}`,
          )
        }
        forward(operation)
      }),
      new RetryLink({
        attempts: (count) => count < 3,
        delay: () => 300,
      }),
      createHttpLink({
        fetch: (_u, options) =>
          fetch(
            `${uri}?${
              (JSON.parse(options?.body as string) as { operationName: string }).operationName
            }`,
            options,
          ),
      }),
    ]),
  ),
  cache: new InMemoryCache({}),
})
