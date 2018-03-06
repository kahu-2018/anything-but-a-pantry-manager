import user from '../../../client/reducers/user'

test('Initial User State', () => {
  const actual = user(undefined, {})
  expect(actual).toEqual({})
})