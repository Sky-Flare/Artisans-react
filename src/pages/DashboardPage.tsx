import { useAllCategoriesShopQuery, useMeArtisanQuery } from '../generated/graphql.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DashboardPage = () => {
  const { data, loading } = useMeArtisanQuery({})
  const { data: allCategoriesShops } = useAllCategoriesShopQuery({})

  return (
    <div>
      <h1>This is the Profile Page</h1>
      {loading && <FontAwesomeIcon className='ml-4' icon={['fas', 'spinner']} spin />}
      <div className='overflow-auto'>
        {data?.meArtisan?.id && (
          <div>
            <h2>{data.meArtisan.firstName}</h2>
            <h2>{data.meArtisan.lastName}</h2>
            <h2>{data.meArtisan.email}</h2>
            <ul>
              {data.meArtisan.shops?.map((shop) => (
                <li key={shop.id}>
                  <h3>{shop.name}</h3>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          {allCategoriesShops?.categories_shop && (
            <ul>
              {allCategoriesShops.categories_shop.map((category) => (
                <li key={category.id}>
                  <h3>{category.name}</h3>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
