import * as computed from '../index'

describe('eq', () => {

  it('compares components\' properties', () => {
    const context = {
      foo: true,
      bar: true
    }

    const prop = computed.eq('foo', 'bar').bind(context)

    expect(prop()).toBe(true)

    context.bar = false

    expect(prop()).toBe(false)

    context.bar = ''

    expect(prop()).toBe(false)

    context.bar = 'text'

    expect(prop()).toBe(false)

    context.bar = []

    expect(prop()).toBe(false)

    context.bar = !0

    expect(prop()).toBe(true)

    context.foo = 'foo'
    context.bar = 'bar'

    expect(prop()).toBe(false)

    context.foo = 'bar'

    expect(prop()).toBe(true)

    context.foo = ['1']
    context.bar = ['1']

    expect(prop()).toBe(false)

    context.foo = {}
    context.bar = {}

    expect(prop()).toBe(false)
  })


  it('compares component property to plain value', () => {
    const context = {
      foo: 20
    }

    expect(
      computed.eq('foo', 10).bind(context)()
    ).toBe(false)

    expect(
      computed.eq('foo', 20).bind(context)()
    ).toBe(true)

    expect(
      computed.eq('foo', 'bar').bind(context)()
    ).toBe(false)

    expect(
      computed.eq('foo', 'foo').bind(context)()
    ).toBe(true)

    expect(
      computed.eq('foo', []).bind(context)()
    ).toBe(false)

    expect(
      computed.eq('foo', {}).bind(context)()
    ).toBe(false)
  })
})
