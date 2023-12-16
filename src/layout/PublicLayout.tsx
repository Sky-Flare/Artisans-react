import { Link, Navigate, Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../setup/hooks.ts'
import { setToken } from '../stores/user.ts'
import { useEffect } from 'react'

export const PublicLayout = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const localToken = window.localStorage.getItem('token') ?? ''
    if (localToken) {
      dispatch(setToken(localToken))
    }
  })

  const { token } = useAppSelector((state) => state.user)
  if (token) {
    return <Navigate to='/private/profile' />
  }

  return (
    <div>
      <header className='flex justify-between p-4'>
        <Link to='/'>Logo</Link>
        <nav>
          <ul className='gap-2 flex'>
            <li>
              <Link to='/login'>Connexion</Link>
            </li>
            <li>
              <Link to='/register'>Inscription</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}
