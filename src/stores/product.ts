import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductsQuery } from '../generated/graphql.ts'
import { RootState } from '../setup/store.ts'

type ProductsType = NonNullable<ProductsQuery['products']>
const initialState: { products: ProductsType } = { products: [] }

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductsType>) => {
      console.log('serProducts', action.payload)
      if (action.payload?.length) {
        const uniqueProducts = action.payload.filter(
          (newProduct) =>
            !state.products.some((existingProduct) => existingProduct.id === newProduct.id),
        )

        state.products = state.products.concat(uniqueProducts)
      }
    },
  },
})

export const { setProducts } = productSlice.actions
export const myShops = (state: RootState) => state.shop
