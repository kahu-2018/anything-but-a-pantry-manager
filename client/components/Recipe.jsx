import React from 'react'
import { connect } from 'react-redux'

import {addToMealplan} from '../actions/mealplan'



function Recipe ({recipes, dispatch}) {
  const handleClick = (recipe) => dispatch(addToMealplan(recipe))
  let randomNumber = Math.floor(Math.random()*10)
  const randomRecipe = recipes[randomNumber]

  return recipes.length > 0
    ? <div className='centered'>
    <img className='img' src={randomRecipe.thumbnail} alt="food" />
    <h4 className='greenText'>{randomRecipe.title} <i className="pink fas fa-heart"></i></h4>
    <button className="btn btn-sm btn-outline-green btn-block mb-3" onClick={() => handleClick(randomRecipe)}>Add to Shopping List</button>
    <a target="_blank" href={randomRecipe.href}><button className="btn btn-sm btn-outline-green btn-block mb-3">Go to Recipe</button></a>
    </div>
    : <h4></h4>

}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    recipes: state.recipes,
    mealplan: state.mealplan
  }
}

export default connect(mapStateToProps)(Recipe)
