import {combineReducers} from 'redux'

import auth from './auth'
import recipes from './generateRecipe'
import user from './user'
import dietaryRestrictions from './dietaryRestrictions'

export default combineReducers({
  auth,
  recipes,
  user,
  dietaryRestrictions
})
