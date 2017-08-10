import * as computed from '../index'

global.console.assert = jest.fn()

describe('filter', () => {
  const context = {
    todos: [{
      id: 1,
      done: false
    }, {
      id: 2,
      done: true,
      test: true
    }, {
      id: 3,
      done: true
    }],
    items: 'test'
  }

  it('filters an array', () => {
    expect(
      computed.filterBy('todos', 'done', false).bind(context)()
    ).toEqual([{ id: 1, done: false }])

    expect(
      computed.filterBy('todos', 'done', true).bind(context)().length
    ).toEqual(2)

    expect(
      computed.filterBy('todos', 'test', false).bind(context)().length
    ).toEqual(0)
  })

  it('returns an empty array when the argument is not an array', () => {
    expect(
      computed.filterBy('items', 'something', true).bind(context)()
    ).toEqual([])
    expect(console.assert.mock.calls.slice(-1)[0][0]).toBe(false)
  })
})
