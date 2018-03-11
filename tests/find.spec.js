import * as computed from '../lib/index'

global.console.assert = jest.fn()

describe('find', () => {
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

  it('finds an item in array', () => {
    expect(
      computed.find('todos', todo => todo.id === 2).bind(context)()
    ).toEqual({ id: 2, done: true })

    expect(
      computed.find('arr', i => i > 2).bind(context)()
    ).toEqual(3)
  })

  it('returns an undefined value when the argument is not an array', () => {
    expect(
      computed.find('items', item => item).bind(context)()
    ).toEqual(undefined)
    expect(console.assert.mock.calls.slice(-1)[0][0]).toBe(false)
  })
})
