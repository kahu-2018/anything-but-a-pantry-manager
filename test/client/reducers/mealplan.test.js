import updateMealplan from '../../../client/reducers/mealplan'

describe('mealplan reducer', () => {
  it('should return initial state', () => {
    expect(updateMealplan(undefined, {})).toEqual({mealplan: []
    })
  })

  it('should handle UPDATE_MEALPLAN', () => {
    const action = {
      type: 'UPDATE_MEALPLAN',
      mealplan: {
        title:"Onion and Fresh Herb Omelet with Mixed Greens",
        href:"http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=1622444",
        ingredients:"egg substitute, milk, parsley, thyme, salt, black pepper, eggs, flour, nonstick cooking spray, onions, garlic, salad greens, salad greens, red wine vinegar, olive oil, goat cheese, almonds",
        thumbnail:"http://img.recipepuppy.com/514820.jpg"
      }
    }
    expect(
      updateMealplan(undefined, action)
    ).toEqual([action.mealplan])
  })
})
