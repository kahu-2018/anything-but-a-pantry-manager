export default function (state=[], action) {
  switch (action.type) {
    case 'UPDATE_MEALPLAN':
      return [...state, {...action.mealplan}]

    default:
      return state
  }
}
