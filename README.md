<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# mapFunAsync

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Invoke a function `n` times and return an array of accumulated function return values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
mapFunAsync = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-map-function@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/utils-async-map-function/tags). For example,

```javascript
mapFunAsync = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-map-function@v0.2.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var mapFunAsync = require( 'path/to/vendor/umd/utils-async-map-function/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-map-function@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.mapFunAsync;
})();
</script>
```

#### mapFunAsync( fcn, n, \[options,] done )

Invokes a function `n` times and returns an `array` of accumulated function return values.

```javascript
function fcn( i, next ) {
    var t = 300 - (i*50);
    setTimeout( onTimeout, t );
    function onTimeout() {
        console.log( i );
        next( null, i );
    }
}

function done( error, arr ) {
    if ( error ) {
        throw error;
    }
    console.log( arr );
}

mapFunAsync( fcn, 5, done );
/* =>
    4
    3
    2
    1
    0
    [ 0, 1, 2, 3, 4 ]
*/
```

For each iteration, the provided function is invoked with two arguments:

-   `index`: invocation index (starting from zero)
-   `next`: callback to be invoked upon function completion

The `next` callback accepts two arguments:

-   `error`: error argument
-   `result`: function result

The function accepts the following `options`:

-   `limit`: the maximum number of pending invocations at any one time. Default: `infinity`.
-   `series`: `boolean` indicating whether to sequentially invoke `fcn`. If `true`, the function sets `options.limit=1`. Default: `false`.
-   `thisArg`: the execution context for `fcn`.

By default, all invocations are performed concurrently, which means that the function does **not** guarantee completion order. To invoke a function such that only one invocation is pending at any one time, set the `series` option to `true`.

```javascript
function fcn( i, next ) {
    var t = 300 - (i*50);
    setTimeout( onTimeout, t );
    function onTimeout() {
        console.log( i );
        next( null, i );
    }
}

function done( error, arr ) {
    if ( error ) {
        throw error;
    }
    console.log( arr );
}

var opts = {
    'series': true
};

mapFunAsync( fcn, 5, opts, done );
/* =>
    0
    1
    2
    3
    4
    [ 0, 1, 2, 3, 4 ]
*/
```

To limit the maximum number of pending function invocations, set the `limit` option.

```javascript
var delays = [ 300, 250, 225, 150, 100 ];

function fcn( i, next ) {
    setTimeout( onTimeout, delays[ i ] );
    function onTimeout() {
        console.log( i );
        next( null, i );
    }
}

function done( error, arr ) {
    if ( error ) {
        throw error;
    }
    console.log( arr );
}

var opts = {
    'limit': 2
};

mapFunAsync( fcn, 5, opts, done );
/* =>
    1
    0
    3
    2
    4
    [ 0, 1, 2, 3, 4 ]
*/
```

To set the execution context of `fcn`, set the `thisArg` option.

<!-- eslint-disable no-invalid-this -->

```javascript
function fcn( i, next ) {
    this.count += 1;
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, i );
    }
}

function done( error, arr ) {
    if ( error ) {
        throw error;
    }
    console.log( arr );
    // => [ 0, 1, 2, 3, 4 ]
}

var ctx = {
    'count': 0
};
var opts = {
    'thisArg': ctx
};

mapFunAsync( fcn, 5, opts, done );
```

#### mapFunAsync.factory( \[options,] fcn )

Returns a `function` which invokes a function `n` times and returns an `array` of accumulated function return values.

```javascript
function fcn( i, next ) {
    var t = 300 - (i*50);
    setTimeout( onTimeout, t );
    function onTimeout() {
        console.log( i );
        next( null, i );
    }
}

function done( error, arr ) {
    if ( error ) {
        throw error;
    }
    console.log( arr );
}

var opts = {
    'series': true
};

var f = mapFunAsync.factory( opts, fcn );

f( 5, done );
/* =>
    0
    1
    2
    3
    4
    [ 0, 1, 2, 3, 4 ]
*/

f( 2, done );
/* =>
    0
    1
    [ 0, 1 ]
*/
```

The function accepts the same `options` as `mapFunAsync()`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If a provided function calls the `next` callback with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.
-   **Neither** `mapFunAsync` nor the function returned by the `factory` method **guarantee** asynchronous execution. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-map-function@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function rand( i, next ) {
    var t = randu() * i;
    setTimeout( onTimeout, t );
    function onTimeout() {
        next( null, t );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
}

mapFunAsync( rand, 10, done );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-map-function`][@stdlib/utils/map-function]</span><span class="delimiter">: </span><span class="description">invoke a function n times and return an array of accumulated function return values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-async-map-function.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-async-map-function

[test-image]: https://github.com/stdlib-js/utils-async-map-function/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/utils-async-map-function/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-async-map-function/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-async-map-function?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-async-map-function.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-async-map-function/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-async-map-function/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-async-map-function/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-async-map-function/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-async-map-function/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-async-map-function/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-async-map-function/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-async-map-function/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-async-map-function/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/map-function]: https://github.com/stdlib-js/utils-map-function/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
