import { createBrowserRouter } from 'react-router-dom'
import { PublicLayout } from './layout/PublicLayout.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { ProtectedLayout } from './layout/ProtectedLayout.tsx'
import { ProfilePage } from './pages/ProfilePage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'

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
    ],
  },
  {
    path: 'private',
    element: <ProtectedLayout />,
    children: [
      {
        path: 'profile',
        element: <ProfilePage />,
      },
    ],
  },
])
