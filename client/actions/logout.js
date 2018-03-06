import { removeUser } from '../utils/auth'

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
    removeUser()
    dispatch(receiveLogout())
  }
}

