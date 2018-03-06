import React from 'react'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'

import { addToMealplan } from '../actions/mealplan'
import { getChosenRecipe } from '../actions/recipe'

function Recipe ({recipes, dispatch, recipe}) {

  const handleClick = (recipe) => dispatch(addToMealplan(recipe))
  let randomNumber = Math.floor(Math.random()*recipes.length)
  const randomRecipe = Object.keys(recipe).length < 1 ? recipes[randomNumber] : recipe
  const saveRandomRecipe = (recipe) => dispatch(getChosenRecipe(recipe))

  return recipes.length > 0
    ? <div className='centered'>
      <img className='img' src={randomRecipe.thumbnail} alt="food" />
      <h4 className='greenText'>{randomRecipe.title} <i className="pink fas fa-heart"></i></h4>
      <button data-tip={"The " + randomRecipe.title + " ingredients have been added to your shopping list!"} data-event='click' className="btn btn-sm btn-outline-green btn-block mb-3" onClick={() => (saveRandomRecipe(randomRecipe), handleClick(randomRecipe))}>Add to Shopping List</button>
      <a target="_blank" href={randomRecipe.href}><button className="btn btn-sm btn-outline-green btn-block mb-3">Go to Recipe</button></a>
      <ReactTooltip place="top" type="dark" effect="solid" globalEventOff='click'/>
    </div>
    : <h4></h4>

}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    mealplan: state.mealplan,
    recipes: state.recipes.recipes,
    recipe: state.recipe
  }
}

export default connect(mapStateToProps)(Recipe)
