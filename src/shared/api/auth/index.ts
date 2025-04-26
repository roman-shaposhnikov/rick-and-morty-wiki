import { AuthAPI } from './interfaces'

export { USER_NOT_REGISTERED, USER_SHOULD_SIGNOUT } from './errors'
export type { Credentials, User } from './interfaces'

export const authAPI: AuthAPI = await (async () => {
  switch (import.meta.env.VITE_REMOTE_STORE) {
    case 'ls':
      return (await import('./local-storage')).lsAuth
    default:
      return (await import('./local-storage')).lsAuth
  }
})()
