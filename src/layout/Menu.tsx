import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppDispatch, useAppSelector } from '../setup/hooks.ts'
import { setOpenMenu } from '../stores/menu.ts'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'
import { Link } from 'react-router-dom'

type IconDefinition = [IconPrefix, IconName]
const ICONS: Record<string, IconDefinition> = {
  SHOP: ['fas', 'shop'],
  BASKET: ['fas', 'basket-shopping'],
  LIST: ['fas', 'clipboard-list'],
  GEAR: ['fas', 'gear'],
  ANGLES_RIGHT: ['fas', 'angles-right'],
}
interface PropsMenuItem {
  icon: IconDefinition
  label: string
  to: string
  open: boolean
}
const MenuItem: React.FC<PropsMenuItem> = ({ icon, to, label, open }) => {
  return (
    <li
      className={`flex cursor-pointer items-center gap-2 py-4 ${
        open ? 'justify-start' : 'justify-center'
      }`}
    >
      <Link to={to}>
        <FontAwesomeIcon className='w-8 text-xl' icon={icon} />
        {open && <span>{label}</span>}
      </Link>
    </li>
  )
}

function Menu() {
  const dispatch = useAppDispatch()
  const { open } = useAppSelector((state) => state.menu)
  function toggleMenu() {
    dispatch(setOpenMenu(!open))
  }

  return (
    <div
      className={`transition-width sticky top-0 flex h-screen flex-col justify-between bg-blue-500 duration-100 ${
        open ? 'w-[200px] min-w-[200px]' : 'w-[50px]'
      }`}
    >
      <div>
        <div className='cursor-pointer'>logo</div>
        <ul>
          <MenuItem to={'/private/shops'} icon={ICONS.SHOP} label='Mes magasins' open={open} />
          <MenuItem to={'/private/products'} icon={ICONS.BASKET} label='Mes produits' open={open} />
          <MenuItem to={'/private/orders'} icon={ICONS.LIST} label='Mes commandes' open={open} />
        </ul>
      </div>
      <div>
        <MenuItem to={'/private/settings'} icon={ICONS.GEAR} label='Paramétre' open={open} />
        <div
          className='flex w-full cursor-pointer items-center justify-center py-4'
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            className={`w-8 text-xl transition duration-500 ${open ? 'rotate-180' : 'rotate-0'}`}
            icon={ICONS.ANGLES_RIGHT}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
