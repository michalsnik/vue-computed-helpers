import * as computed from '../lib/index'

describe('gt', () => {

  it('expects the first property value to be greater than the second', () => {
    const context = {
      a: 4,
      b: 2
    }

    const prop = computed.gt('a', 'b').bind(context)

    expect(prop()).toBe(true)

    context.a = 2

    expect(prop()).toBe(false)

    context.a = -2

    expect(prop()).toBe(false)
  })

  it('expects the first property value to be greater than the second argument value', () => {
    const context = {
      a: 4
    }

    const prop = computed.gt('a', 2).bind(context)

    expect(prop()).toBe(true)

    context.a = 2

    expect(prop()).toBe(false)

    context.a = -2

    expect(prop()).toBe(false)
  })
})
