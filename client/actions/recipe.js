import request from '../utils/api'
import { get } from '../utils/localstorage'



function receiveChosenRecipe(recipe) {
  return {
    type: 'RECEIVE_CHOSEN_RECIPE',
    recipe
  }
}

export function getChosenRecipe(recipe) {
  return (dispatch) => {
      dispatch(receiveChosenRecipe(recipe))
    }
  }
