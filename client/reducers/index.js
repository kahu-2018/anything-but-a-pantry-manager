import {combineReducers} from 'redux'

import auth from './auth'
import recipes from './generateRecipe'

export default combineReducers({
  auth,
  recipes
})
