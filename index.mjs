// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";function d(e,t){return s(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(r("1RN2o,GE","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!m(e.limit))?new TypeError(r("1RN3P,Fv","limit",e.limit)):null):new TypeError(r("1RN2V,FD",t))}function f(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var i=function e(){if(this instanceof e){var i=[null];i.push.apply(i,arguments);var r=Function.bind.apply(t,i);return new r}return t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),i}var u=f(Object.freeze({__proto__:null,default:()=>()=>{}}))("map-function-async:limit");function p(e,t,i,r){var n,s,o,l,m,d,f;if(u("Number of invocations: %d",e),o=new Array(e),0===e)return u("Finished invoking a function."),r(null,o);for(l=e<t.limit?e:t.limit,u("Concurrency limit: %d",l),n=0,m=-1,d=e-1,f=0;f<l;f++)m<d&&p();function p(){var e;u("Invocation number: %d",e=m+=1),i.call(t.thisArg,e,(function(t,i){if(s)return;if(t)return s=!0,a(t);o[e]=i,a()}))}function a(t){return t?(u("Encountered an error: %s",t.message),r(t)):(u("Completed invocation %d of %d.",n+=1,e),m<d?p():n===e?(u("Finished invoking a function."),r(null,o)):void 0)}}function a(e,s){var o,l,m;if(o={},arguments.length>1){if(l=d(o,e))throw l;m=s}else m=e;if(!t(m))throw new TypeError(r("1RN3q,JV",m));return o.series?o.limit=1:o.limit||(o.limit=n),f;function f(e,n){if(!i(e))throw new TypeError(r("1RNAk,Ox",e));if(!t(n))throw new TypeError(r("1RN3q,JV",n));return p(e,o,m,(function(e,t){if(e)return n(e);n(null,t)}))}}function c(e,t,i,r){if(arguments.length<4)return a(e)(t,i);a(i,e)(t,r)}e(c,"factory",a);export{c as default,a as factory};
//# sourceMappingURL=index.mjs.map