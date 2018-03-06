export default function receiveChosenRecipe(state=[], action) {
  console.log('action.recipe', action.recipe)
  switch(action.type) {
    case 'RECEIVE_CHOSEN_RECIPE':
      return {...action.recipe}

    default:
        return state
  }
}
