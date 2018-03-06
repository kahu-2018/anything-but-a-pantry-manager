import dietaryRestrictions from '../../../client/reducers/dietaryRestrictions'

test('Initial dietaryRestrictions State', () => {
  const actual = dietaryRestrictions(undefined, "")
  expect(actual).toEqual("")
})