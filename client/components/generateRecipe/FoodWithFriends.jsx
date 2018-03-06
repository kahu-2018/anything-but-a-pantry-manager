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
        <br/>
          <div className="container-fluid">
            <div className="row">
              <div className='col-sm-9 marginZero'>
                <input autoComplete="off" id="inputfood" className="form-control mb-1 font-pLato" placeholder="Add Another Ingredient" type="text" required autoFocus=""  />
              </div>
              <div className='col-md-3 marginZero'>
                <input className="btn btn-md btn-green btn-block mb-3" value="Add" type="submit" />
              </div>
            </div>
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

export default connect(mapStateToProps)(FoodWithFriends)
