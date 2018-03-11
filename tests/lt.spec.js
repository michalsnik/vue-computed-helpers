import * as computed from '../lib/index'

describe('lt', () => {

  it('expects the first property value to be less than the second', () => {
    const context = {
      a: 2,
      b: 4
    }

    const prop = computed.lt('a', 'b').bind(context)

    expect(prop()).toBe(true)

    context.a = 4

    expect(prop()).toBe(false)

    context.a = 6

    expect(prop()).toBe(false)
  })

  it('expects the first property value to be less than the second argument value', () => {
    const context = {
      a: 2
    }

    const prop = computed.lt('a', 4).bind(context)

    expect(prop()).toBe(true)

    context.a = 4

    expect(prop()).toBe(false)

    context.a = 6

    expect(prop()).toBe(false)
  })
})
