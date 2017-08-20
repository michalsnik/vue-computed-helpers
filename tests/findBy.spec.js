import * as computed from '../index'

global.console.assert = jest.fn()

describe('find', () => {
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

  it('finds an item in an array', () => {
    expect(
      computed.findBy('todos', 'id', 3).bind(context)()
    ).toEqual({ id: 3, done: true })

    expect(
      computed.findBy('todos', 'test', true).bind(context)()
    ).toEqual({ id: 2, done: true, test: true })

    expect(
      computed.findBy('todos', 'test', false).bind(context)()
    ).toEqual(undefined)
  })

  it('returns an undefined value when the argument is not an array', () => {
    expect(
      computed.findBy('items', 'something', true).bind(context)()
    ).toEqual(undefined)
    expect(console.assert.mock.calls.slice(-1)[0][0]).toBe(false)
  })
})
