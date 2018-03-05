function updateMealplan(recipe) {
  console.log('mealplan', recipe)
  return {
    type: 'UPDATE_MEALPLAN',
    mealplan: recipe
  }
}

export function addToMealplan(recipe) {
  console.log('recipe', recipe)
  return (dispatch) => {
    console.log('I am being called', dispatch);
   dispatch(updateMealplan(recipe))
  }
}
