import { isAuthenticated, getUserTokenInfo } from '../utils/auth'

const initialState = {
  isFetching: false,
  isAuthenticated: isAuthenticated(),
  user: getUserTokenInfo(),
  message: '',
  newAccountDone: false
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: {...action.user},
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        message: action.message
      }
    case 'LOGIN_RETYPE':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        message: ''
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        user: action.user,
        message: action.message
      }
    case 'REGISTER_REQUEST':
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        message: '',
        newAccountDone: false
      }
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        message: action.message,
        newAccountDone: true
      }
    case 'REGISTER_RETYPE':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        message: '',
        newAccountDone: false
      }
    case 'REGISTER_FAILURE':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        message: action.message,
        newAccountDone: false
      }
    default:
      return state
  }
}