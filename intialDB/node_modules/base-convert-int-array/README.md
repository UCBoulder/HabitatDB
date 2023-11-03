# base-convert-int-array

Converts arrays of integers from one base to another. Uses an O(N²) algorithm.

## Installation

```console
$ npm install base-convert-int-array
```

## Usage

First, get an array of integers. For example when converting a value encoded in
base 36:

```js
const base36 = Array.from('jld2cyuq0000t3rmniod1foy', char => parseInt(char, 36))
// [ 19, 21, 13, 2, 12, 34, 30, 26, 0, 0, 0, 0, 29, 3, 27, 22, 23, 18, 24, 13, 1, 15, 24, 34 ]
```

Then, to convert to a byte array:

```js
const baseConvertIntArray = require('base-convert-int-array')
const bytes = baseConvertIntArray(base36, {from: 36, to: 256})
// [ 9, 49, 119, 149, 90, 234, 41, 165, 216, 81, 246, 78, 200, 6, 114, 178 ]
```

Which you could turn into a buffer:

```js
const buffer = Buffer.from(bytes)
```

You can specify a fixed length for the resulting array:

```js
const bytes = baseConvertIntArray(base36, {from: 36, to: 256, fixedLength: 16})
```

A `RangeError` will be thrown if the input requires more space than
`fixedLength` allows for.
