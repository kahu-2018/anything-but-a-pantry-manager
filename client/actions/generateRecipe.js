import request from 'superagent'

const baseUrl = "http://www.recipepuppy.com/api/"

//API call to external for filtered recipes
export function getRecipes (callback, pantryIngredients, dietaryRestrictions) {
  request
    .get(baseUrl + '/?i=' + pantryIngredients + '&q=' + dietaryRestrictions + '&onlyImages=1')
    .then(recipes => {

    })
    .end((err, res) => {
      callback(err, res.body)
    })
}
