
function user(state={}, action) {
    switch (action.type) {
      case 'RECEIVED_USER':
        return {...action.user}

      default:
        return state
    }
}

export default user
