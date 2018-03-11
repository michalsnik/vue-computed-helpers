import * as computed from '../lib/index'

describe('lte', () => {

  it('expects the first property value to be less than or equal to the second', () => {
    const context = {
      a: 2,
      b: 4
    }

    const prop = computed.lte('a', 'b').bind(context)

    expect(prop()).toBe(true)

    context.a = 4

    expect(prop()).toBe(true)

    context.a = 6

    expect(prop()).toBe(false)
  })

  it('expects the first property value to be less than or equal to the second argument value', () => {
    const context = {
      a: 2
    }

    const prop = computed.lte('a', 4).bind(context)

    expect(prop()).toBe(true)

    context.a = 4

    expect(prop()).toBe(true)

    context.a = 6

    expect(prop()).toBe(false)
  })
})
