const env = require('../test-environment')
const authDb = require('../../../server/db/authDb')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

test('get auth by id', () => {
  return authDb.getAuthById(1, testDb)
    .then(auth => {
      expect(auth.hasOwnProperty('user_name')).toBeTruthy()
      expect(auth.hasOwnProperty('email')).toBeTruthy()
      expect(auth.hasOwnProperty('hash')).toBeTruthy()
      expect(auth.hasOwnProperty('hash')).toBeTruthy()
    })
})

