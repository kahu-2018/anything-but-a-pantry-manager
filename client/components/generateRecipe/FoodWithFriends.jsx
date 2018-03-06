import React from 'react'
import { connect } from 'react-redux'

import {getRecipes} from '../../actions/generateRecipe'
import {getUserRestrictions} from '../../actions/user'

class FoodWithFriends extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      recipeVisible: false,
      selectedIngredients: null,
      dietaryRestrictions: null,
    }
    this.onClick = this.onClick.bind(this)
  }

  ComponentDidMount() {
    let dietaryRestrictions = getUserRestrictions(1)
    this.setState({dietaryRestrictions: dietaryRestrictions})
  }

  onClick(e){
    const recipeName = this.props.buttonInfo[3].value
    this.props.toggleButtons(recipeName)
  }
  render() {

    return (
      <div>
        <div className="form-group">
          <label htmlFor="exampleSelect1">Select Friend</label>
          <select className="form-control" id="exampleSelect1">
            <option>Jess</option>
            <option>Maia</option>
            <option>Nick</option>
            <option>Brian</option>
            <option>Mel</option>
          </select>
        </div>
        <input id="inputfood" className="form-control mb-1 font-pLato" placeholder="Ingredients you have" name="user_name" type="text" required autoFocus="" onKeyPress={this.handleButtonPress} onChange={this.handleChange}/>
        <input className="btn btn-lg btn-green btn-block mb-3" value="Add ingredient" type="submit" />
        <input onClick={this.onClick} className="btn btn-lg btn-outline-green btn-block mb-3" value='Find New' type="submit" />
      </div>
    )}
}

const mapStateToProps = (props) => {
  return {
    auth: props.auth,
    recipes: props.recipes
  }
}

export default connect(mapStateToProps)(FoodWithFriends)
