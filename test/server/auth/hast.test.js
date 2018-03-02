const hash = require('../../../server/auth/hash')

test('test auth test working', function () {
    expect(true).toBeTruthy()
})

test('test getRandomSalt to return at least 40 characters', () => {
    const minSize = 40
    let salt = hash.getRandomSalt()
    expect(salt.length).toBeGreaterThanOrEqual(minSize)
})

test('test getRandomSalt to return different string when called again', () => {
    const salt1 = hash.getRandomSalt()
    const salt2 = hash.getRandomSalt()
 
    let salt = hash.getRandomSalt()
    expect(salt1).not.toBe(salt2)
})