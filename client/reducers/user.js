const initialState = {

}
function user(state={}, action) {
  let newState = {...state}
    switch (action.type) {
      case 'RECEIVED_USER':
        return {...action.user}
  
      default:
        return state
    }
}

export default user
