import React from 'react'
import { connect } from 'react-redux'

function ShoppingList(props) {

//Pull ingredients out of meal plan recipes
  function mealplanIngredients(recipes) {
    return props.recipes.reduce((arr, {ingredients}) =>
    {
      let ingrArr= ingredients.split(', ')
      ingrArr.forEach(entry => arr.push(entry))
      return arr
    }
    , [])
  }

//Remove duplicate ingredients and create count for each
  let noDuplicates = mealplanIngredients(props.recipes)
  let count = {}
  noDuplicates.forEach((ingredient) => count[ingredient] = (count[ingredient] || 0)+1)

//Transform count object into array
  let ingredientList= Object.keys(count).map((ingredient) => ({ingredient: ingredient, count: count[ingredient]}))

  return (
    <div>
      <h1>My Shopping List</h1>
      <div className={(props.recipes == 0) ? 'hide' : 'show' }>
        {ingredientList.map(ingredient =><li>{ingredient.ingredient}: {ingredient.count}</li>)}
      </div>

      <div className={(props.recipes == 0) ? 'show' : 'hide' }>
        <p>No recipes selected for shopping list!</p>
      </div>
    </div>
  )

}

const mapStateToProps = (props) => {
  console.log(props)

  return {
    auth: props.auth,
    recipes: props.recipes
    // recipes: [
    //   {"title":"Onion and Fresh Herb Omelet with Mixed Greens","href":"http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=1622444","ingredients":"egg substitute, milk, parsley, thyme, salt, black pepper, eggs, flour, nonstick cooking spray, onions, garlic, salad greens, salad greens, red wine vinegar, olive oil, goat cheese, almonds","thumbnail":"http://img.recipepuppy.com/514820.jpg"},
    //   {"title":"Spanish Omelet","href":"http://www.cooks.com/rec/view/0,185,153160-249194,00.html","ingredients":"vegetable oil, green pepper, onions, water, milk, eggs, black pepper, mushroom, garlic, salt, chili powder","thumbnail":""},
    //   {"title":"Picnic Omelet Squares Recipe","href":"http://www.cdkitchen.com/recipes/recs/2184/Picnic-Omelet-Squares99498.shtml","ingredients":"eggs, garlic, parmesan cheese, olive oil, onions, peas, potato, red pepper, salt, tomato, zucchini","thumbnail":""}
    ]
  }
}

export default connect(mapStateToProps)(ShoppingList)
