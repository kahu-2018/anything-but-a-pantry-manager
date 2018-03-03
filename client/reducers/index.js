import {combineReducers} from 'redux'

import auth from './auth'
import recipes from './generateRecipe'
import user from './user'
import userDietaryRestrictions from './userDietaryRestrictions'

export default combineReducers({
  auth,
  recipes,
  user,
  userDietaryRestrictions
})
