# vue-computed-helpers

[![NPM version](https://img.shields.io/npm/v/vue-computed-helpers.svg?style=flat)](https://npmjs.org/package/vue-computed-helpers)
[![Build Status](https://travis-ci.org/michalsnik/vue-computed-helpers.svg?branch=master)](https://travis-ci.org/michalsnik/vue-computed-helpers)

> This package contains bunch of useful helpers that can be used to simplify computed properties

## :cd: Installation

Via npm:
```
npm install vue-computed-helpers --save
```

Via yarn:
```
yarn add vue-computed-helpers
```

## :rocket: Usage

```js
import { eq, count, countBy } from 'vue-computed-helpers'

export default {
  data() {
    return {
      todos: [
        { title: 'Clean house', done: false },
        { title: 'Buy beer', done: true },
        { title: 'Watch GoT', done: true }
      ]
    }
  },
  computed: {
    todosCount: count('todos'), // 3
    notCompletedCount: countBy('todos', 'done', false), // 1
    amIFucked: eq('notCompletedCount', 'todosCount') // false
  }
}
```

## :star: Helpers

| Helper | Usage | Variable argument count allowed |
|:-------|:------|:--------------------------------|
| eq | `eq('anyProperty', x)` | no |
| notEq | `notEq('anyProperty', x)` | no|
| not | `not('anyProperty', 'anotherProp', ...)` | yes |
| and | `and('anyProperty', 'anotherProp', ...)` | yes |
| or | `or('anyProperty', 'anotherProp', ...)` | yes |
| xor | `xor('anyProperty', 'anotherProp')` | no |
| gt | `gt('numProperty', x)` | no |
| gte | `gte('numProperty', x)` | no |
| lt | `lt('numProperty', x)` | no |
| lte | `lte('numProperty', x)` | no |
| sum | `sum('numProperty', x, ...)` | yes |
| alias | `alias('anyProperty')` | no |
| bool | `bool('anyProperty')` | no |
| empty | `empty('anyProperty')` | no |
| min | `min('arrayProperty')` | no |
| max | `max('arrayProperty')` | no |
| filter | `filter('arrayProperty', (el) => el.done === true)` | no |
| filterBy | `filterBy('arrayProperty', 'done', true)` | no |
| map | `map('arrayProperty', (el) => el.id)` | no |
| mapBy | `mapBy('arrayProperty', 'id')` | no |
| count | `count('arrayProperty')` | no |
| countBy | `countBy('arrayProperty', 'done', true)` | no |

`x` means that it can be either value or property name. If you provide a string and there will be a property with that name it's value will be used to perform the check.

## :lock: License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).
