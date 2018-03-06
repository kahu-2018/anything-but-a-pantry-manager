function receivePantry(state=[], action) {
  let newState = [...state]
  switch(action.type) {
    case 'RECEIVE_PANTRY':
      return {...action.pantry}

      case 'DELETE_ITEM':
        return [...newState].filter(ingredient => ingredient = !action.ingredient)

    default:
        return state
  }
}

export default receivePantry
