import receivePantry from '../../../client/reducers/pantry'

test('Initial receivePantry State', () => {
  const actual = receivePantry(undefined, [])
  expect(actual).toEqual([])
})