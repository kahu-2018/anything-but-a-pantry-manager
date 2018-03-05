import request from '../utils/api'
import { get } from '../utils/localstorage'

function receiveRecipes(recipes) {
  return {
    type: 'RECEIVE_RECIPES',
    recipes: recipes,
    isSearching:false
  }
}

function requestRecipes() {
  return {
    type: 'REQUEST_RECIPES',
    isSearching: true
  }
}

export function getRecipes (pantryIngredients, dietaryRestrictions) {
  return function (dispatch) {
    dispatch(requestRecipes())
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
