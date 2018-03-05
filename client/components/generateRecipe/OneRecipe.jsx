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
      selectedIngredients: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.showRecipe = this.showRecipe.bind(this)

  }

  handleClick(e) {
    e.preventDefault()
    let target = document.getElementById('inputfood')
    let selectedIngredient = target.value
    target.value = ''
    const newState = {...this.state}
    newState.selectedIngredients.push(selectedIngredient)
    this.setState(newState)
  }

  showRecipe() {
    this.props.dispatch(getRecipes(this.state.selectedIngredients, this.props.dietaryRestrictions))
    this.setState({recipeVisible: true})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <input id="inputfood" className="form-control mb-1 font-pLato" placeholder="Ingredients you have" type="text" required autoFocus=""  />
          <input className="btn btn-lg btn-green btn-block mb-3" value="Add Ingredient" type="submit" />
        </form>
          {this.state.selectedIngredients.map(item => {
            return <p className='centered font-p'>{item}</p>
          })
        }
        <button onClick={this.showRecipe} className="btn btn-lg btn-outline-green btn-block mb-3">Find New</button>
          {this.state.recipeVisible? [<Recipe key="1"/>] : ''}
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
