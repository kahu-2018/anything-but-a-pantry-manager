const env = require('../test-environment')
const userRestrictionsDb = require('../../../server/db/userRestrictionsDb')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

test('read userRestrictions db', () => {
  return userRestrictionsDb.getUserRestrictions(testDb)
    .then(userRestrictions => {
      expect(userRestrictions[0].hasOwnProperty('user_id')).toBeTruthy()
      expect(userRestrictions[0].hasOwnProperty('restriction_id')).toBeTruthy()
    })
})