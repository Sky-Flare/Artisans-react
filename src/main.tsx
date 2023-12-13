import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client/react'
import { client } from './setup/apollo.ts'
import { Provider } from 'react-redux'
import { store } from './setup/store.ts'
import { router } from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import './fontawesome'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
)
