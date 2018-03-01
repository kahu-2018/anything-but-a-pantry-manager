import request from '../utils/api'
import { get } from '../utils/localstorage'

function receiveRecipes(recipes) {
  console.log('hello', typeof recipes)
  return {
    type: 'RECEIVE_RECIPES',
    recipes
  }
}

export function getRecipes (pantryIngredients, dietaryRestrictions) {
  return function (dispatch) {
    return request ('get', 'recipes', {i: pantryIngredients, q: dietaryRestrictions, onlyImages: 1})
    .then(res => {
      dispatch(receiveRecipes(res.body.results))
    })
    .catch((err, res) => {
      console.log('error', err)
      //(err, res.body)
    })
  }
}
