import request from 'superagent'
import {saveUserToken} from '../utils/auth'

function requestRegister () {
  return {
    type: 'REGISTER_REQUEST'
  }
}

export function registerSuccess (message) {
  return {
    type: 'REGISTER_SUCCESS',
    message
  }
}

export function registerFailure (message) {
  return {
    type: 'REGISTER_FAILURE',
    message
  }
}

export function registerRetype () {
  return {
    type: 'REGISTER_RETYPE'
  }
}

export function registerUser (creds) {
  return (dispatch) => {
    dispatch(requestRegister())
    request
      .post('/api/auth/register')
      .send(creds)
      .then(res => {
        if (res) {
          dispatch(registerSuccess(res.body.message))
        }
      })
      .catch(err => {
        console.log('registerFailure: err= ', err)
        dispatch(registerFailure(err.response.body.message))
      })

  }
}
