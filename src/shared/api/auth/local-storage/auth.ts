import { UserNotRegistered, UserShouldSignout } from '../errors'
import { Credentials } from '../interfaces'
import { createUserWithCreds } from '../lib'
import {
  addUser,
  findUserByCreds,
  setCurrentUserId,
  shouldSignout,
} from './lib'

export async function signin(creds: Credentials) {
  if (shouldSignout()) {
    throw new UserShouldSignout()
  }

  const user = findUserByCreds(creds)

  if (user === undefined) {
    throw new UserNotRegistered()
  }

  setCurrentUserId(user.id)

  return user
}

export async function signup(creds: Credentials) {
  if (shouldSignout()) {
    throw new UserShouldSignout()
  }

  const user = findUserByCreds(creds)

  if (user !== undefined) {
    setCurrentUserId(user.id)
    return user
  }

  const newUser = createUserWithCreds(creds)

  addUser(newUser)
  setCurrentUserId(newUser.id)

  return newUser
}

export async function signout() {
  setCurrentUserId('')
}
