import { useOutlet } from 'react-router-dom'
import { useAppDispatch } from '../setup/hooks.ts'
import Menu from './Menu.tsx'
import { useMeArtisanQuery } from '../generated/graphql.ts'
import { setShops } from '../stores/shop.ts'

export const ProtectedLayout = () => {
  // const { token } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const { data } = useMeArtisanQuery({ errorPolicy: 'all' })
  dispatch(setShops(data?.meArtisan?.shops || []))
  const outlet = useOutlet()
  // const { open } = useAppSelector((state) => state.menu)
  //
  // if (!token) {
  //   return <Navigate to='/' />
  // }

  return (
    <div className='flex'>
      <Menu />
      <div className={'relative transition-all duration-100'}>{outlet}</div>
    </div>
  )
}
