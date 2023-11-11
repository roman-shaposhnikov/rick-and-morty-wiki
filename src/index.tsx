import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App, { initializeAppCli } from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

initializeAppCli()
