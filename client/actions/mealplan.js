function updateMealplan(recipe) {
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

export function addToMealplan(recipe) {
  return (dispatch) => {
   dispatch(updateMealplan(recipe))
  }
}

export function removeItem(ingredient) {
  console.log('action', ingredient)
  return (dispatch) => {
    dispatch(deleteItem(ingredient))
  }
}
