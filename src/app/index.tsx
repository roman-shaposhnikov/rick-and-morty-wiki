import { RouterProvider } from 'react-router-dom'

import { withProviders } from './providers/index.ts'
import { router } from './router.tsx'

function App() {
  return <RouterProvider router={router} />
}

export default withProviders(App)
