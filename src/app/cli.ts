import { signinCli } from 'features/signin'
import { signoutCli } from 'features/signout'
import { signupCli } from 'features/signup'

import { dispatch } from './providers/store'

function configureCli(...mixins: unknown[]): Cli {
  const cli = Object.create({ dispatch })

  return Object.assign(cli, ...mixins)
}

const appCli = {
  auth: configureCli(signinCli, signupCli, signoutCli),
}

export type AppCli = typeof appCli

export type Cli = {
  dispatch: AppDispatch
}

export function initializeAppCli() {
  window.appCli = appCli
}
