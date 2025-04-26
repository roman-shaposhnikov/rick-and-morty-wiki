import { characterCli } from 'entities/character'
import { addToFavoriteCli } from 'features/add-to-favorite'
import { displayFavoritesCli } from 'features/display-favorites'
import { searchCli } from 'features/search'
import { signinCli } from 'features/signin'
import { signoutCli } from 'features/signout'
import { signupCli } from 'features/signup'

import { dispatch, getState } from './providers/store'

function configureCli(
  prototype: object,
  ...mixins: unknown[]
): Cli & Record<string, any> {
  const cli = Object.create(prototype)

  return Object.assign(cli, ...mixins)
}

const appCli = configureCli({ dispatch, getState })

appCli.auth = configureCli(appCli, signinCli, signupCli, signoutCli)
appCli.search = searchCli.search
appCli.character = configureCli(appCli, characterCli)
appCli.favorites = configureCli(
  appCli,
  addToFavoriteCli,
  displayFavoritesCli
)

export type AppCli = typeof appCli

export type Cli = {
  dispatch: AppDispatch
  getState: typeof getState
}

export function initializeAppCli() {
  window.appCli = appCli
}
