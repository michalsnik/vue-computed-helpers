import * as computed from '../lib/index'

global.console.assert = jest.fn()

describe('max', () => {
  const context = {
    nums: [2, 4, 0, 20, 6, -5, 1],
    wrong: 'test'
  }

  it('finds the biggest num in an array', () => {
    expect(
      computed.max('nums').bind(context)()
    ).toEqual(20)
  })

  it('returns 0 when the arguments is not an array', () => {
    expect(
      computed.max('wrong').bind(context)()
    ).toEqual(0)
    expect(console.assert.mock.calls.slice(-1)[0][0]).toBe(false)
  })
})
