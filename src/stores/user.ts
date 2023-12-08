import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../setup/store'

interface UserState {
  email: string
  firstName: string
  id: number
  lastName: string
  token: string
}

const initialState: UserState = {
  email: '',
  firstName: '',
  id: 0,
  lastName: '',
  token: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Omit<UserState, 'token'>>) => {
      const { id, email, firstName, lastName } = action.payload
      state.id = id
      state.email = email
      state.firstName = firstName
      state.lastName = lastName
    },
    setToken: (state, action: PayloadAction<UserState['token']>) => {
      state.token = action.payload
    },
  },
})

export const { setUser, setToken } = userSlice.actions

export const selectUser = (state: RootState) => state.user
