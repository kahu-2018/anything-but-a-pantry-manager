import React from 'react'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'

import { addToMealplan } from '../actions/mealplan'
import { getChosenRecipe } from '../actions/recipe'
import { setShoppingList } from '../actions/mealplan'

function Recipe ({recipes, dispatch, recipe, mealplan}) {

  let randomNumber = Math.floor(Math.random()*recipes.length)
  const randomRecipe = Object.keys(recipe).length < 1 ? recipes[randomNumber] : recipe

  function handleClick(recipe) {
    dispatch(addToMealplan(recipe))
    findIngredients(recipe)
    dispatch(getChosenRecipe(recipe))
  }

  function findIngredients(recipe) {
    //Pull ingredients out of meal plan recipes
      function mealplanIngredients(mealplan) {
        return [...mealplan, recipe].reduce((arr, {ingredients}) =>
        {
          let ingrArr= ingredients.split(', ')
          ingrArr.forEach(entry => arr.push(entry))
          return arr
        }
        , [])
      }

    //Remove duplicate ingredients and create count for each
      let noDuplicates = mealplanIngredients(mealplan)
      let count = {}
      noDuplicates.forEach((ingredient) => count[ingredient] = (count[ingredient] || 0)+1)

    //Transform count object into array
      let shoppingList= Object.keys(count).map((ingredient) => ({ingredient: ingredient, count: count[ingredient]}))

    //Change global state
    dispatch(setShoppingList(shoppingList))
  }

    return recipes.length > 0
    ? <div className='centered'>
      <img className='img' src={randomRecipe.thumbnail} alt="food" />
      <h4 className='greenText'>{randomRecipe.title} <i className="pink fas fa-heart"></i></h4>
      <button className="btn btn-sm btn-outline-green btn-block mb-3" onClick={() => handleClick(randomRecipe)}>Add to Shopping List</button>
      <a target="_blank" href={randomRecipe.href} className="btn btn-sm btn-outline-green btn-block mb-3">Go to Recipe</a>
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
