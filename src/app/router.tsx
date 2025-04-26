import { createBrowserRouter } from 'react-router-dom'

import { Root } from 'pages/root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
])
