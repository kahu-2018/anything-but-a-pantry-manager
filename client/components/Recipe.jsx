import React from 'react'
import { connect } from 'react-redux'

import {addToMealplan} from '../actions/mealplan'

function Recipe ({recipes}) {
  let randomNumber = Math.floor(Math.random()*10)
  const randomRecipe = recipes[randomNumber]

  return recipes.length > 0
    ? <div className='centered'>
    <img className='img' src={randomRecipe.thumbnail} alt="food" />
    <h4 className='greenText'>{randomRecipe.title} <i class="pink fas fa-heart"></i></h4>
    <button className="btn btn-sm btn-outline-green btn-block mb-3" onClick={addToMealplan}>Add to Shopping List</button>
    <button className="btn btn-sm btn-outline-green btn-block mb-3" href={randomRecipe.href}>Go to Recipe</button>
    </div>
    : <h4>No results returned</h4>

}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(Recipe)
