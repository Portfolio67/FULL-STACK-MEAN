Series Async Each
=================

An async replacement of forEach in series not parallel.

## Installation

```bash
npm install series-async-each
```

## Usage

```js
const eachAsync = require('series-async-each');
const sleep = require('some-promised-sleep');

await eachAsync(['a', 'b', 'c'], async (a, i, arr) => {
  await sleep(2);
  console.log(a, i, arr);
});
```
