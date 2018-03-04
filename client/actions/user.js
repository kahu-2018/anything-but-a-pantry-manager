import request from '../utils/api'
import {get} from '../utils/localstorage'


// function receiveDietaryRestrictions(userDietaryRestrictions) {
//   return {
//     type: 'SET_RESTRICTIONS',
//     userDietaryRestrictions
//   }
// }

function receivedUser(user) {
  console.log("actions/user/receivedUser: user: ", user)
  return {
    type: 'RECEIVED_USER',
    user: { ...user
    },
    userDietaryRestrictions: { ...user.dietary_restrictions
    }
  }
}

function receivedDietaryRestriction(user) {
  console.log("actions/user/receivedDietaryRestriction: user: ", user)
  console.log("actions/user/receivedDietaryRestriction: user.dietary_restrictions: ", user.dietary_restrictions)
  const dietary_restrictions = user.dietary_restrictions
  // if (!dietary_restrictions) {
  //   return {
  //     type: 'NOTHING'
  //   }
  // } else {
    console.log("actions/user/receivedDietaryRestriction: dietary_restrictions: ", dietary_restrictions)
    return {
      type: 'RECEIVED_DR',
      dietaryRestrictions: dietary_restrictions
    }
 // }
}

export function getUserProfile(userId) {
  console.log('actions/user/getUserProfile: userId = ', userId)
  return function (dispatch) {
    const endpoint = 'users/' + userId
    request('get', endpoint)
      .then(res => {
        dispatch(receivedUser(res.body.user))
        dispatch(receivedDietaryRestriction(res.body.user))
      })
      .catch((err) => {
        console.log('actions/user/getUserProfile: error: ', err)
      })
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