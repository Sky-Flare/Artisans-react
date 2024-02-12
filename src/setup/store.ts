import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../stores/user.ts'
import { menuSlice } from '../stores/menu.ts'
import { shopSlice } from '../stores/shop.ts'
import { productSlice } from '../stores/product.ts'
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    menu: menuSlice.reducer,
    shop: shopSlice.reducer,
    product: productSlice.reducer,
  },
  devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
