import request from '../utils/api'

function receivePantry(pantry) {
  return {
    type: 'RECEIVE_PANTRY',
    pantry
  }
}

function deleteItem(ingredient) {
  return {
    type: 'DELETE_PANTRY_ITEM',
    ingredient
  }
}

function addItem(item) {
  console.log('additem', item)
  return {
    type: 'ADD_ITEM',
    item
  }
}

export function getPantry() {
  console.log('after res')
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

export function addPantryItem(item){
  return (dispatch) => {
    return request ('post', 'pantry', {item})
    .then(res => {
      dispatch(addItem(res.body))
    })
    .catch((err) => {
      console.log('error', err)
    })
  }
}

export function removePantryIngredient(ingredient) {
  return (dispatch) => {
    return request ('delete', 'pantry', ingredient)
    .then(res => {
      dispatch(deleteItem(ingredient))
    })
    .catch((err) => {
      console.log('error', err)
    })
  }
}
