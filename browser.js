// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n="undefined"!=typeof globalThis?globalThis:n||self).cbrt={})}(this,(function(n){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(n){return!1}}()?e:function(n,t,r){var e,l,s,p;if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(f.call(n,t)||c.call(n,t)?(e=n.__proto__,n.__proto__=o,delete n[t],n[t]=r.value,n.__proto__=e):n[t]=r.value),s="get"in r,p="set"in r,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(n,t,r.get),p&&a&&a.call(n,t,r.set),n};var l=r;function s(n,t,r){l(n,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var p=Math.floor;function y(n){return p(n)===n}var g=4294967295;function d(n){return"number"==typeof n}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return m&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;function w(n,t){return null!=n&&h.call(n,t)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var E=v()?function(n){var t,r,e;if(null==n)return b.call(n);r=n[j],t=w(n,j);try{n[j]=void 0}catch(t){return b.call(n)}return e=b.call(n),t?n[j]=r:delete n[j],e}:function(n){return b.call(n)},O=Number,A=O.prototype.toString;var _=v();function T(n){return"object"==typeof n&&(n instanceof O||(_?function(n){try{return A.call(n),!0}catch(n){return!1}}(n):"[object Number]"===E(n)))}function x(n){return d(n)||T(n)}s(x,"isPrimitive",d),s(x,"isObject",T);var S=Number.POSITIVE_INFINITY,F=O.NEGATIVE_INFINITY;function I(n){return n<S&&n>F&&y(n)}function U(n){return d(n)&&I(n)}function P(n){return T(n)&&I(n.valueOf())}function V(n){return U(n)||P(n)}function k(n){return U(n)&&n>=0}function N(n){return P(n)&&n.valueOf()>=0}function H(n){return k(n)||N(n)}function B(n){return Object.keys(Object(n))}s(V,"isPrimitive",U),s(V,"isObject",P),s(H,"isPrimitive",k),s(H,"isObject",N);var L,G=void 0!==Object.keys;function M(n){return"[object Arguments]"===E(n)}L=function(){return M(arguments)}();var R=L;function W(n){return"string"==typeof n}var Y=String.prototype.valueOf;var C=v();function X(n){return"object"==typeof n&&(n instanceof String||(C?function(n){try{return Y.call(n),!0}catch(n){return!1}}(n):"[object String]"===E(n)))}function q(n){return W(n)||X(n)}function D(n){return n!=n}function z(n){return d(n)&&D(n)}function J(n){return T(n)&&D(n.valueOf())}function K(n){return z(n)||J(n)}s(q,"isPrimitive",W),s(q,"isObject",X),s(K,"isPrimitive",z),s(K,"isObject",J);var Q=Object.prototype.propertyIsEnumerable;var Z=!Q.call("beep","0");function $(n,t){var r;return null!=n&&(!(r=Q.call(n,t))&&Z&&q(n)?!z(t=+t)&&U(t)&&t>=0&&t<n.length:r)}var nn=Array.isArray?Array.isArray:function(n){return"[object Array]"===E(n)},tn=4294967295;var rn=R?M:function(n){return null!==n&&"object"==typeof n&&!nn(n)&&"number"==typeof n.length&&y(n.length)&&n.length>=0&&n.length<=tn&&w(n,"callee")&&!$(n,"callee")},en=Array.prototype.slice;function on(n){return null!==n&&"object"==typeof n}s(on,"isObjectLikeArray",function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(t){var r,e;if(!nn(t))return!1;if(0===(r=t.length))return!1;for(e=0;e<r;e++)if(!1===n(t[e]))return!1;return!0}}(on));var un=$((function(){}),"prototype"),an=!$({toString:null},"toString");function fn(n){return"object"==typeof n&&null!==n&&"number"==typeof n.length&&y(n.length)&&n.length>=0&&n.length<=9007199254740991}function cn(n,t,r){var e,o;if(!fn(n)&&!W(n))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+n+"`.");if(0===(e=n.length))return-1;if(3===arguments.length){if(!U(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=e)return-1;o=r}else(o=e+r)<0&&(o=0)}else o=0;if(K(t)){for(;o<e;o++)if(K(n[o]))return o}else for(;o<e;o++)if(n[o]===t)return o;return-1}var ln=/./;function sn(n){return"boolean"==typeof n}var pn=Boolean.prototype.toString;var yn=v();function gn(n){return"object"==typeof n&&(n instanceof Boolean||(yn?function(n){try{return pn.call(n),!0}catch(n){return!1}}(n):"[object Boolean]"===E(n)))}function dn(n){return sn(n)||gn(n)}function mn(){return new Function("return this;")()}s(dn,"isPrimitive",sn),s(dn,"isObject",gn);var vn="object"==typeof self?self:null,bn="object"==typeof window?window:null,hn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},wn="object"==typeof hn?hn:null;var jn=function(n){if(arguments.length){if(!sn(n))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+n+"`.");if(n)return mn()}if(vn)return vn;if(bn)return bn;if(wn)return wn;throw new Error("unexpected error. Unable to resolve global object.")}(),En=jn.document&&jn.document.childNodes,On=Int8Array;function An(){return/^\s*function\s*([^(]*)/i}var _n=/^\s*function\s*([^(]*)/i;function Tn(n){var t,r,e,o;if(("Object"===(r=E(n).slice(8,-1))||"Error"===r)&&n.constructor){if("string"==typeof(e=n.constructor).name)return e.name;if(t=_n.exec(e.toString()))return t[1]}return on(o=n)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}s(An,"REGEXP",_n);var xn="function"==typeof ln||"object"==typeof On||"function"==typeof En?function(n){return Tn(n).toLowerCase()}:function(n){var t;return null===n?"null":"object"===(t=typeof n)?Tn(n).toLowerCase():t};function Sn(n){return n.constructor&&n.constructor.prototype===n}var Fn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],In="undefined"==typeof window?void 0:window;var Un=function(){var n;if("undefined"===xn(In))return!1;for(n in In)try{-1===cn(Fn,n)&&w(In,n)&&null!==In[n]&&"object"===xn(In[n])&&Sn(In[n])}catch(n){return!0}return!1}(),Pn="undefined"!=typeof window;var Vn,kn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Vn=G?function(){return 2!==(B(arguments)||"").length}(1,2)?function(n){return rn(n)?B(en.call(n)):B(n)}:B:function(n){var t,r,e,o,i,u,a;if(o=[],rn(n)){for(a=0;a<n.length;a++)o.push(a.toString());return o}if("string"==typeof n){if(n.length>0&&!w(n,"0"))for(a=0;a<n.length;a++)o.push(a.toString())}else{if(!1==(e="function"==typeof n)&&!on(n))return o;r=un&&e}for(i in n)r&&"prototype"===i||!w(n,i)||o.push(String(i));if(an)for(t=function(n){if(!1===Pn&&!Un)return Sn(n);try{return Sn(n)}catch(n){return!1}}(n),a=0;a<kn.length;a++)u=kn[a],t&&"constructor"===u||!w(n,u)||o.push(String(u));return o};var Nn=Vn;function Hn(n){return"function"===xn(n)}var Bn,Ln=Object.getPrototypeOf;Bn=Hn(Object.getPrototypeOf)?Ln:function(n){var t=function(n){return n.__proto__}(n);return t||null===t?t:"[object Function]"===E(n.constructor)?n.constructor.prototype:n instanceof Object?Object.prototype:null};var Gn=Bn;var Mn=Object.prototype;function Rn(n){var t;return!!function(n){return"object"==typeof n&&null!==n&&!nn(n)}(n)&&(t=function(n){return null==n?null:(n=Object(n),Gn(n))}(n),!t||!w(n,"constructor")&&w(t,"constructor")&&Hn(t.constructor)&&"[object Function]"===E(t.constructor)&&w(t,"isPrototypeOf")&&Hn(t.isPrototypeOf)&&(t===Mn||function(n){var t;for(t in n)if(!w(n,t))return!1;return!0}(n)))}function Wn(n,t){var r,e,o,i,u,a,f,c=!0;if(!on(n))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+n+"`.");if(arguments.length>1){if(!Rn(t))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+t+"`.");if(w(t,"duplicates")&&!sn(c=t.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+c+"`.")}if(e=(r=Nn(n)).length,u={},c)for(f=0;f<e;f++)w(u,i=n[o=r[f]])?(a=u[i],nn(a)?u[i].push(o):u[i]=[a,o]):u[i]=o;else for(f=0;f<e;f++)u[n[o=r[f]]]=o;return u}var Yn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Cn(){return Yn.slice()}var Xn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function qn(){return Xn.slice()}function Dn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function zn(n,t,r){l(n,t,{configurable:!1,enumerable:!0,writable:!1,value:r})}s(qn,"enum",Dn),function(n,t){var r,e,o;for(r=Nn(t),o=0;o<r.length;o++)zn(n,e=r[o],t[e])}(qn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Jn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Kn(){return{bool:Jn.bool,int8:Jn.int8,uint8:Jn.uint8,uint8c:Jn.uint8c,int16:Jn.int16,uint16:Jn.uint16,int32:Jn.int32,uint32:Jn.uint32,int64:Jn.int64,uint64:Jn.uint64,float32:Jn.float32,float64:Jn.float64,complex64:Jn.complex64,complex128:Jn.complex128,binary:Jn.binary,generic:Jn.generic,notype:Jn.notype,userdefined_type:Jn.userdefined_type}}s(Cn,"enum",Kn),function(n,t){var r,e,o;for(r=Nn(t),o=0;o<r.length;o++)zn(n,e=r[o],t[e])}(Cn,Kn());var Qn=Wn(Kn(),{duplicates:!1});var Zn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function $n(n){var t=typeof n;return"string"===t?null===function(n){var t=Zn[n];return"number"==typeof t?t:null}(n)?null:n:"number"===t?function(n){var t=Qn[n];return"string"==typeof t?t:null}(n):null}function nt(n,t,r){var e,o,i,u,a,f,c,l,s;if(!("object"==typeof(s=n)&&null!==s&&"number"==typeof s.length&&y(s.length)&&s.length>=0&&s.length<=g))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+n+"`.");if(!k(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(!k(r))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+r+"`.");if(0===(e=n.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(e%(a=t+r)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(o=[],i=[],f=2*a,l=2*t,c=0;c<=f;c++)0===c?c===l?i.push("() => ("):i.push("("):c===f?c===l?i.push(") => ()"):i.push(")"):c===l?i.push(") => ("):c%2==1?i.push(""):i.push(", ");for(c=0;c<e;c++)null===(u=$n(n[c]))&&(u=n[c]),i[2*(l=c%a)+1]=u,l===a-1&&o.push(i.join(""));return o}function tt(n,t,r,e){return s(r,"nargs",e?n.nargs+n.nin+n.nout:n.nargs),s(r,"nin",n.nin),s(r,"nout",n.nout),function(n,t,r){l(n,t,{configurable:!1,enumerable:!1,get:r})}(r,"types",(function(){return nt(t,n.nin,n.nout)})),r}var rt={nargs:7,nin:1,nout:1},et=[11,11,11,15,10,10,10,11,10,15,15,15,6,11,6,15,4,10,4,11,4,15,1,10,1,11,1,15,7,11,7,15,5,10,5,11,5,15,2,10,2,11,2,15,3,10,3,11,3,15];function ot(n){return U(n)&&n>0}function it(n){return P(n)&&n.valueOf()>0}function ut(n){return ot(n)||it(n)}s(ut,"isPrimitive",ot),s(ut,"isObject",it);var at=function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(t){var r,e;if(!function(n){return null!=n&&"function"!=typeof n&&"number"==typeof n.length&&y(n.length)&&n.length>=0&&n.length<=g}(t))return!1;if(0===(r=t.length))return!1;for(e=0;e<r;e++)if(!1===n(t[e]))return!1;return!0}}(Hn);function ft(n){return Math.abs(n)}function ct(n,t,r,e,o,i,u,a,f){var c,l,s,p;for(c=i,s=0;s<n;s++){for(l=f,p=0;p<t&&r[c+p*o]===u[l];p++)l+=a;if(p===t)return s;c+=e}return-1}function lt(n,t,r,e,o,i){var u,a,f,c,l,s;if(Hn(n))s=n;else if(!at(n))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+n+"`.");if(!fn(t))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+t+"`.");if(!fn(r)&&null!==r)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+r+"`.");if(!ut(e))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+e+"`.");if(!k(o))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+o+"`.");if(!k(i))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+i+"`.");if(0===(f=o+i))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(s){if(!U(c=t.length/f))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(c=n.length,t.length!==c*f)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(r&&r.length!==c)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*f+1===e)a=!1;else{if(4*f+1!==e)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");a=!0}return l=o*(u=a?4:3)+1,function(){var p,y,g,d,m,v,b,h,w,j,E,O;if((v=arguments.length)!==e){if(v<e)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!U(h=arguments[0]))throw new TypeError("invalid argument. First argument must be an integer.");for(m=[h],d=[],E=1;E<e;E+=u)d.push(arguments[E]);for(p=[],E=3;E<e;E+=u){if(!U(w=arguments[E]))throw E<l?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");p.push(w)}if(a)for(y=[],E=4;E<e;E+=u){if(!k(w=arguments[E]))throw E<l?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");y.push(w)}for(g=[],E=2;E<e;E+=u){if(!fn(w=arguments[E]))throw E<l?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(O=(E-2)/u,a){if(b=y[O]+(h-1)*p[O],h>0&&(b<0||b>=w.length))throw E<l?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((h-1)*ft(p[O])>=w.length)throw E<l?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");g.push(w)}if((b=ct(c,f,t,f,1,0,d,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");j=s||n[b];r?a?j(g,m,p,y,r[b]):j(g,m,p,r[b]):a?j(g,m,p,y):j(g,m,p);if(1===i)return g[f-1];if(0===i)return;return g.slice(o)}}function st(n,t){return n[t]}function pt(n,t){return n.get(t)}function yt(n,t,r){n[t]=r}function gt(n,t,r){n.set(r,t)}function dt(n,t,r,e){var o,i,u,a;return(u=n[0]).get&&u.set&&(o=pt),(a=n[1]).get&&a.set&&(i=gt),o||i?function(n,t,r,e,o){var i,u,a,f,c,l,s,p,y,g;if(!((y=t[0])<=0))for(c=(a=r[0])<0?(1-y)*a:0,l=(f=r[1])<0?(1-y)*f:0,s=n[0],p=n[1],i=e[0],u=e[1],g=0;g<y;g++)u(p,l,o(i(s,c))),c+=a,l+=f}(n,t,r,[o=o||st,i=i||yt],e):function(n,t,r,e){var o,i,u,a,f,c,l,s;if(!((l=t[0])<=0))for(u=(o=r[0])<0?(1-l)*o:0,a=(i=r[1])<0?(1-l)*i:0,f=n[0],c=n[1],s=0;s<l;s++)c[a]=e(f[u]),u+=o,a+=i}(n,t,r,e)}function mt(n,t,r,e,o){var i,u,a,f;return(a=n[0]).get&&a.set&&(i=pt),(f=n[1]).get&&f.set&&(u=gt),i||u?function(n,t,r,e,o,i){var u,a,f,c,l,s,p,y,g,d;if(!((g=t[0])<=0))for(l=e[0],s=e[1],f=r[0],c=r[1],p=n[0],y=n[1],u=o[0],a=o[1],d=0;d<g;d++)a(y,s,i(u(p,l))),l+=f,s+=c}(n,t,r,e,[i=i||st,u=u||yt],o):function(n,t,r,e,o){var i,u,a,f,c,l,s,p;if(!((s=t[0])<=0))for(a=e[0],f=e[1],i=r[0],u=r[1],c=n[0],l=n[1],p=0;p<s;p++)l[f]=o(c[a]),a+=i,f+=u}(n,t,r,e,o)}s(dt,"ndarray",mt);var vt=Wn(Kn(),{duplicates:!1});var bt=Kn();function ht(n){var t=typeof n;return"number"===t?function(n){var t=vt[n];return"string"==typeof t?t:null}(n)?n:null:"string"===t?function(n){var t=bt[n];return"number"==typeof t?t:null}(n):null}var wt="function"==typeof Uint32Array;var jt="function"==typeof Uint32Array?Uint32Array:null;var Et,Ot="function"==typeof Uint32Array?Uint32Array:void 0;Et=function(){var n,t,r;if("function"!=typeof jt)return!1;try{t=new jt(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(wt&&r instanceof Uint32Array||"[object Uint32Array]"===E(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?Ot:function(){throw new Error("not implemented")};var At=Et,_t="function"==typeof Float64Array;var Tt="function"==typeof Float64Array?Float64Array:null;var xt,St="function"==typeof Float64Array?Float64Array:void 0;xt=function(){var n,t,r;if("function"!=typeof Tt)return!1;try{t=new Tt([1,3.14,-3.14,NaN]),r=t,n=(_t&&r instanceof Float64Array||"[object Float64Array]"===E(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?St:function(){throw new Error("not implemented")};var Ft=xt,It="function"==typeof Uint8Array;var Ut="function"==typeof Uint8Array?Uint8Array:null;var Pt,Vt="function"==typeof Uint8Array?Uint8Array:void 0;Pt=function(){var n,t,r;if("function"!=typeof Ut)return!1;try{t=new Ut(t=[1,3.14,-3.14,256,257]),r=t,n=(It&&r instanceof Uint8Array||"[object Uint8Array]"===E(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?Vt:function(){throw new Error("not implemented")};var kt=Pt,Nt="function"==typeof Uint16Array;var Ht="function"==typeof Uint16Array?Uint16Array:null;var Bt,Lt="function"==typeof Uint16Array?Uint16Array:void 0;Bt=function(){var n,t,r;if("function"!=typeof Ht)return!1;try{t=new Ht(t=[1,3.14,-3.14,65536,65537]),r=t,n=(Nt&&r instanceof Uint16Array||"[object Uint16Array]"===E(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?Lt:function(){throw new Error("not implemented")};var Gt,Mt={uint16:Bt,uint8:kt};(Gt=new Mt.uint16(1))[0]=4660;var Rt=52===new Mt.uint8(Gt.buffer)[0],Wt=!0===Rt?1:0,Yt=new Ft(1),Ct=new At(Yt.buffer);function Xt(n){return Yt[0]=n,Ct[Wt]}var qt,Dt,zt=!0===Rt?1:0,Jt=new Ft(1),Kt=new At(Jt.buffer);!0===Rt?(qt=1,Dt=0):(qt=0,Dt=1);var Qt,Zt,$t={HIGH:qt,LOW:Dt},nr=new Ft(1),tr=new At(nr.buffer),rr=$t.HIGH,er=$t.LOW;function or(n,t){return tr[rr]=n,tr[er]=t,nr[0]}!0===Rt?(Qt=1,Zt=0):(Qt=0,Zt=1);var ir={HIGH:Qt,LOW:Zt},ur=new Ft(1),ar=new At(ur.buffer),fr=ir.HIGH,cr=ir.LOW;function lr(n,t){return ur[0]=t,n[0]=ar[fr],n[1]=ar[cr],n}var sr=2147483647,pr=2147483648,yr=Xt(22250738585072014e-324),gr=[0,0];function dr(n){var t,r,e,o;return 0===n||D(n)||function(n){return n===S||n===F}(n)?n:(t=(2147483648&(r=Xt(n)>>>0))>>>0,o=(r&=sr)<yr?or(t|696219795+(((Xt(o=0x40000000000000*n)&sr)>>>0)/3>>>0)>>>0,0):function(n,t){return Jt[0]=n,Kt[zt]=t>>>0,Jt[0]}(o=0,t|715094163+(r/3>>>0)>>>0),o*=function(n){return 0===n?1.87595182427177:1.87595182427177+n*(n*(1.6214297201053545+n*(.14599619288661245*n-.758397934778766))-1.8849797954337717)}(e=o*o*(o/n)),function(n,t){1===arguments.length?lr([0,0],n):lr(n,t)}(gr,o),gr[1]&pr?(gr[0]+=1,gr[1]&=~pr):gr[1]|=pr,o=or(4294967295&gr[0],3221225472&gr[1]),o+=o*(e=((e=n/(o*o))-o)/(o+o+e)))}var mr="function"==typeof Math.fround?Math.fround:null,vr="function"==typeof Float32Array;var br="function"==typeof Float32Array?Float32Array:null;var hr,wr="function"==typeof Float32Array?Float32Array:void 0;hr=function(){var n,t,r;if("function"!=typeof br)return!1;try{t=new br([1,3.14,-3.14,5e40]),r=t,n=(vr&&r instanceof Float32Array||"[object Float32Array]"===E(r))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===S}catch(t){n=!1}return n}()?wr:function(){throw new Error("not implemented")};var jr=new hr(1);var Er="function"==typeof mr?mr:function(n){return jr[0]=n,jr[0]};function Or(n){return Er(dr(Er(n)))}var Ar=[dr,dr,Or,dr,dr,dr,dr,dr,Or,dr,dr,Or,dr,dr,dr,dr,Or,dr,dr,Or,dr,dr,Or,dr,dr],_r=lt(dt,et,Ar,rt.nargs,rt.nin,rt.nout);function Tr(n,t,r,e,o,i,u){return _r(n,ht(t),r,e,ht(o),i,u)}var xr=lt(mt,et,Ar,rt.nargs+rt.nin+rt.nout,rt.nin,rt.nout);function Sr(n,t,r,e,o,i,u,a,f){return xr(n,ht(t),r,e,o,ht(i),u,a,f)}s(Tr,"ndarray",Sr),tt(rt,et,Tr,!1),tt(rt,et,Tr.ndarray,!0),n.default=Tr,n.ndarray=Sr,Object.defineProperty(n,"__esModule",{value:!0})}));
//# sourceMappingURL=browser.js.map
