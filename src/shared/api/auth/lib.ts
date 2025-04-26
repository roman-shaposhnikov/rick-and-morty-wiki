import {
  UserNotRegisteredError,
  UserShouldSignoutError,
} from './errors'
import { AuthError, Credentials, User } from './interfaces'

export function createUserWithCreds(creds: Credentials): User {
  return { id: crypto.randomUUID(), creds }
}

export function isAuthError(obj: unknown): obj is AuthError {
  return (
    obj instanceof UserNotRegisteredError ||
    obj instanceof UserShouldSignoutError
  )
}
