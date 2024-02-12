import { Link, useOutlet, useParams } from 'react-router-dom'
import { useAppSelector } from '../setup/hooks.ts'

export const ShopsPage = () => {
  const outlet = useOutlet()
  const { id } = useParams()
  const { shops } = useAppSelector((state) => state.shop)
  return !id ? (
    <div className='container mx-auto p-6'>
      <h1 className='mb-8 text-3xl font-bold'>Shops Page</h1>
      <div className='-mx-4 flex flex-wrap'>
        {shops &&
          shops.map((shop) => (
            <div key={shop.id} className='mb-8 w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
              <Link key={shop.id} to={`/private/shops/${shop.id}`}>
                <div className='rounded-lg bg-white p-6 shadow-md'>
                  <h3 className='mb-2 text-xl font-bold'>{shop.name}</h3>
                  <p className='text-gray-600'>{shop.description}</p>
                  <p className='mt-2'>
                    {shop.address}, {shop.city} - {shop.zipCode}
                  </p>
                  <p className='mt-2'>Enabled: {shop.enabled ? 'Yes' : 'No'}</p>
                  <div className='-mx-2 mt-4 flex flex-wrap'>
                    {shop.categoriesShops?.map((category) => (
                      <div key={category.id} className='mx-2 mb-2 flex items-center'>
                        {category.picture && (
                          <img
                            src={category.picture}
                            alt={category.name}
                            className='mr-2 size-6 rounded-full'
                          />
                        )}
                        <span>{category.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  ) : (
    <div>{outlet}</div>
  )
}
