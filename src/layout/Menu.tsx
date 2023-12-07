import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Menu() {
  return (
    <>
      <div className='fixed flex flex-col justify-between h-full w-[250px] bg-blue-500'>
        <div>
          <div className='cursor-pointer'>logo</div>
          <ul>
            {['Mes magasins', 'Mes produits', 'Mes commandes'].map((item) => (
              <li className='cursor-pointer' key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className=' cursor-pointer flex w-full items-center justify-center py-4 gap-2'>
          <p>Paramétre</p>
          <FontAwesomeIcon icon={['fas', 'gear']} />
        </div>
      </div>
    </>
  )
}

export default Menu
