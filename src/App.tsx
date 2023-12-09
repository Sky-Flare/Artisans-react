import { useEffect, useState } from 'react'
import './App.css'
import './fontawesome'
import SignIn from './layout/SignIn.tsx'
import { useAppDispatch, useAppSelector } from './setup/hooks.ts'
import { setToken } from './stores/user.ts'
import { useMeArtisanQuery } from './generated/graphql.ts'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem('token')
    if (tokenLocalStorage) {
      dispatch(setToken(tokenLocalStorage))
    }
  })
  const user = useAppSelector((state) => state.user)
  const [isQueryEnabled, setQueryEnabled] = useState(false)

  useEffect(() => {
    if (user.token) {
      setQueryEnabled(true)
    }
  }, [user.token])

  const { loading, data } = useMeArtisanQuery({ skip: !isQueryEnabled })

  return (
    <>
      {loading && <div>loading...</div>}
      {data?.meArtisan?.email ? <div>{data.meArtisan.email}</div> : null}
      <SignIn />
    </>
  )
}

export default App
