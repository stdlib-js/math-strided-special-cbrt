// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).cbrt=t()}(this,(function(){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,r=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return n({},"x",{}),!0}catch(n){return!1}}()?r:function(n,t,r){var c,l,s,p;if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(a.call(n,t)||f.call(n,t)?(c=n.__proto__,n.__proto__=e,delete n[t],n[t]=r.value,n.__proto__=c):n[t]=r.value),s="get"in r,p="set"in r,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(n,t,r.get),p&&u&&u.call(n,t,r.set),n};var c=t;function l(n,t,r){c(n,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var s=Math.floor;function p(n){return s(n)===n}var y=4294967295;function g(n){return"number"==typeof n}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return m&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function h(n,t){return null!=n&&b.call(n,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=v()?function(n){var t,r,e;if(null==n)return d.call(n);r=n[w],t=h(n,w);try{n[w]=void 0}catch(t){return d.call(n)}return e=d.call(n),t?n[w]=r:delete n[w],e}:function(n){return d.call(n)},E=Number,O=E.prototype.toString;var A=v();function T(n){return"object"==typeof n&&(n instanceof E||(A?function(n){try{return O.call(n),!0}catch(n){return!1}}(n):"[object Number]"===j(n)))}function _(n){return g(n)||T(n)}l(_,"isPrimitive",g),l(_,"isObject",T);var x=Number.POSITIVE_INFINITY,S=E.NEGATIVE_INFINITY;function F(n){return n<x&&n>S&&p(n)}function I(n){return g(n)&&F(n)}function U(n){return T(n)&&F(n.valueOf())}function P(n){return I(n)||U(n)}function V(n){return I(n)&&n>=0}function k(n){return U(n)&&n.valueOf()>=0}function N(n){return V(n)||k(n)}function H(n){return Object.keys(Object(n))}l(P,"isPrimitive",I),l(P,"isObject",U),l(N,"isPrimitive",V),l(N,"isObject",k);var B,L=void 0!==Object.keys;function G(n){return"[object Arguments]"===j(n)}B=function(){return G(arguments)}();var M=B;function R(n){return"string"==typeof n}var W=String.prototype.valueOf;var Y=v();function C(n){return"object"==typeof n&&(n instanceof String||(Y?function(n){try{return W.call(n),!0}catch(n){return!1}}(n):"[object String]"===j(n)))}function X(n){return R(n)||C(n)}function q(n){return n!=n}function D(n){return g(n)&&q(n)}function z(n){return T(n)&&q(n.valueOf())}function J(n){return D(n)||z(n)}l(X,"isPrimitive",R),l(X,"isObject",C),l(J,"isPrimitive",D),l(J,"isObject",z);var K=Object.prototype.propertyIsEnumerable;var Q=!K.call("beep","0");function Z(n,t){var r;return null!=n&&(!(r=K.call(n,t))&&Q&&X(n)?!D(t=+t)&&I(t)&&t>=0&&t<n.length:r)}var $=Array.isArray?Array.isArray:function(n){return"[object Array]"===j(n)},nn=4294967295;var tn=M?G:function(n){return null!==n&&"object"==typeof n&&!$(n)&&"number"==typeof n.length&&p(n.length)&&n.length>=0&&n.length<=nn&&h(n,"callee")&&!Z(n,"callee")},rn=Array.prototype.slice;function en(n){return null!==n&&"object"==typeof n}l(en,"isObjectLikeArray",function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(t){var r,e;if(!$(t))return!1;if(0===(r=t.length))return!1;for(e=0;e<r;e++)if(!1===n(t[e]))return!1;return!0}}(en));var on=Z((function(){}),"prototype"),un=!Z({toString:null},"toString");function an(n){return"object"==typeof n&&null!==n&&"number"==typeof n.length&&p(n.length)&&n.length>=0&&n.length<=9007199254740991}function fn(n,t,r){var e,o;if(!an(n)&&!R(n))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+n+"`.");if(0===(e=n.length))return-1;if(3===arguments.length){if(!I(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=e)return-1;o=r}else(o=e+r)<0&&(o=0)}else o=0;if(J(t)){for(;o<e;o++)if(J(n[o]))return o}else for(;o<e;o++)if(n[o]===t)return o;return-1}var cn=/./;function ln(n){return"boolean"==typeof n}var sn=Boolean.prototype.toString;var pn=v();function yn(n){return"object"==typeof n&&(n instanceof Boolean||(pn?function(n){try{return sn.call(n),!0}catch(n){return!1}}(n):"[object Boolean]"===j(n)))}function gn(n){return ln(n)||yn(n)}function mn(){return new Function("return this;")()}l(gn,"isPrimitive",ln),l(gn,"isObject",yn);var vn="object"==typeof self?self:null,dn="object"==typeof window?window:null,bn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},hn="object"==typeof bn?bn:null;var wn=function(n){if(arguments.length){if(!ln(n))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+n+"`.");if(n)return mn()}if(vn)return vn;if(dn)return dn;if(hn)return hn;throw new Error("unexpected error. Unable to resolve global object.")}(),jn=wn.document&&wn.document.childNodes,En=Int8Array;function On(){return/^\s*function\s*([^(]*)/i}var An=/^\s*function\s*([^(]*)/i;function Tn(n){var t,r,e,o;if(("Object"===(r=j(n).slice(8,-1))||"Error"===r)&&n.constructor){if("string"==typeof(e=n.constructor).name)return e.name;if(t=An.exec(e.toString()))return t[1]}return en(o=n)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}l(On,"REGEXP",An);var _n="function"==typeof cn||"object"==typeof En||"function"==typeof jn?function(n){return Tn(n).toLowerCase()}:function(n){var t;return null===n?"null":"object"===(t=typeof n)?Tn(n).toLowerCase():t};function xn(n){return n.constructor&&n.constructor.prototype===n}var Sn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Fn="undefined"==typeof window?void 0:window;var In=function(){var n;if("undefined"===_n(Fn))return!1;for(n in Fn)try{-1===fn(Sn,n)&&h(Fn,n)&&null!==Fn[n]&&"object"===_n(Fn[n])&&xn(Fn[n])}catch(n){return!0}return!1}(),Un="undefined"!=typeof window;var Pn,Vn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Pn=L?function(){return 2!==(H(arguments)||"").length}(1,2)?function(n){return tn(n)?H(rn.call(n)):H(n)}:H:function(n){var t,r,e,o,i,u,a;if(o=[],tn(n)){for(a=0;a<n.length;a++)o.push(a.toString());return o}if("string"==typeof n){if(n.length>0&&!h(n,"0"))for(a=0;a<n.length;a++)o.push(a.toString())}else{if(!1==(e="function"==typeof n)&&!en(n))return o;r=on&&e}for(i in n)r&&"prototype"===i||!h(n,i)||o.push(String(i));if(un)for(t=function(n){if(!1===Un&&!In)return xn(n);try{return xn(n)}catch(n){return!1}}(n),a=0;a<Vn.length;a++)u=Vn[a],t&&"constructor"===u||!h(n,u)||o.push(String(u));return o};var kn=Pn;function Nn(n){return"function"===_n(n)}var Hn,Bn=Object.getPrototypeOf;Hn=Nn(Object.getPrototypeOf)?Bn:function(n){var t=function(n){return n.__proto__}(n);return t||null===t?t:"[object Function]"===j(n.constructor)?n.constructor.prototype:n instanceof Object?Object.prototype:null};var Ln=Hn;var Gn=Object.prototype;function Mn(n){var t;return!!function(n){return"object"==typeof n&&null!==n&&!$(n)}(n)&&(t=function(n){return null==n?null:(n=Object(n),Ln(n))}(n),!t||!h(n,"constructor")&&h(t,"constructor")&&Nn(t.constructor)&&"[object Function]"===j(t.constructor)&&h(t,"isPrototypeOf")&&Nn(t.isPrototypeOf)&&(t===Gn||function(n){var t;for(t in n)if(!h(n,t))return!1;return!0}(n)))}function Rn(n,t){var r,e,o,i,u,a,f,c=!0;if(!en(n))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+n+"`.");if(arguments.length>1){if(!Mn(t))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+t+"`.");if(h(t,"duplicates")&&!ln(c=t.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+c+"`.")}if(e=(r=kn(n)).length,u={},c)for(f=0;f<e;f++)h(u,i=n[o=r[f]])?(a=u[i],$(a)?u[i].push(o):u[i]=[a,o]):u[i]=o;else for(f=0;f<e;f++)u[n[o=r[f]]]=o;return u}var Wn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Yn(){return Wn.slice()}var Cn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Xn(){return Cn.slice()}function qn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Dn(n,t,r){c(n,t,{configurable:!1,enumerable:!0,writable:!1,value:r})}l(Xn,"enum",qn),function(n,t){var r,e,o;for(r=kn(t),o=0;o<r.length;o++)Dn(n,e=r[o],t[e])}(Xn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var zn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Jn(){return{bool:zn.bool,int8:zn.int8,uint8:zn.uint8,uint8c:zn.uint8c,int16:zn.int16,uint16:zn.uint16,int32:zn.int32,uint32:zn.uint32,int64:zn.int64,uint64:zn.uint64,float32:zn.float32,float64:zn.float64,complex64:zn.complex64,complex128:zn.complex128,binary:zn.binary,generic:zn.generic,notype:zn.notype,userdefined_type:zn.userdefined_type}}l(Yn,"enum",Jn),function(n,t){var r,e,o;for(r=kn(t),o=0;o<r.length;o++)Dn(n,e=r[o],t[e])}(Yn,Jn());var Kn=Rn(Jn(),{duplicates:!1});var Qn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Zn(n){var t=typeof n;return"string"===t?null===function(n){var t=Qn[n];return"number"==typeof t?t:null}(n)?null:n:"number"===t?function(n){var t=Kn[n];return"string"==typeof t?t:null}(n):null}function $n(n,t,r){var e,o,i,u,a,f,c,l,s;if(!("object"==typeof(s=n)&&null!==s&&"number"==typeof s.length&&p(s.length)&&s.length>=0&&s.length<=y))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+n+"`.");if(!V(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(!V(r))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+r+"`.");if(0===(e=n.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(e%(a=t+r)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(o=[],i=[],f=2*a,l=2*t,c=0;c<=f;c++)0===c?c===l?i.push("() => ("):i.push("("):c===f?c===l?i.push(") => ()"):i.push(")"):c===l?i.push(") => ("):c%2==1?i.push(""):i.push(", ");for(c=0;c<e;c++)null===(u=Zn(n[c]))&&(u=n[c]),i[2*(l=c%a)+1]=u,l===a-1&&o.push(i.join(""));return o}function nt(n,t,r,e){return l(r,"nargs",e?n.nargs+n.nin+n.nout:n.nargs),l(r,"nin",n.nin),l(r,"nout",n.nout),function(n,t,r){c(n,t,{configurable:!1,enumerable:!1,get:r})}(r,"types",(function(){return $n(t,n.nin,n.nout)})),r}var tt={nargs:7,nin:1,nout:1},rt=[11,11,11,15,10,10,10,11,10,15,15,15,6,11,6,15,4,10,4,11,4,15,1,10,1,11,1,15,7,11,7,15,5,10,5,11,5,15,2,10,2,11,2,15,3,10,3,11,3,15];function et(n){return I(n)&&n>0}function ot(n){return U(n)&&n.valueOf()>0}function it(n){return et(n)||ot(n)}l(it,"isPrimitive",et),l(it,"isObject",ot);var ut=function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(t){var r,e;if(!function(n){return null!=n&&"function"!=typeof n&&"number"==typeof n.length&&p(n.length)&&n.length>=0&&n.length<=y}(t))return!1;if(0===(r=t.length))return!1;for(e=0;e<r;e++)if(!1===n(t[e]))return!1;return!0}}(Nn);function at(n){return Math.abs(n)}function ft(n,t,r,e,o,i,u,a,f){var c,l,s,p;for(c=i,s=0;s<n;s++){for(l=f,p=0;p<t&&r[c+p*o]===u[l];p++)l+=a;if(p===t)return s;c+=e}return-1}function ct(n,t,r,e,o,i){var u,a,f,c,l,s;if(Nn(n))s=n;else if(!ut(n))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+n+"`.");if(!an(t))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+t+"`.");if(!an(r)&&null!==r)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+r+"`.");if(!it(e))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+e+"`.");if(!V(o))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+o+"`.");if(!V(i))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+i+"`.");if(0===(f=o+i))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(s){if(!I(c=t.length/f))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(c=n.length,t.length!==c*f)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(r&&r.length!==c)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*f+1===e)a=!1;else{if(4*f+1!==e)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");a=!0}return l=o*(u=a?4:3)+1,function(){var p,y,g,m,v,d,b,h,w,j,E,O;if((d=arguments.length)!==e){if(d<e)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!I(h=arguments[0]))throw new TypeError("invalid argument. First argument must be an integer.");for(v=[h],m=[],E=1;E<e;E+=u)m.push(arguments[E]);for(p=[],E=3;E<e;E+=u){if(!I(w=arguments[E]))throw E<l?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");p.push(w)}if(a)for(y=[],E=4;E<e;E+=u){if(!V(w=arguments[E]))throw E<l?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");y.push(w)}for(g=[],E=2;E<e;E+=u){if(!an(w=arguments[E]))throw E<l?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(O=(E-2)/u,a){if(b=y[O]+(h-1)*p[O],h>0&&(b<0||b>=w.length))throw E<l?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((h-1)*at(p[O])>=w.length)throw E<l?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");g.push(w)}if((b=ft(c,f,t,f,1,0,m,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");j=s||n[b];r?a?j(g,v,p,y,r[b]):j(g,v,p,r[b]):a?j(g,v,p,y):j(g,v,p);if(1===i)return g[f-1];if(0===i)return;return g.slice(o)}}function lt(n,t){return n[t]}function st(n,t){return n.get(t)}function pt(n,t,r){n[t]=r}function yt(n,t,r){n.set(r,t)}function gt(n,t,r,e){var o,i,u,a;return(u=n[0]).get&&u.set&&(o=st),(a=n[1]).get&&a.set&&(i=yt),o||i?function(n,t,r,e,o){var i,u,a,f,c,l,s,p,y,g;if(!((y=t[0])<=0))for(c=(a=r[0])<0?(1-y)*a:0,l=(f=r[1])<0?(1-y)*f:0,s=n[0],p=n[1],i=e[0],u=e[1],g=0;g<y;g++)u(p,l,o(i(s,c))),c+=a,l+=f}(n,t,r,[o=o||lt,i=i||pt],e):function(n,t,r,e){var o,i,u,a,f,c,l,s;if(!((l=t[0])<=0))for(u=(o=r[0])<0?(1-l)*o:0,a=(i=r[1])<0?(1-l)*i:0,f=n[0],c=n[1],s=0;s<l;s++)c[a]=e(f[u]),u+=o,a+=i}(n,t,r,e)}function mt(n,t,r,e,o){var i,u,a,f;return(a=n[0]).get&&a.set&&(i=st),(f=n[1]).get&&f.set&&(u=yt),i||u?function(n,t,r,e,o,i){var u,a,f,c,l,s,p,y,g,m;if(!((g=t[0])<=0))for(l=e[0],s=e[1],f=r[0],c=r[1],p=n[0],y=n[1],u=o[0],a=o[1],m=0;m<g;m++)a(y,s,i(u(p,l))),l+=f,s+=c}(n,t,r,e,[i=i||lt,u=u||pt],o):function(n,t,r,e,o){var i,u,a,f,c,l,s,p;if(!((s=t[0])<=0))for(a=e[0],f=e[1],i=r[0],u=r[1],c=n[0],l=n[1],p=0;p<s;p++)l[f]=o(c[a]),a+=i,f+=u}(n,t,r,e,o)}l(gt,"ndarray",mt);var vt=Rn(Jn(),{duplicates:!1});var dt=Jn();function bt(n){var t=typeof n;return"number"===t?function(n){var t=vt[n];return"string"==typeof t?t:null}(n)?n:null:"string"===t?function(n){var t=dt[n];return"number"==typeof t?t:null}(n):null}var ht="function"==typeof Uint32Array;var wt="function"==typeof Uint32Array?Uint32Array:null;var jt,Et="function"==typeof Uint32Array?Uint32Array:void 0;jt=function(){var n,t,r;if("function"!=typeof wt)return!1;try{t=new wt(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(ht&&r instanceof Uint32Array||"[object Uint32Array]"===j(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?Et:function(){throw new Error("not implemented")};var Ot=jt,At="function"==typeof Float64Array;var Tt="function"==typeof Float64Array?Float64Array:null;var _t,xt="function"==typeof Float64Array?Float64Array:void 0;_t=function(){var n,t,r;if("function"!=typeof Tt)return!1;try{t=new Tt([1,3.14,-3.14,NaN]),r=t,n=(At&&r instanceof Float64Array||"[object Float64Array]"===j(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?xt:function(){throw new Error("not implemented")};var St=_t,Ft="function"==typeof Uint8Array;var It="function"==typeof Uint8Array?Uint8Array:null;var Ut,Pt="function"==typeof Uint8Array?Uint8Array:void 0;Ut=function(){var n,t,r;if("function"!=typeof It)return!1;try{t=new It(t=[1,3.14,-3.14,256,257]),r=t,n=(Ft&&r instanceof Uint8Array||"[object Uint8Array]"===j(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?Pt:function(){throw new Error("not implemented")};var Vt=Ut,kt="function"==typeof Uint16Array;var Nt="function"==typeof Uint16Array?Uint16Array:null;var Ht,Bt="function"==typeof Uint16Array?Uint16Array:void 0;Ht=function(){var n,t,r;if("function"!=typeof Nt)return!1;try{t=new Nt(t=[1,3.14,-3.14,65536,65537]),r=t,n=(kt&&r instanceof Uint16Array||"[object Uint16Array]"===j(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?Bt:function(){throw new Error("not implemented")};var Lt,Gt={uint16:Ht,uint8:Vt};(Lt=new Gt.uint16(1))[0]=4660;var Mt=52===new Gt.uint8(Lt.buffer)[0],Rt=!0===Mt?1:0,Wt=new St(1),Yt=new Ot(Wt.buffer);function Ct(n){return Wt[0]=n,Yt[Rt]}var Xt,qt,Dt=!0===Mt?1:0,zt=new St(1),Jt=new Ot(zt.buffer);!0===Mt?(Xt=1,qt=0):(Xt=0,qt=1);var Kt,Qt,Zt={HIGH:Xt,LOW:qt},$t=new St(1),nr=new Ot($t.buffer),tr=Zt.HIGH,rr=Zt.LOW;function er(n,t){return nr[tr]=n,nr[rr]=t,$t[0]}!0===Mt?(Kt=1,Qt=0):(Kt=0,Qt=1);var or={HIGH:Kt,LOW:Qt},ir=new St(1),ur=new Ot(ir.buffer),ar=or.HIGH,fr=or.LOW;function cr(n,t){return ir[0]=t,n[0]=ur[ar],n[1]=ur[fr],n}var lr=2147483647,sr=2147483648,pr=Ct(22250738585072014e-324),yr=[0,0];function gr(n){var t,r,e,o;return 0===n||q(n)||function(n){return n===x||n===S}(n)?n:(t=(2147483648&(r=Ct(n)>>>0))>>>0,o=(r&=lr)<pr?er(t|696219795+(((Ct(o=0x40000000000000*n)&lr)>>>0)/3>>>0)>>>0,0):function(n,t){return zt[0]=n,Jt[Dt]=t>>>0,zt[0]}(o=0,t|715094163+(r/3>>>0)>>>0),o*=function(n){return 0===n?1.87595182427177:1.87595182427177+n*(n*(1.6214297201053545+n*(.14599619288661245*n-.758397934778766))-1.8849797954337717)}(e=o*o*(o/n)),function(n,t){1===arguments.length?cr([0,0],n):cr(n,t)}(yr,o),yr[1]&sr?(yr[0]+=1,yr[1]&=~sr):yr[1]|=sr,o=er(4294967295&yr[0],3221225472&yr[1]),o+=o*(e=((e=n/(o*o))-o)/(o+o+e)))}var mr="function"==typeof Math.fround?Math.fround:null,vr="function"==typeof Float32Array;var dr="function"==typeof Float32Array?Float32Array:null;var br,hr="function"==typeof Float32Array?Float32Array:void 0;br=function(){var n,t,r;if("function"!=typeof dr)return!1;try{t=new dr([1,3.14,-3.14,5e40]),r=t,n=(vr&&r instanceof Float32Array||"[object Float32Array]"===j(r))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===x}catch(t){n=!1}return n}()?hr:function(){throw new Error("not implemented")};var wr=new br(1);var jr="function"==typeof mr?mr:function(n){return wr[0]=n,wr[0]};function Er(n){return jr(gr(jr(n)))}var Or=[gr,gr,Er,gr,gr,gr,gr,gr,Er,gr,gr,Er,gr,gr,gr,gr,Er,gr,gr,Er,gr,gr,Er,gr,gr],Ar=ct(gt,rt,Or,tt.nargs,tt.nin,tt.nout);function Tr(n,t,r,e,o,i,u){return Ar(n,bt(t),r,e,bt(o),i,u)}var _r=ct(mt,rt,Or,tt.nargs+tt.nin+tt.nout,tt.nin,tt.nout);return l(Tr,"ndarray",(function(n,t,r,e,o,i,u,a,f){return _r(n,bt(t),r,e,o,bt(i),u,a,f)})),nt(tt,rt,Tr,!1),nt(tt,rt,Tr.ndarray,!0),Tr}));
//# sourceMappingURL=index.js.map
