import { Link, Navigate, useOutlet } from 'react-router-dom'
import { useAppSelector } from '../setup/hooks.ts'

export const ProtectedLayout = () => {
  const { token } = useAppSelector((state) => state.user)
  const outlet = useOutlet()

  if (!token) {
    return <Navigate to='/' />
  }

  return (
    <div>
      <nav>
        <Link to='/settings'>Settings</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
      {outlet}
    </div>
  )
}
