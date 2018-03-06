import request from '../utils/api'
// import { get } from '../utils/localstorage'
// import {remove} from '../utils/localstorage'

function receivePantry(pantry) {
  return {
    type: 'RECEIVE_PANTRY',
    pantry
  }
}

function deleteItem(ingredient) {
  return {
    type: 'DELETE_ITEM',
    ingredient
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

export function removePantryIngredient(ingredient) {
  console.log('action', ingredient)
  return (dispatch) => {
    console.log('action2')
    return request ('delete', 'pantry', ingredient)
    .then(res => {
      dispatch(deleteItem(ingredient))
    })
    .catch((err) => {
      console.log('error', err)
    })
  }
}
