import {combineReducers} from 'redux'

import auth from './auth'
import recipes from './generateRecipe'
import user from './user'

export default combineReducers({
  auth,
  recipes,
  user
})
