import request from '../utils/api'
import { get } from '../utils/localstorage'

function receiveRecipes(recipes) {
  return {
    type: 'RECEIVE_RECIPES',
    recipes: recipes
  }
}

export function getRecipes (pantryIngredients, dietaryRestrictions) {
  console.log('DR in GR action ', pantryIngredients)
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
