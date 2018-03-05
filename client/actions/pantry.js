import request from '../utils/api'
import { get } from '../utils/localstorage'

function receivePantry(pantry) {
  return {
    type: 'RECEIVE_PANTRY',
    pantry
  }
}

export function getPantry() {
  console.log('getPantry action')
  return (dispatch) => {
    console.log('dispatch')
    return request ('get', 'pantry')
    .then(res => {
      console.log('res', res.body)
      dispatch(receivePantry(res.body))
    })
    .catch((err, res) => {
      console.log('error', err)
    })
  }
}
