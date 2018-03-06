function updateMealplan(state=[], action) {
  let newState=[...state]
  switch (action.type) {
    case 'UPDATE_MEALPLAN':
      return [...action.mealplan]

    case 'DELETE_SHOPPING_ITEM':
      return [...newState].filter(ingredient => ingredient.ingredient !== action.ingredient.ingredient)

    default:
      return state
  }
}


export default updateMealplan
