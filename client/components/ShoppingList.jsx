import React from 'react'
import { connect } from 'react-redux'

import {getRecipes} from '../actions/generateRecipe'

class ShoppingList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedIngredients: 'tomato',
      dietaryRestrictions: 'vegan'
    }
    //bind
  }

ComponentDidMount() {
  this.props.dispatch(getRecipes(this.state.selectedIngredients, this.state.dietaryRestrictions))
}


  render(props) {
    return (
      <div>

        <h1>My Shopping List</h1>
        <ul>
          {this.props.recipes.map(ingredient => <li>{ingredient}</li>)}
        </ul>

      </div>
    )
  }
}



ingredientList(recipes) {
  return this.props.recipes.reduce((arr, {ingredients}) => {
    ingredients.forEach(ingredient => arr.push)
    return arr
  }, [])
}

const mapStateToProps = (props) => {
  console.log(props)

  return {
    auth: props.auth,
    recipes: [
      {"title":"Vegetable-Pasta Oven Omelet","href":"http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=520763","ingredients":"tomato, onions, red pepper, garlic, olive oil, zucchini, cream cheese, vermicelli, eggs, parmesan cheese, milk, italian seasoning, salt, black pepper","thumbnail":"http://img.recipepuppy.com/560556.jpg"},
      {"title":"Roasted Pepper and Bacon Omelet","href":"http://www.bigoven.com/43919-Roasted-Pepper-and-Bacon-Omelet-recipe.html","ingredients":"eggs, salt, black pepper, butter, black pepper, bacon, onions, garlic, roasted red peppers, oregano, black pepper","thumbnail":""},
      {"title":"Broccoli Oven Omelet Recipe","href":"http://cookeatshare.com/recipes/broccoli-oven-omelet-92851","ingredients":"eggs, broccoli, onions, parmesan cheese, lowfat milk, salt, basil, garlic, tomato, parmesan cheese"}],
    // menuRecipes: props.menuRecipes
  }
}

export default connect(mapStateToProps)(ShoppingList)
