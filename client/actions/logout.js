import { removeUserToken } from '../utils/auth'
import { removeUserProfile } from '../utils/user'

function requestLogout () {
  return {
    type: 'LOGOUT_REQUEST'
  }
}

function receiveLogout () {
  return {
    type: 'LOGOUT_SUCCESS'
  }
}

// Logs the user out
export function logoutUser () {
  return dispatch => {
    document.location = "/#/"
    dispatch(requestLogout())
    removeUserToken()
    removeUserProfile()
    dispatch(receiveLogout())
  }
}

