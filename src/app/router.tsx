import { Root } from 'pages/root'
import { createHashRouter } from 'react-router-dom'

export const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
  },
])
