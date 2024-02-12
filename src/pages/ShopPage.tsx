import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useAllMyShopsQuery, useProductsQuery } from '../generated/graphql.ts'
import { useAppSelector } from '../setup/hooks.ts'
import { setProducts } from '../stores/product.ts'
import { useDispatch } from 'react-redux'

export const ShopPage = () => {
  const dispatch = useDispatch()

  // State for managing categories
  const [newCategoryName, setNewCategoryName] = useState('')
  const [removeCategoryId, setRemoveCategoryId] = useState('')

  const { id } = useParams()

  const { shops } = useAppSelector((state) => state.shop)
  const currentShop = shops?.find((s) => s.id === Number(id))

  const { data: productsdata } = useProductsQuery({
    variables: { filtersProducts: { shopId: Number(id) } },
  })
  useEffect(() => {
    if (productsdata?.products) {
      dispatch(setProducts(productsdata.products))
    }
  }, [dispatch, productsdata])

  const { products } = useAppSelector((state) => state.product)

  const { data: allMyShops } = useAllMyShopsQuery({ errorPolicy: 'all' })

  if (!id || !allMyShops?.meArtisan?.shops?.find((s) => s.id === Number(id))) {
    return <Navigate to='/private/shops' />
  }
  // Mutation hooks for adding and removing categories
  // const [addCategory] = useAddCategoryMutation();
  // const [removeCategory] = useRemoveCategoryMutation();

  const handleAddCategory = async () => {
    // Perform the mutation to add a new category
    try {
      // await addCategory({
      //   variables: { shopId: parseInt(id), categoryName: newCategoryName },
      //   refetchQueries: [{ query: SHOP_QUERY, variables: { id: parseInt(id) } }],
      // });
      setNewCategoryName('')
    } catch (error) {
      console.error('Error adding category:', error)
    }
  }

  const handleRemoveCategory = async () => {
    // Perform the mutation to remove a category
    try {
      // await removeCategory({
      //   variables: { categoryId: parseInt(removeCategoryId) },
      //   refetchQueries: [{ query: SHOP_QUERY, variables: { id: parseInt(id) } }],
      // });
      setRemoveCategoryId('')
    } catch (error) {
      console.error('Error removing category:', error)
    }
  }

  if (!currentShop) {
    return <div className='container mx-auto p-6'>not shop</div>
  }

  return (
    <div className='container mx-auto p-6'>
      {/* Shop Information */}
      <div>
        <h1 className='mb-4 text-3xl font-bold'>{currentShop.name}</h1>
        <p>{currentShop.description}</p>
        <p>
          Address: {currentShop.address}, {currentShop.city} - {currentShop.zipCode}
        </p>
        <p>Enabled: {currentShop.enabled ? 'Yes' : 'No'}</p>
      </div>

      {/* Manage Categories Section */}
      <div className='mt-8'>
        <h2 className='mb-4 text-xl font-bold'>Manage Categories</h2>
        <div className='flex items-center space-x-4'>
          <input
            type='text'
            placeholder='New Category Name'
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <button onClick={handleAddCategory} className='rounded bg-blue-500 px-4 py-2 text-white'>
            Add Category
          </button>
        </div>
        <div className='mt-4'>
          <select
            value={removeCategoryId}
            onChange={(e) => setRemoveCategoryId(e.target.value)}
            className='mr-2'
          >
            <option value='' disabled>
              Select Category to Remove
            </option>
            {currentShop.categoriesShops.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleRemoveCategory}
            className='rounded bg-red-500 px-4 py-2 text-white'
          >
            Remove Category
          </button>
        </div>
      </div>

      {/* List of Product Categories */}
      <div className='mt-8'>
        <h2 className='mb-4 text-xl font-bold'>Products</h2>
        {products?.length > 0 ? (
          <table className='w-full border'>
            <thead>
              <tr className='border'>
                <th className='border p-2'>Name</th>
                <th className='border p-2'>Price</th>
                <th className='border p-2'>Categories</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product.id} className='border'>
                  <td className='border p-2'>{product.name}</td>
                  <td className='border p-2'>${product.price}</td>
                  <td className='border p-2'>
                    {product?.categoriesProducts?.map((category) => category.name).join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products available in this shop.</p>
        )}
      </div>
    </div>
  )
}
