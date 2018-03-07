import { getLocalUserProfile } from '../utils/user'

const initialState = getLocalUserProfile()

function user(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVED_USER':
      return {...action.user}

    default:
      return state
  }
}

export default user