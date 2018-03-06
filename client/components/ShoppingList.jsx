import React from 'react'
import { connect } from 'react-redux'

import {removeItem} from '../actions/mealplan'


function ShoppingList({mealplan, dispatch, auth}) {

  function removeIngredient(ingredient){
    dispatch(removeItem(ingredient))
  }

//Pull ingredients out of meal plan recipes
  function mealplanIngredients(mealplan) {
    return mealplan.reduce((arr, {ingredients}) =>
    {
      let ingrArr= ingredients.split(', ')
      ingrArr.forEach(entry => arr.push(entry))
      return arr
    }
    , [])
  }

//Remove duplicate ingredients and create count for each
  let noDuplicates = mealplanIngredients(mealplan)
  let count = {}
  noDuplicates.forEach((ingredient) => count[ingredient] = (count[ingredient] || 0)+1)

//Transform count object into array
  let ingredientList= Object.keys(count).map((ingredient) => ({ingredient: ingredient, count: count[ingredient]}))

  return (
    <div>
      <img className='headerImage' src="images/pantry-to-plate-xsml.jpg" alt='header'/>
      <h1 className='centered greenText'>My Shopping List</h1>
      <div className={(mealplan.length == 0) ? 'hide' : 'show' }>

        <div className="container-fluid">
          <div className="row">
            <div className='col-sm-3'></div>
            <div className='col-sm-3'>
              {mealplan.map(meal =>
                  <a target="_blank" href={meal.href}><button className="btn btn-sm btn-outline-green btn-block mb-3">{meal.title}</button></a>
              )}
            </div>

            <div className='col-sm-3'>
              {ingredientList.map(ingredient =>
                <div>
                  <input type="checkbox" value={ingredient.ingredient} checked={ingredient.checked} className="strikethrough"/>
                  <span>{'   '+ingredient.count+' '+ingredient.ingredient[0].toUpperCase()+ ingredient.ingredient.substring(1)} &nbsp;
                   <button onClick={() => removeIngredient(ingredient)}>x</button></span>
                </div>)}

                <div className={(mealplan.length == 0) ? 'show' : 'hide' }>
                  <p>No recipes selected for shopping list!</p>
                </div>
                <div className='col-sm-3'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

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


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    mealplan: state.mealplan
    // mealplan: [
    //   {"title":"Onion and Fresh Herb Omelet with Mixed Greens","href":"http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=1622444","ingredients":"vegetable oil, green pepper, onions, water, milk, eggs, flour, nonstick cooking spray, onions, garlic, salad greens, salad greens, red wine vinegar, olive oil, goat cheese, almonds","thumbnail":"http://img.recipepuppy.com/514820.jpg"},
    //   {"title":"Spanish Omelet","href":"http://www.cooks.com/rec/view/0,185,153160-249194,00.html","ingredients":"vegetable oil, green pepper, onions, water, milk, eggs, black pepper, mushroom, garlic, salt, chili powder","thumbnail":""},
    //   {"title":"Picnic Omelet Squares Recipe","href":"http://www.cdkitchen.com/recipes/recs/2184/Picnic-Omelet-Squares99498.shtml","ingredients":"eggs, garlic, parmesan cheese, olive oil, onions, peas, potato, red pepper, salt, tomato, zucchini","thumbnail":""}
    //
    // ]


  }
}

export default connect(mapStateToProps)(ShoppingList)
