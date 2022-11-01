// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function j(t,r){return null!=t&&m.call(t,r)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var w=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[d],r=j(t,d);try{t[d]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[d]=e:delete t[d],n}:function(t){return v.call(t)},g=Boolean.prototype.toString;var _=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function O(t){return p(t)||h(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",h);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},S="object"==typeof A?A:null;var I=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(T)return T;if(S)return S;throw new Error("unexpected error. Unable to resolve global object.")}(),N=I.document&&I.document.childNodes,B=Int8Array;function X(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;a(X,"REGEXP",F);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};function x(t){return null!==t&&"object"==typeof t}function C(t){var r,e,n,o;if(("Object"===(e=w(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=F.exec(n.toString()))return r[1]}return x(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(x,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(x));var G="function"==typeof s||"object"==typeof B||"function"==typeof N?function(t){return C(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?C(t).toLowerCase():r};function k(t){return"function"===G(t)}function L(t){return"number"==typeof t}var M=Number,R=M.prototype.toString;var U=b();function Y(t){return"object"==typeof t&&(t instanceof M||(U?function(t){try{return R.call(t),!0}catch(t){return!1}}(t):"[object Number]"===w(t)))}function q(t){return L(t)||Y(t)}a(q,"isPrimitive",L),a(q,"isObject",Y);var z=Number.POSITIVE_INFINITY,D=M.NEGATIVE_INFINITY,H=Math.floor;function J(t){return t<z&&t>D&&H(r=t)===r;var r}function K(t){return L(t)&&J(t)}function Q(t){return Y(t)&&J(t.valueOf())}function W(t){return K(t)||Q(t)}function Z(t){return K(t)&&t>=0}function $(t){return Q(t)&&t.valueOf()>=0}function tt(t){return Z(t)||$(t)}function rt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}a(W,"isPrimitive",K),a(W,"isObject",Q),a(tt,"isPrimitive",Z),a(tt,"isObject",$);var et,nt=Object.getPrototypeOf;et=k(Object.getPrototypeOf)?nt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===w(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ot=et;var it=Object.prototype;function ut(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),ot(t))}(t),!r||!j(t,"constructor")&&j(r,"constructor")&&k(r.constructor)&&"[object Function]"===w(r.constructor)&&j(r,"isPrototypeOf")&&k(r.isPrototypeOf)&&(r===it||function(t){var r;for(r in t)if(!j(t,r))return!1;return!0}(t)))}function ct(t){return K(t)&&t>0}function ft(t){return Q(t)&&t.valueOf()>0}function lt(t){return ct(t)||ft(t)}function at(t,r){return ut(r)?(j(r,"thisArg")&&(t.thisArg=r.thisArg),j(r,"series")&&(t.series=r.series,!p(t.series))?new TypeError(rt("0iX30","series",t.series)):j(r,"limit")&&(t.limit=r.limit,!ct(t.limit))?new TypeError(rt("0iX3b","limit",t.limit)):null):new TypeError(rt("0iX2h",r))}a(lt,"isPrimitive",ct),a(lt,"isObject",ft);var st=()=>{};function pt(t,r,e,n){var o,i,u,c,f,l,a;if(u=new Array(t),0===t)return n(null,u);for(c=t<r.limit?t:r.limit,o=0,f=-1,l=t-1,a=0;a<c;a++)f<l&&s();function s(){var t;t=f+=1,e.call(r.thisArg,t,(function(r,e){if(i)return;if(r)return i=!0,p(r);u[t]=e,p()}))}function p(r){return r?(st("Encountered an error: %s",r.message),n(r)):(o+=1,f<l?s():o===t?n(null,u):void 0)}}function yt(t,r){var e,n,o;if(e={},arguments.length>1){if(n=at(e,t))throw n;o=r}else o=t;if(!k(o))throw new TypeError(rt("0iX43",o));return e.series?e.limit=1:e.limit||(e.limit=z),i;function i(t,r){if(!Z(t))throw new TypeError(rt("0iXBR",t));if(!k(r))throw new TypeError(rt("0iX43",r));return pt(t,e,o,(function(t,e){if(t)return r(t);r(null,e)}))}}function bt(t,r,e,n){if(arguments.length<4)return yt(t)(r,e);yt(e,t)(r,n)}a(bt,"factory",yt);export{bt as default,yt as factory};
//# sourceMappingURL=mod.js.map
