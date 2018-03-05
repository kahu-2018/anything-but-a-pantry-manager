const initialState = {
  isSearching: false,
  recipes: []
}

function generateRecipe(state= initialState, action) {
  switch (action.type) {
    case 'RECEIVE_RECIPES':
      return {
        ...state,
        recipes: action.recipes,
        isSearching: false
      }

    case 'REQUEST_RECIPES':
      return {
        ...state,
        isSearching: true
      }

    default:
      return state
  }
}

export default generateRecipe
