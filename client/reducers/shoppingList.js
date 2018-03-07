export default function shoppingList (state = [], action) {
  switch(action.type) {
    case 'UPDATE_SHOPPING_LIST':
      return [...action.shoppingList]
    default: return state
  }
}
