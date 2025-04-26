import { signinCli } from 'features/signin'
import { signoutCli } from 'features/signout'
import { signupCli } from 'features/signup'

const appCli = {
  auth: Object.assign({}, signinCli, signupCli, signoutCli),
}

export type AppCli = typeof appCli

export function initializeAppCli() {
  window.appCli = appCli
}
