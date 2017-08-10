import * as computed from '../index'

global.console.assert = jest.fn()

describe('sum', () => {
  const context = {
    nums: [2, 4, 0, 20, 6, -5, 1],
    a: 1,
    b: 2,
    c: 'test',
    d: true,
    e: false
  }

  it('sums numbers in an array when passed as the only argument', () => {
    expect(
      computed.sum('nums').bind(context)()
    ).toBe(28)
  })

  it('sums numbers in all arguments', () => {
    expect(
      computed.sum('a', 'b').bind(context)()
    ).toBe(3)

    expect(
      computed.sum('a', 4, 'b').bind(context)()
    ).toBe(7)
  })

  it('returns 0 when any of the passed arguments is not a number', () => {
    expect(
      computed.sum('a', 'b', 'c').bind(context)()
    ).toBe(0)
    expect(console.assert.mock.calls.slice(-1)[0][0]).toBe(true)

    expect(
      computed.sum('d', 'e').bind(context)()
    ).toBe(0)
    expect(console.assert.mock.calls.slice(-1)[0][0]).toBe(true)

    expect(
      computed.sum('a', 'b', 'foo').bind(context)()
    ).toBe(0)
    expect(console.assert.mock.calls.slice(-1)[0][0]).toBe(true)
  })
})
