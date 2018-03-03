import request from '../utils/api'
import { get } from '../utils/localstorage'

function user(state={}, action) {
    switch (action.type) {
      case 'RECIEVE_USER':
        return {...action.user}

      default:
        return state
    }
}

export default user
