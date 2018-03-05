function dietaryRestrictions(state="", action) {

  switch (action.type) {
    case 'RECEIVED_DR':
      return action.dietaryRestrictions

    default:
      return state
  }
}

export default dietaryRestrictions
