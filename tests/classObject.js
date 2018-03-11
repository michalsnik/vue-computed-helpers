import * as computed from '../lib/index'

global.console.assert = jest.fn()

describe('classObject', () => {
  it('generates object for basic bindings', () => {
    const context = {
      primary: false,
      wide: false,
    }
    const prop = computed.classObject('primary', 'wide').bind(context)

    expect(prop()).toEqual({
      primary: false,
      wide: false,
    })

    context.primary = true
    expect(prop()).toEqual({
      primary: true,
      wide: false,
    })

    context.wide = true
    expect(prop()).toEqual({
      primary: true,
      wide: true,
    })

    context.primary = false
    expect(prop()).toEqual({
      primary: false,
      wide: true,
    })
  })

  it('transforms properties names to kebab-case class names for basic bindings', () => {
    const context = {
      isPrimary: false,
      isWide: false,
    }
    const prop = computed.classObject('isPrimary', 'isWide').bind(context)

    expect(prop()).toEqual({
      'is-primary': false,
      'is-wide': false,
    })

    context.isPrimary = true
    expect(prop()).toEqual({
      'is-primary': true,
      'is-wide': false,
    })

    context.isWide = true
    expect(prop()).toEqual({
      'is-primary': true,
      'is-wide': true,
    })

    context.isPrimary = false
    expect(prop()).toEqual({
      'is-primary': false,
      'is-wide': true,
    })
  })

  it('generates proper object for mixed bindings', () => {
    const context = {
      primary: false,
      wide: false,
      img: '',
    }
    const prop = computed.classObject('is-primary:primary', 'wide', 'hasImg:img').bind(context)

    expect(prop()).toEqual({
      'is-primary': false,
      wide: false,
      hasImg: false,
    })

    context.primary = true
    expect(prop()).toEqual({
      'is-primary': true,
      wide: false,
      hasImg: false,
    })

    context.wide = true
    expect(prop()).toEqual({
      'is-primary': true,
      wide: true,
      hasImg: false,
    })

    context.img = 'example.jpg'
    expect(prop()).toEqual({
      'is-primary': true,
      wide: true,
      hasImg: true,
    })

    context.wide = false
    expect(prop()).toEqual({
      'is-primary': true,
      wide: false,
      hasImg: true,
    })
  })
})
