function setUserRestrictions(state=[], action) {
  switch (action.type) {
    case 'SET_RESTRICTIONS':
      return [...state, action.userDietaryRestrictions]

    default:
      return state
  }
}

export default setUserRestrictions
