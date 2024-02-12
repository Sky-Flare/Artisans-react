import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MeArtisanQuery } from '../generated/graphql.ts'
import { RootState } from '../setup/store.ts'
import { ArrayElement } from '../setup/helper.ts'

type ShopsType = NonNullable<MeArtisanQuery['meArtisan']>['shops']
const initialState: { shops: ShopsType } = { shops: [] }

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setShops: (state, action: PayloadAction<ShopsType>) => {
      console.log('setShops', action.payload)
      if (action.payload?.length) {
        state.shops = action.payload
      }
    },
    updateShop: (state, action: PayloadAction<ArrayElement<ShopsType>>) => {
      const index = state.shops?.findIndex((shop) => shop.id === action.payload.id)
      if (index !== -1 && index && state.shops?.[index]) {
        state.shops[index] = action.payload
      }
    },
  },
})

export const { setShops, updateShop } = shopSlice.actions
export const myShops = (state: RootState) => state.shop
