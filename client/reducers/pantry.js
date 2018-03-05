function receivePantry(state=[], action) {
  console.log('action.pantry', action.pantry)
  switch(action.type) {
    case 'RECEIVE_PANTRY':
      return {...action.pantry}

    default:
        return state
  }
}

export default receivePantry
