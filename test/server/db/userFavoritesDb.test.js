const env = require('../test-environment')
const userFavouritesDb = require('../../../server/db/userFavouritesDb')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

test('read userFavourites db', () => {
  return userFavouritesDb.getUserFavourites(testDb)
    .then(userFavourites => {
      expect(userFavourites.length).toBe(1)
      expect(userFavourites[0].hasOwnProperty('user_id')).toBeTruthy()
    })
})