# find-dominant-file
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][cov-image]][cov-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![DevDependency Status][daviddm-image-dev]][daviddm-url-dev]
[![License][license-image]][license-url]
[![PR Welcome][pr-image]][pr-url]

Return the filename or parent directory path of a file or directory by walking
up parent directories. The package name is from emacs builtin lisp function
`find-dominant-file`. This package supports TypeScript as well.

## Installation

```bash
npm i find-dominant-file -s
```

## Usage

```
/foo
└── bar
    └── baz
        ├── qux
        └── quxx
            └── quxxx
            ├── quxxxx
            └── quxxxxx
```

``` js
const myFile = findDominantFile('/foo/bar/baz/quxx/quxxx', 'quxx');
               //=> '/foo/bar/baz/quxx'
const myDir = findDominantFile('/foo/bar/baz/quxx/quxxx', 'quxx', true);
              //=> '/foo/bar/baz'
```

## API

### findDominantFile(dir, filename)

Returns the path of file or undefined.

### findDominantFile(dir, filename, true)

Returns the path of the directory which contains the file or undefined.

### findDominantFile(dir, [filename, ...])

Returns the path of the first found file in the list or undefined.

### findDominantFile(dir, [filename, ...], true)

Returns the path of the directory which contains the first found file in the
list or undefined.

## License

MIT © [Zhang Kai Yu][license-url]

[npm-image]: https://badge.fury.io/js/find-dominant-file.svg
[npm-url]: https://npmjs.org/package/find-dominant-file
[travis-image]: https://travis-ci.org/zhangkaiyulw/find-dominant-file.svg?branch=master
[travis-url]: https://travis-ci.org/zhangkaiyulw/find-dominant-file
[cov-image]: https://codecov.io/gh/zhangkaiyulw/find-dominant-file/branch/master/graph/badge.svg
[cov-url]: https://codecov.io/gh/zhangkaiyulw/find-dominant-file
[daviddm-image]: https://david-dm.org/zhangkaiyulw/find-dominant-file.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/zhangkaiyulw/find-dominant-file
[daviddm-image-dev]: https://david-dm.org/zhangkaiyulw/find-dominant-file/dev-status.svg
[daviddm-url-dev]: https://david-dm.org/zhangkaiyulw/find-dominant-file?type=dev
[license-image]: https://img.shields.io/github/license/zhangkaiyulw/find-dominant-file.svg
[license-url]: https://github.com/zhangkaiyulw/find-dominant-file/blob/master/LICENSE
[pr-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[pr-url]: https://github.com/zhangkaiyulw/find-dominant-file/blob/master/CONTRIBUTING.md
