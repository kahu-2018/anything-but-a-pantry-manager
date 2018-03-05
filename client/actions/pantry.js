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
<<<<<<< HEAD
<<<<<<< HEAD
=======
      console.log('res', res.body)
>>>>>>> Action calls action.type
=======
>>>>>>> Pantry global state updated woop
      dispatch(receivePantry(res.body))
    })
    .catch((err, res) => {
      console.log('error', err)
    })
  }
}
