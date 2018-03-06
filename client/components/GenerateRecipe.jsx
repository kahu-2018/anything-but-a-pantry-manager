import React from 'react'
import { connect } from 'react-redux'

import Recipe from './Recipe.jsx'
import OneRecipe from './generateRecipe/OneRecipe'
import RandomRecipe from './generateRecipe/RandomRecipe'
import WeeklyOptions from './generateRecipe/WeeklyOptions'
import FoodWithFriends from './generateRecipe/FoodWithFriends'

import {getRecipes} from '../actions/generateRecipe'
import {getUserProfile} from '../actions/user'
import {getPantry} from '../actions/pantry'

class GenerateRecipe extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      recipeVisible: false,
      noRecipe: null,
      selectedIngredients: null,
      buttonInfo: [
        {value: 'One Recipe', page: OneRecipe, isToggled: false},
        {value: 'Random Recipe', page: RandomRecipe, isToggled: false},
        {value: 'Weekly List', page: WeeklyOptions, isToggled: false},
        {value: 'Food with Friends', page: FoodWithFriends, isToggled: false}
      ]
    }
    this.props = props
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.toggleButton = this.toggleButton.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(getUserProfile(this.props.auth.user.user_id))
    this.props.dispatch(getPantry())
  }

  handleChange(e) {
    this.setState({selectedIngredients: e.target.value})
  }

  handleClick(e) {
    e.preventDefault()
    this.props.dispatch(getRecipes(this.state.selectedIngredients, this.props.dietaryRestrictions))
    this.setState({recipeVisible: true})
  }

  toggleButton(pageName){
    const {buttonInfo} = this.state
    const index = buttonInfo.findIndex(item => item.page === pageName)
    buttonInfo[index].isToggled = !buttonInfo[index].isToggled
    this.setState({buttonInfo})
  }

  render() {
    const {isToggled} = this.state
    const {buttonInfo} = this.state

    return (
      <div>
        <img className='headerImage' src="images/pantry-to-plate-xsml.jpg" alt='header'/>
        <div className="container-fluid full-width">
          <div className="row">
                {buttonInfo.map((info, i) => {
                return <div key={i} className="col-sm-3">
                <input className="btn btn-lg btn-green btn-block mb-3" onClick={() => this.toggleButton(info.page)} value={info.value} type="submit" />
                {info.isToggled && <info.page />}
              </div>
              })
            }
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
    user: props.user,
    dietaryRestrictions: props.dietaryRestrictions,
    pantry: props.pantry
  }
}

export default connect(mapStateToProps)(GenerateRecipe)
