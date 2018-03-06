import request from '../utils/api'
import {get} from '../utils/localstorage'


function receivedUser(user) {
  return {
    type: 'RECEIVED_USER',
    user: {...user},
    userDietaryRestrictions: {...user.dietary_restrictions}
  }
}

function receivedDietaryRestriction(user) {
  const dietary_restrictions = user.dietary_restrictions
  return {
    type: 'RECEIVED_DR',
    dietaryRestrictions: dietary_restrictions
  }

}

export function getUserProfile(userId) {
  return function (dispatch) {
    const endpoint = 'users/profile/' + userId
    console.log('actions/user/getUserProfile: endpoint: ', endpoint)
    request('get', endpoint)
      .then(res => {
        if (res.body.user) {
          dispatch(receivedUser(res.body.user))
          dispatch(receivedDietaryRestriction(res.body.user))
        }
      })
      .catch((err) => {
        console.log('actions/user/getUserProfile: error: ', err)
      })
  }
}

export const editProfile = (profile) => {
  return {
    type: 'EDIT_USER',
    profile
  }
}


export const editProfileRequest = (userId, data) => {
  console.log('editProfileRequest data: ', data)
  return (dispatch) => {
    const endpoint = 'users/profile/' + userId
    request('put', endpoint, data)
      .then((res) => {
        console.log('editProfileRequest res: ', res)
        dispatch(getUserProfile(userId))
      })
      .catch((err) => {
        console.log('actions/user/getUserProfile: error: ', err)
      })
  }
}
