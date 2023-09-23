// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,T=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,f,s,l,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,O(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=A.exec(r);n;)(e=r.slice(i,A.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=A.lastIndex,n=A.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function I(r){var e,t,n;if(!F(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var N,V=Object.prototype,R=V.toString,C=V.__defineGetter__,$=V.__defineSetter__,B=V.__lookupGetter__,G=V.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var L=N;function M(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=/./;function U(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function D(r,e){return null!=r&&z.call(r,e)}var J="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof J?J.toStringTag:"",H=X()?function(r){var e,t,n;if(null==r)return q.call(r);t=r[Y],e=D(r,Y);try{r[Y]=void 0}catch(e){return q.call(r)}return n=q.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return q.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=X();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function tr(r){return U(r)||er(r)}function nr(){return new Function("return this;")()}M(tr,"isPrimitive",U),M(tr,"isObject",er);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,cr=function(r){if(arguments.length){if(!U(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ar)return ar;if(ir)return ir;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),ur=cr.document&&cr.document.childNodes,fr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var lr=/^\s*function\s*([^(]*)/i;M(sr,"REGEXP",lr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};function gr(r){return null!==r&&"object"==typeof r}function dr(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return gr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(gr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(gr));var yr="function"==typeof Z||"object"==typeof fr||"function"==typeof ur?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?dr(r).toLowerCase():e};function br(r){return"function"===yr(r)}function hr(r){return"number"==typeof r}var vr=Number,mr=vr.prototype.toString,wr=X();function jr(r){return"object"==typeof r&&(r instanceof vr||(wr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function _r(r){return hr(r)||jr(r)}M(_r,"isPrimitive",hr),M(_r,"isObject",jr);var Er=Number.POSITIVE_INFINITY,Or=vr.NEGATIVE_INFINITY,Tr=Math.floor;function Sr(r){return r<Er&&r>Or&&Tr(e=r)===e;var e}function kr(r){return hr(r)&&Sr(r)}function Ar(r){return jr(r)&&Sr(r.valueOf())}function xr(r){return kr(r)||Ar(r)}function Pr(r){return kr(r)&&r>=0}function Fr(r){return Ar(r)&&r.valueOf()>=0}function Ir(r){return Pr(r)||Fr(r)}function Nr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}M(xr,"isPrimitive",kr),M(xr,"isObject",Ar),M(Ir,"isPrimitive",Pr),M(Ir,"isObject",Fr);var Vr,Rr=Object,Cr=Object.getPrototypeOf;Vr=br(Object.getPrototypeOf)?Cr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var $r=Vr,Br=Object.prototype;function Gr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!pr(r)}(r)&&(e=function(r){return null==r?null:(r=Rr(r),$r(r))}(r),!e||!D(r,"constructor")&&D(e,"constructor")&&br(e.constructor)&&"[object Function]"===H(e.constructor)&&D(e,"isPrototypeOf")&&br(e.isPrototypeOf)&&(e===Br||function(r){var e;for(e in r)if(!D(r,e))return!1;return!0}(r)))}function Lr(r){return kr(r)&&r>0}function Mr(r){return Ar(r)&&r.valueOf()>0}function Zr(r){return Lr(r)||Mr(r)}function Ur(r,e){return Gr(e)?(D(e,"thisArg")&&(r.thisArg=e.thisArg),D(e,"series")&&(r.series=e.series,!U(r.series))?new TypeError(Nr("1RN2o,GE","series",r.series)):D(e,"limit")&&(r.limit=e.limit,!Lr(r.limit))?new TypeError(Nr("1RN3P,Fv","limit",r.limit)):null):new TypeError(Nr("1RN2V,FD",e))}function Wr(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}M(Zr,"isPrimitive",Lr),M(Zr,"isObject",Mr);var Xr=Wr(Object.freeze({__proto__:null,default:()=>()=>{}}))("map-function-async:limit");function qr(r,e,t,n){var i,o,a,c,u,f,s;if(Xr("Number of invocations: %d",r),a=new Array(r),0===r)return Xr("Finished invoking a function."),n(null,a);for(c=r<e.limit?r:e.limit,Xr("Concurrency limit: %d",c),i=0,u=-1,f=r-1,s=0;s<c;s++)u<f&&l();function l(){var r;Xr("Invocation number: %d",r=u+=1),t.call(e.thisArg,r,(function(e,t){if(!o)return e?(o=!0,p(e)):(a[r]=t,void p())}))}function p(e){return e?(Xr("Encountered an error: %s",e.message),n(e)):(Xr("Completed invocation %d of %d.",i+=1,r),u<f?l():i===r?(Xr("Finished invoking a function."),n(null,a)):void 0)}}function zr(r,e){var t,n,i;if(t={},arguments.length>1){if(n=Ur(t,r))throw n;i=e}else i=r;if(!br(i))throw new TypeError(Nr("1RN3q,JV",i));return t.series?t.limit=1:t.limit||(t.limit=Er),o;function o(r,e){if(!Pr(r))throw new TypeError(Nr("1RNAk,Ox",r));if(!br(e))throw new TypeError(Nr("1RN3q,JV",e));return qr(r,t,i,(function(r,t){if(r)return e(r);e(null,t)}))}}function Dr(r,e,t,n){if(arguments.length<4)return zr(r)(e,t);zr(t,r)(e,n)}return M(Dr,"factory",zr),Dr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mapFunAsync=e();
//# sourceMappingURL=browser.js.map