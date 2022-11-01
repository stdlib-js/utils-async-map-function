// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).mapFunAsync={})}(this,(function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(t,r,e.get),p&&c&&c.call(t,r,e.set),t};var a=e;function s(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=/./;function y(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function j(t,r){return null!=t&&m.call(t,r)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var w=v()?function(t){var r,e,n;if(null==t)return d.call(t);e=t[g],r=j(t,g);try{t[g]=void 0}catch(r){return d.call(t)}return n=d.call(t),r?t[g]=e:delete t[g],n}:function(t){return d.call(t)},_=Boolean.prototype.toString;var h=v();function O(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function E(t){return y(t)||O(t)}function T(){return new Function("return this;")()}s(E,"isPrimitive",y),s(E,"isObject",O);var P="object"==typeof self?self:null,A="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof S?S:null;var N=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(P)return P;if(A)return A;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),B=N.document&&N.document.childNodes,F=Int8Array;function X(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;s(X,"REGEXP",x);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};function C(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=w(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=x.exec(n.toString()))return r[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(C));var M="function"==typeof p||"object"==typeof F||"function"==typeof B?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function k(t){return"function"===M(t)}function L(t){return"number"==typeof t}var R=Number,U=R.prototype.toString;var Y=v();function q(t){return"object"==typeof t&&(t instanceof R||(Y?function(t){try{return U.call(t),!0}catch(t){return!1}}(t):"[object Number]"===w(t)))}function z(t){return L(t)||q(t)}s(z,"isPrimitive",L),s(z,"isObject",q);var D=Number.POSITIVE_INFINITY,H=R.NEGATIVE_INFINITY,J=Math.floor;function K(t){return t<D&&t>H&&J(r=t)===r;var r}function Q(t){return L(t)&&K(t)}function W(t){return q(t)&&K(t.valueOf())}function Z(t){return Q(t)||W(t)}function $(t){return Q(t)&&t>=0}function tt(t){return W(t)&&t.valueOf()>=0}function rt(t){return $(t)||tt(t)}function et(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}s(Z,"isPrimitive",Q),s(Z,"isObject",W),s(rt,"isPrimitive",$),s(rt,"isObject",tt);var nt,ot=Object.getPrototypeOf;nt=k(Object.getPrototypeOf)?ot:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===w(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var it=nt;var ut=Object.prototype;function ct(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),it(t))}(t),!r||!j(t,"constructor")&&j(r,"constructor")&&k(r.constructor)&&"[object Function]"===w(r.constructor)&&j(r,"isPrototypeOf")&&k(r.isPrototypeOf)&&(r===ut||function(t){var r;for(r in t)if(!j(t,r))return!1;return!0}(t)))}function ft(t){return Q(t)&&t>0}function lt(t){return W(t)&&t.valueOf()>0}function at(t){return ft(t)||lt(t)}function st(t,r){return ct(r)?(j(r,"thisArg")&&(t.thisArg=r.thisArg),j(r,"series")&&(t.series=r.series,!y(t.series))?new TypeError(et("0iX30","series",t.series)):j(r,"limit")&&(t.limit=r.limit,!ft(t.limit))?new TypeError(et("0iX3b","limit",t.limit)):null):new TypeError(et("0iX2h",r))}s(at,"isPrimitive",ft),s(at,"isObject",lt);var pt=()=>{};function yt(t,r,e,n){var o,i,u,c,f,l,a;if(u=new Array(t),0===t)return n(null,u);for(c=t<r.limit?t:r.limit,o=0,f=-1,l=t-1,a=0;a<c;a++)f<l&&s();function s(){var t;t=f+=1,e.call(r.thisArg,t,(function(r,e){if(i)return;if(r)return i=!0,p(r);u[t]=e,p()}))}function p(r){return r?(pt("Encountered an error: %s",r.message),n(r)):(o+=1,f<l?s():o===t?n(null,u):void 0)}}function bt(t,r){var e,n,o;if(e={},arguments.length>1){if(n=st(e,t))throw n;o=r}else o=t;if(!k(o))throw new TypeError(et("0iX43",o));return e.series?e.limit=1:e.limit||(e.limit=D),i;function i(t,r){if(!$(t))throw new TypeError(et("0iXBR",t));if(!k(r))throw new TypeError(et("0iX43",r));return yt(t,e,o,(function(t,e){if(t)return r(t);r(null,e)}))}}function vt(t,r,e,n){if(arguments.length<4)return bt(t)(r,e);bt(e,t)(r,n)}s(vt,"factory",bt),t.default=vt,t.factory=bt,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=browser.js.map
