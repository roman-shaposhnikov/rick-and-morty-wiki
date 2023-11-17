import {
  UserNotRegisteredError,
  UserShouldSignoutError,
} from '../errors'
import { Credentials } from '../interfaces'
import { createUserWithCreds } from '../lib'
import {
  addUser,
  findUserByCreds,
  getCurrentUserId,
  setCurrentUserId,
  shouldSignout,
} from './lib'

export async function signin(creds: Credentials) {
  if (shouldSignout()) {
    throw new UserShouldSignoutError()
  }

  const user = findUserByCreds(creds)

  if (user === undefined) {
    throw new UserNotRegisteredError()
  }

  setCurrentUserId(user.id)

  return user
}

export async function signup(creds: Credentials) {
  if (shouldSignout()) {
    throw new UserShouldSignoutError()
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

export async function shouldSignin() {
  return { result: !shouldSignout(), id: getCurrentUserId() }
}
