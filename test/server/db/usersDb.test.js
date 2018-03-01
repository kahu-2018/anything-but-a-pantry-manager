const env = require('../test-environment')
const usersDb = require('../../../server/db/usersDb')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

test('get users from database', () => {
  return usersDb.getUsers(testDb)
    .then(users => {
      expect(users.length).toBe(1)
      expect(users[0].hasOwnProperty('first_name')).toBeTruthy()
    })
})

test('get user by user_name', () => {
 
  return usersDb.getUserByName(user_name, testDb)
  .then(user => {
    expect(user.user_name).toBe('Kubo')
    // expect(user.user_name[0].hasOwnProperty('first_name')).toBeTruthy()
    })
})