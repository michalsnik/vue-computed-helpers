import * as computed from '../index'

describe('and', () => {

  it('expects all passed properties to be truthy', () => {
    const context = {
      a: 10,
      b: 'text',
      c: true
    }

    const prop = computed.and('a', 'b', 'c', 'd').bind(context)

    expect(prop()).toBe(false)

    context.d = []

    expect(prop()).toBe(true)

    context.a = {}

    expect(prop()).toBe(true)

    context.b = () => 'b'

    expect(prop()).toBe(true)

    context.c = false

    expect(prop()).toBe(false)
  })
})
