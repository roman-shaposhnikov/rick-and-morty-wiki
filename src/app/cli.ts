import { signinCli } from 'features/signin'

const appCli = {
  auth: { ...signinCli },
}

export type AppCli = typeof appCli

export function initializeAppCli() {
  window.appCli = appCli
}
