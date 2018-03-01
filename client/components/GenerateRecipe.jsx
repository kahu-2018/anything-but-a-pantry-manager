import React from 'react'

import Recipe from './Recipe.jsx'

// import {getRecipes} from '../actions/generateRecipe'
// import {getUser} from '../actions/users'

class GenerateRecipe extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      recipeVisible: false,
      noRecipe: null,
      selectedIngredient: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.filterRecipes = this.filterRecipes.bind(this)

  }

  handleChange() {
    this.setState({selectedIngredient: e.target.value})
  }

  handleClick() {
    // this.props.dispatch(getRecipes())
    // this.props.dispatch(getUser())
    filterRecipes()
  }

  filterRecipes() {
    let recipeArray = this.props.recipes
    let selectedRecipe = recipeArray.filter(recipe => {
      return (
        (recipe.ingredients == this.selectedIngredient) &&
        (recipe.ingredients != user.dietaryrestr)
      )
    })

    if (selectedRecipe.length > 0) {
      this.setState({noRecipe: false})
    } else {
      this.setState({noRecipe: true})
    }
  }



  render() {
    return (
      <div>
        <select onChange={this.handleChange}>
          <option>.map thru ingredients DB</option>
          <option>ingredient 1</option>
          <option>ingredient 2</option>
          <option>ingredient 3</option>
          <option>ingredient 4</option>
        </select>
        <button type="button" onClick={this.handleClick}>Find Recipe!</button>
        {this.state.recipeVisible && <Recipe />}
        <div className={this.state.noRecipe ? "show" : "hide"}>
          <p>No recipe found :(</p>
        </div>
      </div>
    )

  }
}

export default GenerateRecipe
