import React from 'react'
import { connect } from 'react-redux'

import Recipe from './Recipe.jsx'
import OneRecipe from './generateRecipe/OneRecipe'

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
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.toggleButton = this.toggleButton.bind(this)
  }

  componentDidMount() {
    getUserProfile(this.props.auth.user.id)
  }

  handleChange(e) {
    this.setState({selectedIngredients: e.target.value})
  }

  handleClick(e) {
    e.preventDefault()

    this.props.dispatch(getUserProfile(this.props.auth.user.id))

    this.props.dispatch(getRecipes(this.state.selectedIngredients, this.state.dietaryRestrictions))
    this.setState({recipeVisible: true})
  }
  toggleButton(){
    this.setState({isToggled: !this.state.isToggled})
  }

  render(props) {
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
              <input className="btn btn-lg btn-green btn-block mb-3" value="Generate Weekly" type="submit" />
            </div>
            <div className="col-sm-3">
              <input className="btn btn-lg btn-green btn-block mb-3" value="Random Recipe" type="submit" />
            </div>
            <div className="col-sm-3">
              <input className="btn btn-lg btn-green btn-block mb-3" value="Food with Friends" type="submit" />
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
    recipes: props.recipes
  }
}

export default connect(mapStateToProps)(GenerateRecipe)
