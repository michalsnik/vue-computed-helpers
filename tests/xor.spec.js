import * as computed from '../index'

describe('xor', () => {

  it('expects all passed properties to be truthy', () => {
    const context = {
      a: 10,
      b: 'text'
    }

    const prop = computed.xor('a', 'b').bind(context)

    expect(prop()).toBe(false)

    context.a = false

    expect(prop()).toBe(true)

    context.a = {}

    expect(prop()).toBe(false)

    context.b = () => ''

    expect(prop()).toBe(false)

    context.b = ''

    expect(prop()).toBe(true)
  })
})
