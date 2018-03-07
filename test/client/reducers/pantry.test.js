import pantry from '../../../client/reducers/pantry'

describe('pantry reducer', () => {
  it('should return initial state', () => {
    expect(pantry(undefined, {})).toEqual([])
  })

  it('should handle RECEIVE_PANTRY', () => {
    const action = {
      type: 'RECEIVE_PANTRY',
      pantry: 'tomato'
    }
    expect(
      pantry([Orange, Apple], action)
    ).toEqual(
      [Orange, Apple, tomato]
    )
  })
})
