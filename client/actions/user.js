import request from 'superagent'


function receiveDietaryRestrictions(userDietaryRestrictions) {
  return {
    type: 'SET_RESTRICTIONS',
    userDietaryRestrictions
  }
}

export function getUserRestrictions(userId) {
  return function (dispatch) {
    request('get', 'users/restrictions', userId)
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
