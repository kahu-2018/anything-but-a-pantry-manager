import request from 'superagent'

const baseUrl = "http://www.recipepuppy.com/api/"

export function getRecipes (callback, pantryIngredients, dietaryRestrictions) {
  request
    .get(baseUrl + '/?i=' + pantryIngredients + '&q=' + dietaryRestrictions + '&onlyImages=1')
    .end((err, res) => {
      callback(err, res.body)
    })
}
