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
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <Outlet />
    </div>
  )
}
