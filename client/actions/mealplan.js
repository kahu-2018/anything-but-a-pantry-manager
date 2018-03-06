function updateMealplan(recipe) {
  return {
    type: 'UPDATE_MEALPLAN',
    mealplan: recipe
  }
}

export function addToMealplan(recipe) {
  return (dispatch) => {
   dispatch(updateMealplan(recipe))
  }
}
