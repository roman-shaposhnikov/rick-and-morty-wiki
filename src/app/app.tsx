import './styles/global.css'

import { initializeAppCli } from './cli.ts'
import { Router } from './router.tsx'

export function App() {
  initializeAppCli()

  return <Router />
}
