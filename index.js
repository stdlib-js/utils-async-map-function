// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).mapFunAsync=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&m.call(t,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var g=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[j],r=d(t,j);try{t[j]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[j]=e:delete t[j],n}:function(t){return v.call(t)},_=Boolean.prototype.toString;var h=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function O(t){return p(t)||w(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",w);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,A="object"==typeof global?global:null;var S=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(T)return T;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),I=S.document&&S.document.childNodes,N=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;a(F,"REGEXP",B);var X=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function k(t){return null!==t&&"object"==typeof t}function C(t){var r,e,n,o;if(("Object"===(e=g(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=B.exec(n.toString()))return r[1]}return k(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(k,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!X(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(k));var V="function"==typeof s||"object"==typeof N||"function"==typeof I?function(t){return C(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?C(t).toLowerCase():r};function x(t){return"function"===V(t)}function G(t){return"number"==typeof t}var M=Number,L=M.prototype.toString;var R=b();function U(t){return"object"==typeof t&&(t instanceof M||(R?function(t){try{return L.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function Y(t){return G(t)||U(t)}a(Y,"isPrimitive",G),a(Y,"isObject",U);var z=Number.POSITIVE_INFINITY,D=M.NEGATIVE_INFINITY,q=Math.floor;function H(t){return t<z&&t>D&&q(r=t)===r;var r}function J(t){return G(t)&&H(t)}function K(t){return U(t)&&H(t.valueOf())}function Q(t){return J(t)||K(t)}function W(t){return J(t)&&t>=0}function Z(t){return K(t)&&t.valueOf()>=0}function $(t){return W(t)||Z(t)}function tt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}a(Q,"isPrimitive",J),a(Q,"isObject",K),a($,"isPrimitive",W),a($,"isObject",Z);var rt,et=Object.getPrototypeOf;rt=x(Object.getPrototypeOf)?et:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===g(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var nt=rt;var ot=Object.prototype;function it(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!X(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),nt(t))}(t),!r||!d(t,"constructor")&&d(r,"constructor")&&x(r.constructor)&&"[object Function]"===g(r.constructor)&&d(r,"isPrototypeOf")&&x(r.isPrototypeOf)&&(r===ot||function(t){var r;for(r in t)if(!d(t,r))return!1;return!0}(t)))}function ut(t){return J(t)&&t>0}function ct(t){return K(t)&&t.valueOf()>0}function ft(t){return ut(t)||ct(t)}function lt(t,r){return it(r)?(d(r,"thisArg")&&(t.thisArg=r.thisArg),d(r,"series")&&(t.series=r.series,!p(t.series))?new TypeError(tt("0iX30","series",t.series)):d(r,"limit")&&(t.limit=r.limit,!ut(t.limit))?new TypeError(tt("0iX3b","limit",t.limit)):null):new TypeError(tt("0iX2h",r))}function at(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}a(ft,"isPrimitive",ut),a(ft,"isObject",ct);var st=at(Object.freeze({__proto__:null,default:()=>()=>{}}))("map-function-async:limit");function pt(t,r,e,n){var o,i,u,c,f,l,a;if(st("Number of invocations: %d",t),u=new Array(t),0===t)return st("Finished invoking a function."),n(null,u);for(c=t<r.limit?t:r.limit,st("Concurrency limit: %d",c),o=0,f=-1,l=t-1,a=0;a<c;a++)f<l&&s();function s(){var t;st("Invocation number: %d",t=f+=1),e.call(r.thisArg,t,(function(r,e){if(i)return;if(r)return i=!0,p(r);u[t]=e,p()}))}function p(r){return r?(st("Encountered an error: %s",r.message),n(r)):(st("Completed invocation %d of %d.",o+=1,t),f<l?s():o===t?(st("Finished invoking a function."),n(null,u)):void 0)}}function yt(t,r){var e,n,o;if(e={},arguments.length>1){if(n=lt(e,t))throw n;o=r}else o=t;if(!x(o))throw new TypeError(tt("0iX43",o));return e.series?e.limit=1:e.limit||(e.limit=z),i;function i(t,r){if(!W(t))throw new TypeError(tt("0iXBR",t));if(!x(r))throw new TypeError(tt("0iX43",r));return pt(t,e,o,(function(t,e){if(t)return r(t);r(null,e)}))}}function bt(t,r,e,n){if(arguments.length<4)return yt(t)(r,e);yt(e,t)(r,n)}return a(bt,"factory",yt),bt}));
//# sourceMappingURL=index.js.map
