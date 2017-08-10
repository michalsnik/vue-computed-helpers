import * as computed from '../index'

describe('notEq', () => {

  it('compares components\' properties', () => {
    const context = {
      foo: true,
      bar: true
    }

    const prop = computed.notEq('foo', 'bar').bind(context)

    expect(prop()).toBe(false)

    context.bar = false

    expect(prop()).toBe(true)

    context.bar = ''

    expect(prop()).toBe(true)

    context.bar = 'text'

    expect(prop()).toBe(true)

    context.bar = []

    expect(prop()).toBe(true)

    context.bar = !0

    expect(prop()).toBe(false)

    context.foo = 'foo'
    context.bar = 'bar'

    expect(prop()).toBe(true)

    context.foo = 'bar'

    expect(prop()).toBe(false)

    context.foo = ['1']
    context.bar = ['1']

    expect(prop()).toBe(true)

    context.foo = {}
    context.bar = {}

    expect(prop()).toBe(true)
  })


  it('compares component property to plain value', () => {
    const context = {
      foo: 20
    }

    expect(
      computed.notEq('foo', 10).bind(context)()
    ).toBe(true)

    expect(
      computed.notEq('foo', 20).bind(context)()
    ).toBe(false)

    expect(
      computed.notEq('foo', 'bar').bind(context)()
    ).toBe(true)

    expect(
      computed.notEq('foo', 'foo').bind(context)()
    ).toBe(false)

    expect(
      computed.notEq('foo', []).bind(context)()
    ).toBe(true)

    expect(
      computed.notEq('foo', {}).bind(context)()
    ).toBe(true)
  })
})
