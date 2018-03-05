import React from 'react'
import { connect } from 'react-redux'

function ShoppingList(props) {
  console.log('props', props)

  function ingredientList(recipes) {
    return props.recipes.reduce((arr, {ingredients}) =>
    {
      let ingrArr= ingredients.split(', ')
      ingrArr.forEach(entry => arr.push(entry))
      return arr
    }
    , [])
  }

  let duplicatesList = ingredientList(props.recipes)

  let ingredients = Array.from(new Set(duplicatesList))

  return (
    <div>
      <h1>My Shopping List</h1>
      <div className={(props.recipes == 0) ? 'hide' : 'show' }>
        {ingredients.map(ingredient =><li>{ingredient}</li>)}
      </div>

      <div className={(props.recipes == 0) ? 'show' : 'hide' }>
        <p>No recipes selected for shoppling list!</p>
      </div>
    </div>
  )

}

const mapStateToProps = (props) => {
  console.log(props)

  return {
    auth: props.auth,
    // recipes: props.recipes
    recipes: [
      {"title":"Onion and Fresh Herb Omelet with Mixed Greens","href":"http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=1622444","ingredients":"egg substitute, milk, parsley, thyme, salt, black pepper, eggs, flour, nonstick cooking spray, onions, garlic, salad greens, salad greens, red wine vinegar, olive oil, goat cheese, almonds","thumbnail":"http://img.recipepuppy.com/514820.jpg"},
      {"title":"Spanish Omelet","href":"http://www.cooks.com/rec/view/0,185,153160-249194,00.html","ingredients":"vegetable oil, green pepper, onions, water, milk, eggs, black pepper, mushroom, garlic, salt, chili powder","thumbnail":""},
      {"title":"Picnic Omelet Squares Recipe","href":"http://www.cdkitchen.com/recipes/recs/2184/Picnic-Omelet-Squares99498.shtml","ingredients":"eggs, garlic, parmesan cheese, olive oil, onions, peas, potato, red pepper, salt, tomato, zucchini","thumbnail":""}
    ]
  }
}

export default connect(mapStateToProps)(ShoppingList)
