const env = require('../test-environment')
const authDb = require('../../../server/db/authDb')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

test('read auth db', () => {
  return authDb.getAuth(testDb)
    .then(auth => {
      expect(auth.length).toBe(1)
      expect(auth[0].hasOwnProperty('user_name')).toBeTruthy()
    })
})