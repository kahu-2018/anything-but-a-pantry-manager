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
    recipes: props.recipes
  }
}

export default connect(mapStateToProps)(ShoppingList)
