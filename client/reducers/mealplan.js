let initialState = []

function updateMealplan(state=initialState, action) {
  let newState=[...state]
  switch (action.type) {
    case 'UPDATE_MEALPLAN':
      return [...state, action.mealplan]

    case 'DELETE_SHOPPING_ITEM':
      return [...newState].filter(ingredient => ingredient.ingredient !== action.ingredient.ingredient)

    default:
      return state
  }
}


export default updateMealplan
