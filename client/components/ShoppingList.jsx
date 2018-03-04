import React from 'react'
import { connect } from 'react-redux'

function ShoppingList(props) {
  console.log('props', props)

  function ingredientList(recipes) {
    return props.recipes.reduce((arr, {ingredients}) =>
    {
      let ingrArr= ingredients.split(', ')
      ingrArr.forEach(entry => arr.push(entry))
      console.log('arr', arr)
      return arr
    }
    , [])
  }

  let ingredients = ingredientList(props.recipes)

  return (
    <div>

      <h1>My Shopping List</h1>
        {ingredients.map(ingredient =>
          <li>{ingredient}</li>
          )}
    </div>
  )

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
