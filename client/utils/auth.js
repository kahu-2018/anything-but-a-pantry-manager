const decode = require('jwt-decode')

import {get, set, remove} from './localstorage'

export function isAuthenticated () {
  const token = get('token')

  if (token) {
    const payload = decode(token)
    const expiry = payload.exp

    if (expiry < new Date().getTime() / 1000) {
      removeUser()
      return false
    }
    return true
  } else {
    return false
  }
}

export function saveUserToken (token) {
  set('token', token)
  return decode(token)
}

export function getUserTokenInfo () {
  const token = get('token')
  return token ? decode(token) : null
}

export function removeUser () {
  remove('token')
}
