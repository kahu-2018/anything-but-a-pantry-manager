function updateMealplan(recipe) {
  console.log('addToMealplan', recipe)
  return {
    type: 'UPDATE_MEALPLAN',
    mealplan: recipe
  }
}

function deleteItem(ingredient) {
  console.log('action-reducer', ingredient)
  return {
    type: 'DELETE_SHOPPING_ITEM',
    ingredient
  }
}

function updateShoppingList(shoppingList) {
  return {
    type: 'UPDATE_SHOPPING_LIST',
    shoppingList
  }
}

export function addToMealplan(recipe) {
  return (dispatch) => {
   dispatch(updateMealplan(recipe))
 }
}

export function setShoppingList(shoppingList) {
  return (dispatch) => {
    dispatch(updateShoppingList(shoppingList))
  }
}


export function removeItem(ingredient) {
  console.log('action', ingredient)
  return (dispatch) => {
    dispatch(deleteItem(ingredient))
  }
}
