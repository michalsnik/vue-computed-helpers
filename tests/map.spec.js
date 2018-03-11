import * as computed from '../lib/index'

global.console.assert = jest.fn()

describe('map', () => {
  const context = {
    todos: [{
      id: 1,
      done: false
    }, {
      id: 2,
      done: true
    }, {
      id: 3,
      done: true
    }],
    items: 'test'
  }

  it('maps an array', () => {
    expect(
      computed.map('todos', todo => todo.id).bind(context)()
    ).toEqual([1, 2, 3])
  })

  it('returns an empty array when the argument is not an array', () => {
    expect(
      computed.map('items', item => item).bind(context)()
    ).toEqual([])
    expect(console.assert.mock.calls.slice(-1)[0][0]).toBe(false)
  })
})
