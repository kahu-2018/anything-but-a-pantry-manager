function updateMealplan(recipe) {
  return {
    type: 'UPDATE_MEALPLAN',
    mealplan: recipe
  }
}

function deleteItem(ingredient) {
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
  return (dispatch) => {
    dispatch(deleteItem(ingredient))
  }
}
