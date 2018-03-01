const env = require('../test-environment')
const usersDb = require('../../../server/db/usersDb')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

test('read users db', () => {
  return usersDb.getUsers(testDb)
    .then(users => {
      expect(users.length).toBe(1)
      expect(users[0].hasOwnProperty('first_name')).toBeTruthy()
    })
})