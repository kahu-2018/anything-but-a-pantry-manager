import React from 'react'
import { connect } from 'react-redux'

import {getRecipes} from '../../actions/generateRecipe'
import {getUserRestrictions} from '../../actions/user'

class WeeklyOptions extends React.Component{
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
        <form>
        <div class="form-group">
    <label for="exampleSelect1">How many meals do you need?</label>
    <select class="form-control" id="exampleSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
    </select>
  </div>
  <input id="inputfood" className="form-control mb-1 font-pLato" placeholder="Ingredients you have" name="user_name" type="text" required autoFocus="" onKeyPress={this.handleButtonPress} onChange={this.handleChange}/>
  <input className="btn btn-lg btn-green btn-block mb-3" value="Add ingredient" type="submit" />
  <input className="btn btn-lg btn-outline-green btn-block mb-3" value='Find' type="submit" />
</form>
      </div>


    )}
}

const mapStateToProps = (props) => {
  return {
    auth: props.auth,
    recipes: props.recipes
  }
}

export default connect(mapStateToProps)(WeeklyOptions)
