[![Travis (.org)](https://img.shields.io/travis/dima-f1/range-array?style=flat-square)](https://travis-ci.org/dima-f1/range-array)
[![Coveralls github](https://img.shields.io/coveralls/github/dima-f1/range-array?style=flat-square)](https://coveralls.io/github/dima-f1/range-array)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@dima-f1/range-array?style=flat-square)](https://bundlephobia.com/result?p=@dima-f1/range-array)
[![npm (scoped)](https://img.shields.io/npm/v/@dima-f1/range-array?style=flat-square)](https://www.npmjs.com/package/@dima-f1/range-array)
[![NPM](https://img.shields.io/npm/l/@dima-f1/range-array?style=flat-square)](http://opensource.org/licenses/MIT)

# Range-array

With this function you can create an array with configurable range and optional callback invocation on each entry.

**Note: This package created for my purposes, and I don't plan to actively maintain it. You can make a fork from this repository and do anything you want.**

## Table of Contents
+ [Installation](#installation)
+ [API Reference](#api)
+ [Usage](#usage)

## Installation <a name="installation"></a>
#### NPM:
```sh
$ npm i @dima-f1/range-array
```

#### Yarn:
```sh
$ yarn add @dima-f1/range-array
```

## API Reference <a name="api"></a>

<a name="module_@dima-f1/range-array..rangeArray"></a>

### @dima-f1/range-array~rangeArray([start], end, [step], [callbackFn]) ⇒ <code>array</code>
Create an array with configurable range and optional callback invocation on each entry.

**Returns**: <code>array</code> - The array that corresponds with given params.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | <code>number</code> | <code>1</code> | The value from which will be started range of array entries. |
| end | <code>number</code> | &nbsp; | The value at which will be ended range of array entries. If the value of `end` param is     `undefined` then `rangeArray` returns an empty array |
| [step] | <code>number</code> | <code>1</code> | The value, which will be used to determine the gap between adjacent array entries. If the     value of `step` param is less than `0` then `rangeArray` returns an empty array |
| [callbackFn] | <code>function</code> | &nbsp; | A function that accepts only one argument - the next range item. If     `callbackFn` function provided then `rangeArray` calls it one time for each element in the array. |

## Usage <a name="usage"></a>
```js
import rangeArray from '@dima-f1/range-array';


rangeArray(1, 10);
// => [1,2,3,4,5,6,7,8,9,10]

rangeArray(1, 10, 3);
// => [1,4,7,10]

rangeArray(1, 10, 2, (entry) => `Hello ${entry}`);
// => ['Hello 1','Hello 3','Hello 5','Hello 7','Hello 9']
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
