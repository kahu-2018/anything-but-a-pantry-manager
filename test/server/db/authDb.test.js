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
    })
})

test('get auth by user_name', () => {
  const expectedUsername = 'kubo'

  return authDb.getAuthByUserName(expectedUsername, testDb)
    .then(auth => {
      expect(auth.user_name).toBe(expectedUsername)
    })
})

test('get auth by email', () => {
  const expectedEmail = 'kubo@eda.com'

  return authDb.getAuthByEmail(expectedEmail, testDb)
    .then(auth => {
      expect(auth.email).toBe(expectedEmail)
    })
})

