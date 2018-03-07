import React from 'react'
import { connect } from 'react-redux'

import {removeItem} from '../actions/mealplan'


function ShoppingList({mealplan, dispatch, auth, shoppingList}) {

//Delete item from Shopping List
  function removeIngredient(e){
    let item = e.target.value
    dispatch(removeItem(item))
  }

  return (
    <div>
      <img className='headerImage' src="images/pantry-to-plate-xsml.jpg" alt='header'/>
      <h1 className='centered greenText'>My Shopping List</h1>
      <div className={(shoppingList.length == 0) ? 'show' : 'hide' }>
        <p>No recipes selected for shopping list!</p>
      </div>
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
              {shoppingList.map(ingredient =>
                <div>
                  <input type="checkbox" value={ingredient.ingredient} checked={ingredient.checked} className="strikethrough"/>
                  <span>{'   '+ingredient.count+' '+ingredient.ingredient[0].toUpperCase()+ ingredient.ingredient.substring(1)} &nbsp;
                   </span>
                   <button value={ingredient.ingredient} onClick={(e) => removeIngredient(e)}>x</button>
                </div>
              )}
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
    shoppingList: state.shoppingList,
    mealplan: state.mealplan
  }
}

export default connect(mapStateToProps)(ShoppingList)
