import React from 'react'
import { connect } from 'react-redux'

import { getRecipes } from '../../actions/generateRecipe'
import { getUserRestrictions } from '../../actions/user'
import Recipe from '../Recipe'

class OneRecipe extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      recipeVisible: false,
      noRecipe: null,
      selectedIngredients: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  handleChange(e) {
    this.setState({selectedIngredients: e.target.value})
  }

  handleClick(e) {
    e.preventDefault()
    this.props.dispatch(getRecipes(this.state.selectedIngredients, this.props.dietaryRestrictions))
    this.setState({recipeVisible: true})

  }

  render() {
    let recipe = this.props.recipes
    let randomNumber = Math.floor(Math.random()*10)
    const randomRecipe = recipe[randomNumber]

console.log('props', recipe)


    return (
      <div>
        <form >
        <input id="inputfood" className="form-control mb-1 font-pLato" placeholder="Ingredients you have" name="user_name" type="text" required autoFocus="" onKeyPress={this.handleButtonPress} onChange={this.handleChange}/>
        <input className="btn btn-lg btn-green btn-block mb-3" value="Add ingredient" type="submit" />
        <input className="btn btn-lg btn-outline-green btn-block mb-3" value='Find' type="submit" onClick={this.handleClick}/>

          {this.state.recipeVisible? <Recipe /> : ''}

      </form>
        <div>

        </div>
      </div>

    )}
}

const mapStateToProps = (props) => {
  return {
    auth: props.auth,
    recipes: props.recipes,
    user: props.user,
    dietaryRestrictions: props.dietaryRestrictions
  }
}

export default connect(mapStateToProps)(OneRecipe)
