import './App.css'
import { useAllFilmsTestQuery } from './generated/graphql.ts'

function App() {
  const { loading, error, data } = useAllFilmsTestQuery()
  const listItems = data?.allFilms?.edges?.map((film) => (
    <li key={film?.node?.title}>{film?.node?.title}</li>
  ))
  return (
    <>
      {loading ? <p>Loading...</p> : <ul>{listItems}</ul>}
      {error && <p>Error :{error.graphQLErrors.map((e) => e.message)}</p>}
    </>
  )
}

export default App
