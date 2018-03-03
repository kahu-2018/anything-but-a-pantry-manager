import request from '../utils/api'
import { get } from '../utils/localstorage'

function receiveDietaryRestrictions(userDietaryRestrictions) {
  return {
    type: 'SET_RESTRICTIONS',
    userDietaryRestrictions
  }
}

export function getUserProfile (userId) {
  console.log('getDR 1')
  return function (dispatch) {
    const endpoint = 'users/' + userId
    request('get', endpoint)
      .then(res => {
        console.log("res.body: ", res.body)
        return {
          type: 'RECIEVE_USER',
          user: {...res.body.user}
        }
      })
    // .then(res => {
    //   dispatch(receiveDietaryRestrictions(res.body))
    // })
    // .catch(err => console.log('error', err))
   }
}

// export function getUserProfile(userId) {
//   return (dispatch) => {
//     console.log('user id', userId)
//     request
//       .get('/api/users/profile')
//       .then(res => {
//         console.log(res, "i am res")
//       })
//   }
// }


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
