/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a function (no options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'the function throws an error if not provided a function (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( {}, value );
		};
	}
});

tape( 'the function throws an error if provided an `options` argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value, noop );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		0,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'limit': value
			};
			factory( opts, noop );
		};
	}
});

tape( 'the function returns a function (no options)', function test( t ) {
	function fcn( i, next ) {
		next( null, i );
	}
	t.strictEqual( typeof factory( fcn ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function (options)', function test( t ) {
	function fcn( i, next ) {
		next( null, i );
	}
	t.strictEqual( typeof factory( {}, fcn ), 'function', 'returns a function' );
	t.end();
});

tape( 'the returned function throws an error if provided a first argument which is not a nonnegative integer (no options)', function test( t ) {
	var mapFunAsync;
	var values;
	var i;

	mapFunAsync = factory( noop );

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapFunAsync( value, noop );
		};
	}
});

tape( 'the returned function throws an error if provided a first argument which is not a nonnegative integer (options)', function test( t ) {
	var mapFunAsync;
	var values;
	var i;

	mapFunAsync = factory( {}, noop );

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapFunAsync( value, noop );
		};
	}
});

tape( 'the returned function throws an error if not provided a callback function (no options)', function test( t ) {
	var mapFunAsync;
	var values;
	var i;

	mapFunAsync = factory( noop );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapFunAsync( 10, value );
		};
	}
});

tape( 'the returned function throws an error if not provided a callback function (options)', function test( t ) {
	var mapFunAsync;
	var values;
	var i;

	mapFunAsync = factory( {}, noop );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapFunAsync( 10, value );
		};
	}
});

tape( 'the returned function invokes a function a specified number of times and returns an array of accumulated function return values', function test( t ) {
	var mapFunAsync;
	var indices;
	var values;
	var j;

	indices = [ 0, 1, 2, 3, 4 ];
	values = [ 0, 2, 4, 6, 8 ];
	j = -1;

	mapFunAsync = factory( fcn );
	mapFunAsync( 5, done );

	function fcn( i, next ) {
		j += 1;
		t.strictEqual( i, indices[ j ], 'provides expected index' );
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next( null, i*2 );
		}
	}

	function done( error, actual ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.deepEqual( actual, values, 'returns expected results' );
		}
		t.end();
	}
});

tape( 'the returned function invokes a function a specified number of times and returns an array of accumulated function return values (n=0)', function test( t ) {
	var mapFunAsync;
	var expected;

	expected = [];

	mapFunAsync = factory( fcn );
	mapFunAsync( 0, done );

	function fcn( i, next ) {
		t.fail( 'should never be called' );
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next( null, i );
		}
	}

	function done( error, actual ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.deepEqual( actual, expected, 'returns expected results' );
		}
		t.end();
	}
});

tape( 'by default, the returned function performs invocations concurrently', function test( t ) {
	var mapFunAsync;
	var expected;
	var k;

	expected = [
		[ 0, 4 ],
		[ 1, 3 ],
		[ 2, 2 ],
		[ 3, 1 ],
		[ 4, 0 ]
	];
	k = -1;

	mapFunAsync = factory( fcn );
	mapFunAsync( 5, done );

	function fcn( i, next ) {
		var t = 300 - (i*50);
		setTimeout( onTimeout, t );
		function onTimeout() {
			k += 1;
			next( null, [ i, k ] );
		}
	}

	function done( error, actual ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.deepEqual( actual, expected, 'returns expected results' );
		}
		t.end();
	}
});

tape( 'the function supports returning a function which performs sequential invocation (series)', function test( t ) {
	var mapFunAsync;
	var expected;
	var opts;
	var k;

	expected = [
		[ 0, 0 ],
		[ 1, 1 ],
		[ 2, 2 ],
		[ 3, 3 ],
		[ 4, 4 ]
	];
	k = -1;

	opts = {
		'series': true
	};
	mapFunAsync = factory( opts, fcn );
	mapFunAsync( 5, done );

	function fcn( i, next ) {
		var t = 300 - (i*50);
		setTimeout( onTimeout, t );
		function onTimeout() {
			k += 1;
			next( null, [ i, k ] );
		}
	}

	function done( error, actual ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.deepEqual( actual, expected, 'returns expected results' );
		}
		t.end();
	}
});

tape( 'the function supports returning a function which performs sequential invocation (limit = 1)', function test( t ) {
	var mapFunAsync;
	var expected;
	var opts;
	var k;

	expected = [
		[ 0, 0 ],
		[ 1, 1 ],
		[ 2, 2 ],
		[ 3, 3 ],
		[ 4, 4 ]
	];
	k = -1;

	opts = {
		'series': false,
		'limit': 1
	};
	mapFunAsync = factory( opts, fcn );
	mapFunAsync( 5, done );

	function fcn( i, next ) {
		var t = 300 - (i*50);
		setTimeout( onTimeout, t );
		function onTimeout() {
			k += 1;
			next( null, [ i, k ] );
		}
	}

	function done( error, actual ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.deepEqual( actual, expected, 'returns expected results' );
		}
		t.end();
	}
});

tape( 'the function supports returning a function which limits the maximum number of invocations pending at any one time', function test( t ) {
	var mapFunAsync;
	var expected;
	var delays;
	var opts;
	var k;

	delays = [ 300, 250, 300, 150, 200 ];
	expected = [
		[ 0, 1 ], // 250
		[ 1, 0 ], // 300
		[ 2, 3 ], // 550 = 250+300
		[ 3, 2 ], // 450 = 300+150
		[ 4, 4 ]  // 650 = 450+200 = 300+150+200
	];
	k = -1;

	opts = {
		'series': false,
		'limit': 2
	};
	mapFunAsync = factory( opts, fcn );
	mapFunAsync( 5, done );

	function fcn( i, next ) {
		setTimeout( onTimeout, delays[ i ] );
		function onTimeout() {
			k += 1;
			next( null, [ i, k ] );
		}
	}

	function done( error, actual ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.deepEqual( actual, expected, 'returns expected results' );
		}
		t.end();
	}
});

tape( 'the function supports specifying an execution context for the invoked function', function test( t ) {
	var mapFunAsync;
	var expected;
	var opts;
	var ctx;

	ctx = {
		'count': 0
	};
	opts = {
		'thisArg': ctx
	};

	expected = [ 0, 1, 2, 3, 4 ];

	mapFunAsync = factory( opts, fcn );
	mapFunAsync( 5, done );

	function fcn( i, next ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next( null, i );
		}
	}

	function done( error, actual ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.deepEqual( actual, expected, 'returns expected results' );
			t.strictEqual( ctx.count, 5, 'updates execution context' );
		}
		t.end();
	}
});

tape( 'the returned function returns an array containing `undefined` values if an invoked function does not return anything', function test( t ) {
	var mapFunAsync;
	var expected;

	expected = [ void 0, void 0, void 0, void 0, void 0 ];

	mapFunAsync = factory( fcn );
	mapFunAsync( 5, done );

	function fcn( i, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next();
		}
	}

	function done( error, actual ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.deepEqual( actual, expected, 'returns expected results' );
		}
		t.end();
	}
});

tape( 'if an error is encountered, the returned function suspends execution and immediately returns the error (series)', function test( t ) {
	var mapFunAsync;
	var count;
	var opts;

	opts = {
		'series': true
	};
	count = 0;

	mapFunAsync = factory( opts, fcn );
	mapFunAsync( 5, done );

	function fcn( i, next ) {
		var t = 300 - (i*50);
		count += 1;
		setTimeout( onTimeout, t );
		function onTimeout() {
			if ( i === 2 ) {
				return next( new Error( 'beep' ) );
			}
			next( null, i );
		}
	}

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.strictEqual( count, 3, 'suspends execution' );
		t.end();
	}
});

tape( 'if an error is encountered, the returned function suspends execution and immediately returns the error (concurrent; limit)', function test( t ) {
	var mapFunAsync;
	var count;
	var opts;

	opts = {
		'limit': 2
	};
	count = 0;

	mapFunAsync = factory( opts, fcn );
	mapFunAsync( 5, done );

	function fcn( i, next ) {
		var t = 300 - (i*50);
		count += 1;
		setTimeout( onTimeout, t );
		function onTimeout() {
			if ( i === 1 ) {
				return next( new Error( 'beep' ) );
			}
			next( null, i );
		}
	}

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.strictEqual( count, 2, 'suspends execution' );
		t.end();
	}
});

tape( 'if an error is encountered, the returned function suspends execution and immediately returns the error (concurrent)', function test( t ) {
	var mapFunAsync;
	var count;

	mapFunAsync = factory( fcn );

	count = 0;
	mapFunAsync( 5, done );

	function fcn( i, next ) {
		var t = 300 - (i*50);
		count += 1;
		setTimeout( onTimeout, t );
		function onTimeout() {
			if ( i === 1 ) {
				return next( new Error( 'beep' ) );
			}
			next( null, i );
		}
	}

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.strictEqual( count, 5, 'suspends execution' );
		t.end();
	}
});

tape( 'if an error is encountered, the returned function suspends execution and immediately returns the error (concurrent)', function test( t ) {
	var mapFunAsync;
	var count;

	mapFunAsync = factory( fcn );

	count = 0;
	mapFunAsync( 5, done );

	function fcn( i, next ) {
		var t = 300 - (i*50);
		count += 1;
		setTimeout( onTimeout, t );
		function onTimeout() {
			next( new Error( 'beep' ) );
		}
	}

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.strictEqual( count, 5, 'suspends execution' );
		t.end();
	}
});

tape( 'the returned function does not guarantee asynchronous execution', function test( t ) {
	var mapFunAsync;
	var expected;
	var flg;

	expected = [ 0, 1, 2, 3, 4 ];
	flg = 0;

	mapFunAsync = factory( fcn );
	mapFunAsync( 5, done );
	flg = 1;

	function fcn( i, next ) {
		next( null, i );
	}

	function done( error, actual ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.deepEqual( actual, expected, 'returns expected results' );
		}
		t.strictEqual( flg, 0, 'releases the zalgo' );
		t.end();
	}
});
