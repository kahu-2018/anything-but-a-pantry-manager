import request from 'superagent'


//API call to user db for restrictions
export function getUserRestrictions() {
  request()
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