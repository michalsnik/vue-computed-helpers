import * as computed from '../index'

test('alias', () => {
  const context = {}
  const prop = computed.alias('a').bind(context)

  context.a = 2
  expect(prop()).toBe(2)

  context.a = 'foo'
  expect(prop()).toBe('foo')

  context.a = [1, 2, 3]
  expect(prop()).toBe(context.a)
})
