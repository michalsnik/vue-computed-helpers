import * as computed from '../lib/index'

describe('or', () => {

  it('expects at leas one truthy property value', () => {
    const context = {
      a: true,
      b: 'text',
      c: false
    }

    const prop = computed.or('a', 'b', 'c').bind(context)

    expect(prop()).toBe(true)

    context.a = null

    expect(prop()).toBe(true)

    context.b = ''

    expect(prop()).toBe(false)
  })
})
