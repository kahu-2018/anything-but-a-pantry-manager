function receivePantry(state=[], action) {
  let newState = [...state]
  switch(action.type) {
    case 'RECEIVE_PANTRY':
      console.log(action)
      return [...action.pantry]

      case 'DELETE_ITEM':
      console.log(action, newState)
        return [...newState].filter(ingredient => ingredient.id !== action.ingredient.id)

    default:
        return state
  }
}

export default receivePantry
