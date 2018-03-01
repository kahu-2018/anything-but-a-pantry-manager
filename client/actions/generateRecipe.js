import request from 'superagent'

const baseUrl = "/api"

//API call to external for filtered recipes
export function getRecipes (pantryIngredients, dietaryRestrictions) {
  return (dispatch) => {
    console.log('hello', pantryIngredients)
    request
    .get(baseUrl + '/recipes')
    .query({
      i: pantryIngredients,
      q: dietaryRestrictions,
      onlyImages: 1
    })
    // .then(
    //dispatch(receiveRec)
    // (data) => {
    //   console.log(data)
    // })
    .end((err, res) => {
      console.log(err)
      // callback(err, res.body)
    })
  }
}
