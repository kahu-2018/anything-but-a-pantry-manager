import React from 'react'
import { connect } from 'react-redux'

import Recipe from './Recipe.jsx'
import OneRecipe from './generateRecipe/OneRecipe'
import RandomRecipe from './generateRecipe/RandomRecipe'
import WeeklyOptions from './generateRecipe/WeeklyOptions'
import FoodWithFriends from './generateRecipe/FoodWithFriends'

import {getRecipes} from '../actions/generateRecipe'
import {getUserProfile} from '../actions/user'

class GenerateRecipe extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      recipeVisible: false,
      noRecipe: null,
      selectedIngredients: null,
      dietaryRestrictions: null,
      isToggled: true
    }
    this.props = props
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.toggleButton = this.toggleButton.bind(this)
  }

  componentWillMount() {
    console.log('generaterecipe mount ', this.props)
    console.log('props.auth ', this.props.auth.user.user_id)
    this.props.dispatch(getUserProfile(this.props.auth.user.user_id))
    
  }

  handleChange(e) {
    this.setState({selectedIngredients: e.target.value})
  }

  handleClick(e) {
    e.preventDefault()

    //this.props.dispatch(getUserProfile(this.props.auth.user.user_id))

    this.props.dispatch(getRecipes(this.state.selectedIngredients, this.state.dietaryRestrictions))
    this.setState({recipeVisible: true})
  }
  toggleButton(){
    this.setState({isToggled: !this.state.isToggled})
  }


 
    

  render() {
    const {isToggled} = this.state
    return (
      <div>
        <img className='headerImage' src="images/pantry-to-plate-sml.jpg" alt='header'/>
        <div className="container-fluid full-width">
          <div className="row">
            <div className="col-sm-3">
              <input className="btn btn-lg btn-green btn-block mb-3" onClick={this.toggleButton} value="One Recipe" type="submit" />
              {this.state.isToggled && <OneRecipe />}
            </div>
            <div className="col-sm-3">
              <input className="btn btn-lg btn-green btn-block mb-3" onClick={this.toggleButton} value="Generate Weekly" type="submit" />
              {this.state.isToggled && <WeeklyOptions />}
            </div>
            <div className="col-sm-3">
              <input className="btn btn-lg btn-green btn-block mb-3" onClick={this.toggleButton}value="Random Recipe" type="submit" />
              {this.state.isToggled && <FoodWithFriends />}

          </div>
            <div className="col-sm-3">
              <input className="btn btn-lg btn-green btn-block mb-3" onClick={this.toggleButton} value="Food with Friends" type="submit" />
              {this.state.isToggled && <RandomRecipe />}
            </div>
          </div>
        </div>





      <div id='footer' target="_blank" className='text-green'>Powered by
        <a href="http://www.recipepuppy.com"> Recipe Puppy</a>
      </div>
    </div>
    )}
}

const mapStateToProps = (props) => {
  return {
    auth: props.auth,
    recipes: props.recipes,
    dietaryRestrictions: props.userDietaryRestrictions,
    cat: props
  }
}

export default connect(mapStateToProps)(GenerateRecipe)
