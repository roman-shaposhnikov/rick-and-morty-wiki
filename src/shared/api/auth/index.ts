import { AuthAPI } from './interfaces'
import { lsAuthAPI } from './local-storage'

export {
  USER_ALREADY_EXISTS,
  USER_NOT_REGISTERED,
  USER_SHOULD_SIGNOUT,
} from './errors'
export type { Credentials, User } from './interfaces'

// TODO: подумать над await import('./local-storage'), чтобы не импортить все модули
// попробовать еще раз с default export
export const authAPI: AuthAPI = (() => {
  switch (import.meta.env.VITE_REMOTE_STORE) {
    case 'ls':
      return lsAuthAPI
    default:
      return lsAuthAPI
  }
})()
