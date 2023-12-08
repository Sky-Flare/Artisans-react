import { useEffect, useState } from 'react'
import './App.css'
import './fontawesome'
import SignIn from './layout/SignIn.tsx'
import { useAppDispatch, useAppSelector } from './setup/hooks.ts'
import { setUser } from './stores/user.ts'
import { useMeArtisanQuery } from './generated/graphql.ts'

function App() {
  const tokenLocalStorage = localStorage.getItem('token')
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.user.token)
  // Utilise un état local pour activer/désactiver la requête
  const [isQueryEnabled, setQueryEnabled] = useState(false)

  useEffect(() => {
    if (token) {
      setQueryEnabled(true)
    }
  }, [token])

  const { data } = useMeArtisanQuery({ skip: !isQueryEnabled })

  if (tokenLocalStorage && data?.meArtisan) {
    dispatch(setUser(data.meArtisan))
  }

  return (
    <>
      <SignIn />
    </>
  )
}

export default App
