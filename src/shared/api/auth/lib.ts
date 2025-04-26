import { Credentials, User } from './interfaces'

export function createUserWithCreds(creds: Credentials): User {
  return { id: crypto.randomUUID(), creds }
}
