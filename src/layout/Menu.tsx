import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppDispatch, useAppSelector } from '../setup/hooks.ts'
import { setOpenMenu } from '../stores/menu.ts'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'

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
  open: boolean
}
const MenuItem: React.FC<PropsMenuItem> = ({ icon, label, open }) => {
  return (
    <li
      className={`cursor-pointer items-center flex py-4 gap-2 ${
        open ? 'justify-start' : 'justify-center'
      }`}
    >
      <FontAwesomeIcon className='text-xl w-8' icon={icon} />
      {open && <span>{label}</span>}
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
      className={`fixed flex flex-col justify-between h-screen bg-blue-500 transition-width duration-100 ${
        open ? 'w-[200px]' : 'w-[50px]'
      }`}
    >
      <div>
        <div className='cursor-pointer'>logo</div>
        <ul>
          <MenuItem icon={ICONS.SHOP} label='Mes magasins' open={open} />
          <MenuItem icon={ICONS.BASKET} label='Mes produits' open={open} />
          <MenuItem icon={ICONS.LIST} label='Mes commandes' open={open} />
        </ul>
      </div>
      <div>
        <MenuItem icon={ICONS.GEAR} label='Paramétre' open={open} />
        <div
          className='cursor-pointer w-full flex items-center justify-center py-4'
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            className={`text-xl w-8 transition duration-500 ${open ? 'rotate-180' : 'rotate-0'}`}
            icon={ICONS.ANGLES_RIGHT}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
