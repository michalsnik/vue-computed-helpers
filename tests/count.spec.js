import * as computed from '../index'

global.console.assert = jest.fn()

test('count', () => {
  const context = {
    a: []
  }
  const prop = computed.count('a').bind(context)

  expect(prop()).toBe(0)

  context.a = [1, 2, 3]
  expect(prop()).toBe(3)

  context.a = [1]
  expect(prop()).toBe(1)

  context.a = 'text'
  expect(prop()).toBe(0)
  expect(console.assert.mock.calls.slice(-1)[0][0]).toBe(false)
})
