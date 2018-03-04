let initialState = {
  mealplan: []
}

function updateMealplan(state=initialState, action) {
  console.log('state', state)
  let newState={...state}
  switch (action.type) {
    case 'UPDATE_MEALPLAN':
      newState.mealplan.push(action.mealplan)
      return newState

    default:
      return state
  }
}

export default updateMealplan
