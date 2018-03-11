import * as computed from '../lib/index'

describe('gte', () => {

  it('expects the first property value to be greater than or equal to the second', () => {
    const context = {
      a: 4,
      b: 3
    }

    const prop = computed.gte('a', 'b').bind(context)

    expect(prop()).toBe(true)

    context.a = 3

    expect(prop()).toBe(true)

    context.a = -2

    expect(prop()).toBe(false)
  })

  it('expects the first property value to be greater than or equal to the second argument value', () => {
    const context = {
      a: 4,
      b: 3
    }

    const prop = computed.gte('a', 3).bind(context)

    expect(prop()).toBe(true)

    context.a = 3

    expect(prop()).toBe(true)

    context.a = -2

    expect(prop()).toBe(false)
  })
})
