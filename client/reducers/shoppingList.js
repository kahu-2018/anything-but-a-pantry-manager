export default function shoppingList (state = [], action) {
  let newState=[...state]
  switch(action.type) {
    case 'UPDATE_SHOPPING_LIST':
      return [...action.shoppingList]
    case 'DELETE_SHOPPING_ITEM':
      return [...newState].filter(item => item.ingredient !== action.item)
    default: return state
  }
}
