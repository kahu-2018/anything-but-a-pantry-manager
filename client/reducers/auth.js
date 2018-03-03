import { isAuthenticated, getUserTokenInfo } from '../utils/auth'

const initialState = {
  isFetching: false,
  isAuthenticated: isAuthenticated(),
  user: {auth_id: 16, id: 3, user_name: 'kubo_the_dog', email: 'kubo@thedog.com', first_name: 'Kubo', last_name: 'Mepham', image: '', dietary_restrictions: 'vegan'},
  errorMessage: ''
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: ''
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        user: action.user
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.message
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        user: action.user
      }
    // case 'REGISTER_REQUEST':
    //   return {
    //     ...state,
    //     isFetching: true,
    //     isAuthenticated: false,
    //     errorMessage: ''
    //   }
    // case 'REGISTER_FAILURE':
    //   return {
    //     ...state,
    //     isFetching: false,
    //     isAuthenticated: false,
    //     errorMessage: action.message
    //   }
    default:
      return state
  }
}
