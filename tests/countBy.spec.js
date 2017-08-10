import * as computed from '../index'

global.console.assert = jest.fn()

test('countBy', () => {
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
    }]
  }
  const prop = computed.countBy('todos', 'done', true).bind(context)

  expect(prop()).toBe(2)

  context.todos.push({ id: 4 })
  expect(prop()).toBe(2)

  context.todos.push({ id: 5, done: true })
  expect(prop()).toBe(3)

  context.todos = 'test'
  expect(prop()).toBe(0)
  expect(console.assert.mock.calls.slice(-1)[0][0]).toBe(false)
})
