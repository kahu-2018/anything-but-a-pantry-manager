import React from 'react'
import { connect } from 'react-redux'

import {getRecipes} from '../../actions/generateRecipe'
import {getUserRestrictions} from '../../actions/user'

class OneRecipe extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      recipeVisible: false,
      noRecipe: null,
      selectedIngredients: null,
      dietaryRestrictions: null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  ComponentDidMount() {
    let dietaryRestrictions = getUserRestrictions(1)
    this.setState({dietaryRestrictions: dietaryRestrictions})
  }

  handleChange(e) {
    this.setState({selectedIngredients: e.target.value})
  }

  handleClick(e) {
    e.preventDefault()
    this.props.dispatch(getRecipes(this.state.selectedIngredients, this.state.dietaryRestrictions))
    this.setState({recipeVisible: true})
  }

  render(props) {
    let recipe = this.props.recipes
    let randomNumber = Math.floor(Math.random()*10)
    const randomRecipe = recipe[randomNumber]

    console.log('random', randomRecipe)
    console.log(recipe[randomNumber])
    console.log('recipe', recipe)


    return (
      <div>
        <form onSubmit={this.handleClick}>
        <input id="inputfood" className="form-control mb-1 font-pLato" placeholder="Ingredients you have" name="user_name" type="text" required autoFocus="" onKeyPress={this.handleButtonPress} onChange={this.handleChange}/>
        <input className="btn btn-lg btn-green btn-block mb-3" value="Add ingredient" type="submit" />
        <input className="btn btn-lg btn-outline-green btn-block mb-3" value='Find' type="submit" />


          {randomRecipe && <a href={randomRecipe.href} target="_blank"><img className='img' src={randomRecipe.thumbnail} alt="food" /><h4>{randomRecipe.title}</h4></a>}

      </form>
        <div>

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

export default connect(mapStateToProps)(OneRecipe)
