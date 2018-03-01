import React from 'react'

import Recipe from './Recipe.jsx'

import {getRecipes} from '../actions/generateRecipe'
import {getUserRestrictions} from '../actions/users'

class GenerateRecipe extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      recipeVisible: false,
      noRecipe: null,
      selectedIngredients: null,
      dietaryRestrictions: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  ComponentDidMount() {
    let dietaryRestrictions = getUserRestrictions()
    this.setState({dietaryRestrictions: dietaryRestrictions})
  }

  handleChange(e) {
    this.setState({selectedIngredients: e.target.value})
  }

  handleClick() {
    this.props.dispatch(getRecipes(this.selectedIngredients, this.dietaryRestrictions))
    this.setState({recipeVisible: true})
  }

  render() {
    return (
      <div>

        <form method="get">
          <label>Recipe Search by Ingredients:</label>
          <input type="text" name="i" id="i" onChange={this.handleChange} />
        </form>

        <button type="button" onClick={this.handleClick}>Find Recipe!</button>
        {this.state.recipeVisible && <Recipe />}

        <div className={this.state.noRecipe ? "show" : "hide"}>
          <p>No recipe found :(</p>
        </div>

        <br/>Powered by <a href="http://www.recipepuppy.com">Recipe Puppy</a>

      </div>
    )

  }
}

export default GenerateRecipe
