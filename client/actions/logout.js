import { removeUser } from '../utils/auth'

// function requestLogout () {
//   return {
//     type: 'LOGOUT_REQUEST',
//     isFetching: true,
//     isAuthenticated: true
//   }
// }

function receiveLogout () {
  return {
    type: 'LOGOUT_SUCCESS',
    isFetching: false,
    isAuthenticated: false,
    user: null
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

