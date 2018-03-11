import * as computed from '../lib/index'

test('bool', () => {
  const context = {}
  const prop = computed.bool('a').bind(context)

  context.a = true
  expect(prop()).toBe(true)

  context.a = 'text'
  expect(prop()).toBe(true)

  context.a = {}
  expect(prop()).toBe(true)

  context.a = []
  expect(prop()).toBe(true)

  context.a = false
  expect(prop()).toBe(false)

  context.a = null
  expect(prop()).toBe(false)

  context.a = undefined
  expect(prop()).toBe(false)

  context.a = 0
  expect(prop()).toBe(false)

  context.a = ''
  expect(prop()).toBe(false)
})
