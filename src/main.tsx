import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client/react'
import { client } from './setup/apollo.ts'
import { Provider } from 'react-redux'
import { store } from './setup/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
)
