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
    let selectedItem = e.target.value
    let ingredientList = [...this.state.selectedIngredients]
    let found = ingredientList.find(item => item == selectedItem)
    if (found) {
      if (e.target.checked === false) {
        ingredientList = ingredientList.filter(item => item != selectedItem)
      }
    } else {
      if (e.target.checked === true) {
        ingredientList.push(e.target.value)
      }
    }
    this.setState({selectedIngredients: ingredientList})
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
        <form onSubmit={(e) => e.preventDefault()}>
          {this.props.pantry ? this.props.pantry.map((ingredient, index) => <div key={"ing-" + index}><input type="checkbox" value={ingredient.name_of_food} onChange={this.handleCheckbox} checked={ingredient.checked} />{' '+ingredient.name_of_food[0].toUpperCase()+ ingredient.name_of_food.substring(1)}</div>) : <p>Pantry loading</p>}
        <br/>
          <div className="container-fluid">
            <div className="row">
              <div className='col-sm-9 marginZero'>
                <input autoComplete="off" id="inputfood" className="form-control mb-1 font-pLato" placeholder="Add Ingredient" type="text" />
              </div>
              <div className='col-md-3 marginZero'>
                <input className="btn btn-md btn-green btn-block mb-3" value="Add" type="submit" onClick={this.handleClick}/>
              </div>
            </div>
          </div>
          {this.state.selectedIngredients.map((item, index) => {
            return <p key={"ing-" + index} className='centered font-p'>{item} &nbsp;
              <button className="btn btn-sm mb-1 font-pLato btn-green-x" onClick={() => this.removeItem(item)}>X</button>
              </p>
          })
        }
        <button onClick={this.onClick} className="btn btn-lg btn-outline-green btn-block mb-3">Find New</button>
          {this.state.recipeVisible? [<Recipe key="1"/>] : ''}
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    recipes: state.recipes,
    user: state.user,
    dietaryRestrictions: state.dietaryRestrictions,
    pantry: state.pantry,
    recipe: state.recipe

  }
}

export default connect(mapStateToProps)(OneRecipe)
