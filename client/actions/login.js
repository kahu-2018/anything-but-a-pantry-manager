import request from '../utils/api'

import { saveUserToken } from '../utils/auth'

function requestLogin () {
  return {
    type: 'LOGIN_REQUEST'
  }
}

export function receiveLogin (user) {
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
}

export function loginFailure (message) {
  return {
    type: 'LOGIN_FAILURE',
    message
  }
}

export function loginRetype () {
  return {
    type: 'LOGIN_RETYPE',
    message: ''
  }
}

export function loginUser (creds) {
  return dispatch => {
    dispatch(requestLogin())
    return request('post', 'auth/login', creds)
      .then((response) => {
        const userInfo = saveUserToken(response.body.token)
        dispatch(receiveLogin(userInfo))
        document.location = "/#/generateRecipe"
      })
      .catch(err => {
        dispatch(loginFailure(err.response.body.message))
      })
  }
}