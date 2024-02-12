import { createBrowserRouter } from 'react-router-dom'
import { PublicLayout } from './layout/PublicLayout.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { ProtectedLayout } from './layout/ProtectedLayout.tsx'
import { DashboardPage } from './pages/DashboardPage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import { RegisterPage } from './pages/RegisterPage.tsx'
import { ShopsPage } from './pages/ShopsPage.tsx'
import { ShopPage } from './pages/ShopPage.tsx'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: 'private',
    element: <ProtectedLayout />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'shops',
        element: <ShopsPage />,
        children: [
          {
            path: ':id',
            element: <ShopPage />,
          },
        ],
      },
      {
        path: 'products',
        element: <DashboardPage />,
      },
      {
        path: 'orders',
        element: <DashboardPage />,
      },
      {
        path: 'settings',
        element: <DashboardPage />,
      },
    ],
  },
])
