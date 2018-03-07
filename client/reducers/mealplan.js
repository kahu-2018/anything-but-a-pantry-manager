export default function (state=[], action) {
  let emptyState=[]
  switch (action.type) {
    case 'UPDATE_MEALPLAN':
      return [...state, {...action.mealplan}]

      case 'CLEAR_MEALPLAN':
        return emptyState

    default:
      return state
  }
}
