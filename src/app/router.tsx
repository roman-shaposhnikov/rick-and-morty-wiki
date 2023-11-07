import { Root } from 'pages/root'
import { SignUp } from 'pages/signup'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
