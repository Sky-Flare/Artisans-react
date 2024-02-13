import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useAllMyShopsQuery, useProductsQuery } from '../generated/graphql.ts'
import { useAppSelector } from '../setup/hooks.ts'
import { setProducts } from '../stores/product.ts'
import { useDispatch } from 'react-redux'

export const ShopPage = () => {
  const [sortOrder, setSortOrder] = useState('asc')
  const [sortBy, setSortBy] = useState('name')

  const dispatch = useDispatch()
  const { id } = useParams()
  const { shops } = useAppSelector((state) => state.shop)
  const currentShop = shops?.find((s) => s.id === Number(id))
  const { data: productsData } = useProductsQuery({
    variables: { filtersProducts: { shopId: Number(id) } },
  })

  useEffect(() => {
    if (productsData?.products) {
      dispatch(setProducts(productsData.products))
    }
  }, [dispatch, productsData])

  const { products } = useAppSelector((state) => state.product)
  const { data: allMyShops } = useAllMyShopsQuery({ errorPolicy: 'all' })

  const handleSort = (column: 'name' | 'price') => {
    setSortBy(column)
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'))
  }

  const renderProducts = () => {
    return (
      <div>
        {products
          ?.slice()
          .sort((a, b) => {
            if (sortBy === 'name') {
              return sortOrder === 'asc'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
            } else if (sortBy === 'price') {
              return sortOrder === 'asc' ? a.price - b.price : b.price - a.price
            }
            return 0
          })
          .map((product) => (
            <div key={product.id} className='flex bg-white'>
              <div className='flex flex-1 items-center justify-center rounded p-2'>
                <img
                  className='size-[70px] rounded'
                  src={'https://picsum.photos/200'}
                  alt={product.description}
                />
                <div className='flex flex-1 flex-col justify-center p-2'>
                  <span>{product.name}</span>
                  <span>{product.description}</span>
                </div>
              </div>

              <div className='flex flex-1 flex-col justify-center p-2'>${product.price}</div>
              <div className='flex flex-1 flex-col justify-center p-2'>
                {product?.categoriesProducts?.map((category) => category.name).join(', ')}
              </div>
            </div>
          ))}
      </div>
    )
  }

  if (!id || !allMyShops?.meArtisan?.shops?.find((s) => s.id === Number(id))) {
    return <Navigate to='/private/shops' />
  }

  if (!currentShop) {
    return <div className='container mx-auto p-6'>not shop</div>
  }

  return (
    <div className='mx-auto p-6'>
      <div>
        <h1 className='mb-4 text-3xl font-bold'>{currentShop.name}</h1>
        <p>{currentShop.description}</p>
        <p>
          Address: {currentShop.address}, {currentShop.city} - {currentShop.zipCode}
        </p>
        <p>Enabled: {currentShop.enabled ? 'Yes' : 'No'}</p>
      </div>

      <div className='mt-8'>
        <h2 className='mb-4 text-xl font-bold'>Products</h2>
        {products?.length > 0 ? (
          <div className='w-full '>
            <div className='flex  font-bold'>
              <div className='flex-1' onClick={() => handleSort('name')}>
                Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
              </div>
              <div className='flex-1' onClick={() => handleSort('price')}>
                Price {sortBy === 'price' && (sortOrder === 'asc' ? '▲' : '▼')}
              </div>
              <div className='flex-1'>Categories</div>
            </div>
            {renderProducts()}
          </div>
        ) : (
          <p>No products available in this shop.</p>
        )}
      </div>
    </div>
  )
}
