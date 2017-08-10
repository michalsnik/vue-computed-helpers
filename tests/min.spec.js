import * as computed from '../index'

global.console.assert = jest.fn()

describe('min', () => {
  const context = {
    nums: [2, 4, 0, 20, 6, -5, 1],
    wrong: 'test'
  }

  it('finds the biggest num in an array', () => {
    expect(
      computed.min('nums').bind(context)()
    ).toEqual(-5)
  })

  it('returns 0 when the arguments is not an array', () => {
    expect(
      computed.min('wrong').bind(context)()
    ).toEqual(0)
    expect(console.assert.mock.calls.slice(-1)[0][0]).toBe(false)
  })
})
