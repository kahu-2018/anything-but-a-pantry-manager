function updateMealplan(recipe) {
  return {
    type: 'UPDATE_MEALPLAN',
    mealplan: recipe
  }
}

function deleteItem(item) {
  return {
    type: 'DELETE_SHOPPING_ITEM',
    item
  }
}

function updateShoppingList(shoppingList) {
  return {
    type: 'UPDATE_SHOPPING_LIST',
    shoppingList
  }
}

function clearMealplanState() {
  return {
    type: 'CLEAR_MEALPLAN'
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

export function removeItem(item) {
  return (dispatch) => {
    dispatch(deleteItem(item))
  }
}

export function clearMealplan() {
  return (dispatch) => {
    dispatch(clearMealplanState())
  }
}
