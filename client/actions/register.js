import request from 'superagent'
import {saveUserToken} from '../utils/auth'
import {receiveLogin, loginFailure} from './login'

export function registerUser (creds) {
  return (dispatch) => {
    request
      .post('/api/auth/register')
      .send(creds)
      .then(res => {
        console.log('register successful: res = ', res)
        console.log('register successful: res.body.message= ', res.body.message)
        console.log('register successful: res.statusCode= ', res.statusCode)
        //dispatch(registerSuccess())
        // const userInfo = saveUserToken(res.body.token)
        // dispatch(receiveLogin(userInfo))
        // document.location = "/#/"
      })
      .catch(err => {
        console.log('registerFailure: err= ', err)
        dispatch(registerFailure(err.response.body.message))
      })

  }
}

function registerSuccess (message) {
  console.log('registerSuccess: message= ', message)
}

export function registerRetype () {
  return {
    type: 'REGISTER_RETYPE',
    message: ''
  }
}

export function registerFailure (message) {
  return {
    type: 'REGISTER_FAILURE',
    message
  }
}