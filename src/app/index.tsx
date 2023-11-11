import { App } from './app'
import { withProviders } from './providers'

export { initializeAppCli } from './cli'

export default withProviders(App)
