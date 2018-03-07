export default function (state=[], action) {
  let newState=[...state]
  console.log('reducer', action)
  switch (action.type) {
    case 'UPDATE_MEALPLAN':
      console.log({action});
      return [...state, {...action.mealplan}]
    case 'DELETE_SHOPPING_ITEM':
      return [...newState].filter(ingredient => ingredient.ingredient !== action.ingredient.ingredient)

    default:
      return state
  }
}
