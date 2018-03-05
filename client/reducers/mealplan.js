let initialState = []

function updateMealplan(state=initialState, action) {
  console.log(action)
  let newState={...state}
  switch (action.type) {
    case 'UPDATE_MEALPLAN':
    return [...state, action.mealplan]
    default:
      return state
  }
}

export default updateMealplan
