import { withProviders } from './providers/index.ts'
import { Router } from './router.tsx'

function App() {
  return <Router />
}

export default withProviders(App)
