import { ApolloClient, ApolloLink, createHttpLink, from, InMemoryCache } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { RetryLink } from '@apollo/client/link/retry'

const uri = 'https://swapi-graphql.netlify.app/.netlify/functions/index'
export let currentClient: ApolloClient<unknown> | undefined
export function setupApollo() {
  const split: ApolloLink = from([
    onError(({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        // handle errors
      }
      if (networkError) {
        // eslint-disable-next-line no-console
        console.debug(`[GraphQL Network error]: ${networkError} during ${operation.operationName}`)
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
  ])

  currentClient = new ApolloClient({
    link: setContext((_request, { headers }) => ({
      headers: {
        ...headers,
      },
    })).concat(split),
    cache: new InMemoryCache({}),
  })

  return currentClient
}
