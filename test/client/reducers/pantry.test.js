import pantry from '../../../client/reducers/pantry'

describe('pantry reducer', () => {
  it('should return initial state', () => {
    expect(pantry(undefined, {})).toEqual([])
  })

  it('should handle RECEIVE_PANTRY', () => {
    const action = {
      type: 'RECEIVE_PANTRY',
      pantry: {id: 3, name_of_food: 'tomato'}
    }
    expect(
      pantry([{id: 1, name_of_food: 'orange'}, {id: 2, name_of_food: 'apple'}], action)
    ).toEqual(
      [{id: 1, name_of_food: 'orange'}, {id: 2, name_of_food: 'apple'}, {id: 3, name_of_food: 'tomato'}]
    )
  })
})
