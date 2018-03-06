export default function receiveChosenRecipe(state={}, action) {
  switch(action.type) {
    case 'RECEIVE_CHOSEN_RECIPE':
      return {...action.recipe}
    case 'RECEIVE_RECIPES':
    return {}
    default:
        return state
  }
}
