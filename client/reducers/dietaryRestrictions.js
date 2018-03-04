function dietaryRestrictions(state=[], action) {
  console.log('reducers/dietaryRestrictions: action.type: ', action.type)

  switch (action.type) {
    case 'RECEIVED_DR':
    console.log('reducers/dietaryRestrictions: action.dietaryRestrictions: ', action.dietaryRestrictions)
      return action.dietaryRestrictions

    default:
      return state
  }
}

export default dietaryRestrictions
