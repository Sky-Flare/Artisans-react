import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../setup/store'

interface MenuState {
  open: boolean
}

const initialState: MenuState = {
  open: true,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setOpenMenu: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload
    },
  },
})

export const { setOpenMenu } = menuSlice.actions

export const selectUser = (state: RootState) => state.user
