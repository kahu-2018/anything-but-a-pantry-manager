import React from 'react'
import { connect } from 'react-redux'

import {getRecipes} from '../../actions/generateRecipe'
import {getUserRestrictions} from '../../actions/user'

import Recipe from '../Recipe'

class WeeklyOptions extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      recipeVisible: false,
      selectedIngredients: [],
      dietaryRestrictions: null,
      value: null,
      recipeArray: []
    }
    this.handleChange = this.handleChange.bind(this)
    // this.forLoop = this.forLoop.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.showRecipe = this.showRecipe.bind(this)
    this.onClick = this.onClick.bind(this)

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

  // handleChange(e) {
  //   this.setState({value: e.target.value})
  // }

  handleChange(e) {
    for (var i = 0; i < e.target.value; i++) {
      const newState = {...this.state}
      newState.recipeArray.push('x')
      this.setState(newState)
    }
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

  onClick(e){
    const recipeName = this.props.buttonInfo[2].value
    this.props.toggleButtons(recipeName)
    this.showRecipe
  }

  render(props) {
    let recipe = this.props.recipes
    let randomNumber = Math.floor(Math.random()*10)

    return (

      <div>
        <form onSubmit={this.handleClick}>

        <div className="form-group">
          <label form="exampleSelect1">How many meals do you need?</label>
          <select className="form-control" id="exampleSelect1" onChange={this.handleChange}>
            <option className='weeklyOption'>Select Number of Meals</option>
            <option className='weeklyOption' value='1'>1</option>
            <option className='weeklyOption' value='2'>2</option>
            <option className='weeklyOption' value='3'>3</option>
            <option className='weeklyOption' value='4'>4</option>
            <option className='weeklyOption' value='5'>5</option>
            <option className='weeklyOption' value='6'>6</option>
            <option className='weeklyOption' value='7'>7</option>
          </select>
        </div>

        <br/>
          <div className="container-fluid">
            <div className="row">
              <div className='col-sm-9 marginZero'>
                <input autoComplete="off" id="inputfood" className="form-control mb-1 font-pLato" placeholder="Add" type="text" required autoFocus="" onKeyPress={this.handleButtonPress} onChange={this.handleChange} />
              </div>
              <div className='col-md-3 marginZero'>
                <input className="btn btn-md btn-green btn-block mb-3" value="Add" type="submit" />
              </div>
            </div>
          </div>

      </form>
        {this.state.selectedIngredients.map(item => {
          return <p className='centered font-p'>{item}</p>
          })
        }

        <button onClick={this.onClick} className="btn btn-lg btn-outline-green btn-block mb-3" type="submit">Find New</button>
          {this.state.recipeVisible ? this.state.recipeArray.map(x => <Recipe />) : ''}
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
