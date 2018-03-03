import React from 'react'
import { connect } from 'react-redux'

import {getRecipes} from '../../actions/generateRecipe'
import {getUserRestrictions} from '../../actions/user'

class RandomRecipe extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      recipeVisible: false,
      selectedIngredients: null,
      dietaryRestrictions: null,
    }

  }

  ComponentDidMount() {
    let dietaryRestrictions = getUserRestrictions(1)
    this.setState({dietaryRestrictions: dietaryRestrictions})
  }

  handleClick(e) {
    e.preventDefault()
    this.props.dispatch(getRecipes(this.state.selectedIngredients, this.state.dietaryRestrictions))
    this.setState({recipeVisible: true})
  }

  render(props) {
    let recipe = this.props.recipes
    let randomNumber = Math.floor(Math.random()*10)

    console.log(randomNumber)
    console.log(recipe[0])

    return (
      <div>
        <form onSubmit={this.handleClick}>
          <input className="btn btn-lg btn-outline-green btn-block mb-3" value='Find' type="submit" />
          {this.props.recipes.map(recipe =>
            <a href={recipe.href} target="_blank"><img className='img' src={recipe.thumbnail} alt="food" /><h4>{recipe.title}</h4></a>
            )}
      </form>
        <div>

        </div>
      </div>

    )}
}

const mapStateToProps = (props) => {
  return {
    auth: props.auth,
    recipes: props.recipes
  }
}

export default connect(mapStateToProps)(RandomRecipe)
