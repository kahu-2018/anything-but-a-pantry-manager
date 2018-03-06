import request from '../utils/api'
import { get } from '../utils/localstorage'

function receivePantry(pantry) {
  return {
    type: 'RECEIVE_PANTRY',
    pantry
  }
}

export function getPantry() {
  return (dispatch) => {
    return request ('get', 'pantry')
    .then(res => {
      dispatch(receivePantry(res.body))
    })
    .catch((err, res) => {
      console.log('error', err)
    })
  }
}
