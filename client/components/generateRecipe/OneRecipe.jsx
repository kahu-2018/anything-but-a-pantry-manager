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
      recipe: null,
      selectedIngredients: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.showRecipe = this.showRecipe.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.onClick = this.onClick.bind(this)
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

  handleCheckbox(e) {
    let selectedIngredient = e.target.value
    const newState = {...this.state}
    newState.selectedIngredients.push(selectedIngredient)
    this.setState(newState)
  }

  removeItem(item) {
    let newList = this.state.selectedIngredients.filter(ingredient => ingredient !== item)
    this.setState({selectedIngredients: newList})
  }

   onClick(e){
    const recipeName = this.props.buttonInfo[0].value
    this.props.toggleButtons(recipeName)
    this.showRecipe()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>

          {this.props.pantry ? this.props.pantry.map((ingredient, index) => <div><input type="checkbox" value={ingredient.name_of_food} onChange={this.handleCheckbox} checked={ingredient.checked} />{' '+ingredient.name_of_food[0].toUpperCase()+ ingredient.name_of_food.substring(1)}</div>) : <p>Pantry loading</p>}

          <input autoComplete="off" id="inputfood" className="form-control mb-1 font-pLato" placeholder="Add Another Ingredient" type="text" required autoFocus=""  />
          <input className="btn btn-lg btn-green btn-block mb-3" value="Add Ingredient" type="submit" />
        </form>
          {this.state.selectedIngredients.map(item => {
            return <p className='centered font-p'>{item}
              <button onClick={() => this.removeItem(item)}>Remove</button>
              </p>
          })
        }
        <button onClick={this.onClick} className="btn btn-lg btn-outline-green btn-block mb-3">Find New</button>
          {this.state.recipeVisible? [<Recipe key="1"/>] : ''}
      </div>

    )}
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    recipes: state.recipes,
    user: state.user,
    dietaryRestrictions: state.dietaryRestrictions,
    pantry: state.pantry.pantry,
    recipe: state.recipe

  }
}

export default connect(mapStateToProps)(OneRecipe)
