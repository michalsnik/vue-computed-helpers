import * as computed from '../lib/index'

global.console.assert = jest.fn()

describe('filter', () => {
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
    arr: [1, 2, 3, 4],
    items: 'test'
  }

  it('filters an array', () => {
    expect(
      computed.filter('todos', todo => !todo.done).bind(context)()
    ).toEqual([{ id: 1, done: false }])

    expect(
      computed.filter('arr', i => i > 2).bind(context)()
    ).toEqual([3, 4])
  })

  it('returns an empty array when the argument is not an array', () => {
    expect(
      computed.filter('items', item => item).bind(context)()
    ).toEqual([])
    expect(console.assert.mock.calls.slice(-1)[0][0]).toBe(false)
  })
})
