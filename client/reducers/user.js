import request from '../utils/api'
import { get } from '../utils/localstorage'

// const initialState = {
//   first_name: 'Kubo',
//   last_name: 'Mepham',
//   dietary_requirements: 'banana'
// }

function getUserProfile(state=[], action) {
    switch (action.type) {
      case 'RECIEVE_USER':
        return [...state, action.user.first_name]
  
      default:
        return state
    }
  }

export default getUserProfile