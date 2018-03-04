
function user(state={}, action) {
    console.log('reducers/user: action.type: ', action.type)

    switch (action.type) {
      case 'RECEIVED_USER':
        console.log('reducers/user: action.user: ', action.user)
        return {...action.user}

      default:
        return state
    }
}

export default user
