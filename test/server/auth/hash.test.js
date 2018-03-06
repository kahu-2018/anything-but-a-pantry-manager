const hash = require('../../../server/auth/hash')

test('test auth test working', () => {
    expect(true).toBeTruthy()
})

test('test that 60 bytes hash is generated from a password', () => {
    const password = 'LittleSecret'
    const expectedSize = 60

    hash.generateHash(password, (err, hashStr) => {
        if (err) {
            expect(false).toBeTruthy() // fail the test
        } else {
            expect(hashStr.length).toBe(expectedSize)
        }
    })
})

test('test that 2 hashes from same password are not the same', () => {
    const password = 'LittleSecret'
    
    hash.generateHash(password, (err1, hashStr1) => {
        if (err1) {
            expect(false).toBeTruthy() // fail the test
        } else {
            hash.generateHash(password, (err2, hashStr2) => {
                if (err2) {
                    expect(false).toBeTruthy() // fail the test
                } else {
                    expect(hashStr2).not.toBe(hashStr1)
                }
            })
        }
    })

})


test('test that compare still work on first after second hash generation', () => {
    const password = 'LittleSecret'
    
    hash.generateHash(password, (err1, hashStr1) => {
        if (err1) {
            expect(false).toBeTruthy() // fail the test
        } else {
            hash.generateHash(password, (err2, hashStr2) => {
                if (err2) {
                    expect(false).toBeTruthy() // fail the test
                } else {                    
                    hash.compareHash(password, hashStr1, (err3, match) => {
                        if (err3) {
                            expect(false).toBeTruthy() // fail the test
                        } else {
                            expect(match).toBeTruthy
                        }
                    })
                }
            })
        }
    })
})

