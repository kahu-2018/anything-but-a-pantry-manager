import request from '../utils/api'
import { get } from '../utils/localstorage'

function receiveDietaryRestrictions(userDietaryRestrictions) {
  return {
    type: 'SET_RESTRICTIONS',
    userDietaryRestrictions
  }
}

export function getUserRestrictions (user_name) {
  console.log('getDR 1')
  return function (dispatch) {
    return request('get', 'users', user_name)
    .then(res => {
      dispatch(receiveDietaryRestrictions(res.body))
    })
    .catch(err => console.log('error', err))
   }
}

export function getUserProfile(user) {
  return (dispatch) => {
    request
      .get('/api/users/profile')
      .then(res => {
        console.log(res, "i am res")
      })
  }
}


export const editProfileRequest = (newProfile) => {
  return (dispatch) => {
    request
      .put('/api/profile/')
      .send(newProfile)
      .end((err, res) => {
        if (err) {
          console.log(err)
          return
        }
        dispatch(getProfilesRequest())
      })
  }
}
