import request from '../utils/api'
import { get } from '../utils/localstorage'

function getUserProfile(state=[], action) {
    switch (action.type) {
      case 'RECIEVE_USER':
        return [...state, action.user]

      default:
        return state
    }
  }

function generateUserRestrictions(state=[], action) {
  switch (action.type) {
    case 'SET_RESTRICTIONS':
      return [...state, action.userDietaryRestrictions]

    default:
      return state
  }
}

export default getUserProfile
