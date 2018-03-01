const env = require('../test-environment')
const pantryDb = require('../../../server/db/pantryDb')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

test('read pantry db', () => {
  return pantryDb.getPantry(testDb)
    .then(pantry => {
      expect(pantry.length).toBe(1)
      expect(pantry[0].hasOwnProperty('name_of_food')).toBeTruthy()
    })
})