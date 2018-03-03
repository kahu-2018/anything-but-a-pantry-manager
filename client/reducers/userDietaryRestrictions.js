function userDietaryRestrictions(state=[], action) {
  switch (action.type) {
    case 'SET_RESTRICTIONS':
      return [...action.userDietaryRestrictions]

    default:
      return state
  }
}

export default userDietaryRestrictions
