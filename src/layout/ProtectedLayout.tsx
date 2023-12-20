import { Navigate, useOutlet } from 'react-router-dom'
import { useAppSelector } from '../setup/hooks.ts'
import Menu from './Menu.tsx'

export const ProtectedLayout = () => {
  const { token } = useAppSelector((state) => state.user)
  const outlet = useOutlet()
  const { open } = useAppSelector((state) => state.menu)

  if (!token) {
    return <Navigate to='/' />
  }

  return (
    <div className='flex'>
      <Menu />
      <div
        className={`relative transition-all duration-100 ${open ? 'left-[200px]' : 'left-[50px]'}`}
      >
        {outlet}
      </div>
    </div>
  )
}
