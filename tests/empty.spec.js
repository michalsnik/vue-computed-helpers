import * as computed from '../index'

test('empty', () => {
  const context = {}
  const prop = computed.empty('test').bind(context)

  expect(prop()).toBe(true)

  context.test = ''
  expect(prop()).toBe(true)

  context.test = null
  expect(prop()).toBe(true)

  context.test = false
  expect(prop()).toBe(true)

  context.test = 0
  expect(prop()).toBe(true)

  context.test = []
  expect(prop()).toBe(true)

  context.test = ''
  expect(prop()).toBe(true)

  context.test = true
  expect(prop()).toBe(false)

  context.test = 2
  expect(prop()).toBe(false)

  context.test = 'test'
  expect(prop()).toBe(false)

  context.test = ['test']
  expect(prop()).toBe(false)
})
