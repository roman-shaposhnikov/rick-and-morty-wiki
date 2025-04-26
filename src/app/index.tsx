import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { withProviders } from './providers/index.ts'

function App() {
  return <RouterProvider router={router} />
}

export default withProviders(App)
