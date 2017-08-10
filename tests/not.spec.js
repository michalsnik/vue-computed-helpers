import * as computed from '../index'

describe('not', () => {

  it('expect all passed properties to be falsey', () => {
    const context = {
      a: 0,
      b: null,
      c: false,
      d: ''
    }

    const prop = computed.not('a', 'b', 'c', 'd', 'e').bind(context)

    expect(prop()).toBe(true)

    context.a = 'text'

    expect(prop()).toBe(false)

    context.a = 10

    expect(prop()).toBe(false)

    context.a = false

    expect(prop()).toBe(true)

    context.e = false

    expect(prop()).toBe(true)

    context.e = true

    expect(prop()).toBe(false)
  })
})
