function receivePantry(state=[], action) {
  switch(action.type) {
    case 'RECEIVE_PANTRY':
      return {...action.pantry}

    default:
        return state
  }
}

export default receivePantry
