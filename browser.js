// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).cbrt=n()}(this,(function(){"use strict";function r(r){var n=r.default;if("function"==typeof n){var t=function(){return n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return n({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,i=Object.prototype,o=i.toString,u=i.__defineGetter__,a=i.__defineSetter__,f=i.__lookupGetter__,c=i.__lookupSetter__;var l=function(r,n,t){var e,l,s,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=i,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),s="get"in t,v="set"in t,l&&(s||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,n,t.get),v&&a&&a.call(r,n,t.set),r},s=e,v=l,p=t()?s:v,y=p;var m=function(r,n,t){y(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},g=m,d=p;var b=function(r,n,t){d(r,n,{configurable:!1,enumerable:!1,get:t})},h=b,w=Math.floor;var j=function(r){return w(r)===r},O=j;var E=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&O(r.length)&&r.length>=0&&r.length<=4294967295};var A=function(r){return"number"==typeof r};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var T=function(){return _&&"symbol"==typeof Symbol.toStringTag},P=Object.prototype.toString,S=P;var F=function(r){return S.call(r)},x=Object.prototype.hasOwnProperty;var I=function(r,n){return null!=r&&x.call(r,n)},U="function"==typeof Symbol?Symbol.toStringTag:"",V=I,k=U,N=P;var H=F,B=function(r){var n,t,e;if(null==r)return N.call(r);t=r[k],n=V(r,k);try{r[k]=void 0}catch(n){return N.call(r)}return e=N.call(r),n?r[k]=t:delete r[k],e},G=T()?B:H,L=Number,M=L.prototype.toString;var R=G,W=L,X=function(r){try{return M.call(r),!0}catch(r){return!1}},Y=T();var C=function(r){return"object"==typeof r&&(r instanceof W||(Y?X(r):"[object Number]"===R(r)))},D=A,q=C;var z=g,J=function(r){return D(r)||q(r)},K=C;z(J,"isPrimitive",A),z(J,"isObject",K);var Q=J,Z=Number.POSITIVE_INFINITY,$=L.NEGATIVE_INFINITY,rr=Z,nr=$,tr=j;var er=function(r){return r<rr&&r>nr&&tr(r)},ir=Q.isPrimitive,or=er;var ur=function(r){return ir(r)&&or(r)},ar=Q.isObject,fr=er;var cr=function(r){return ar(r)&&fr(r.valueOf())},lr=ur,sr=cr;var vr=g,pr=function(r){return lr(r)||sr(r)},yr=cr;vr(pr,"isPrimitive",ur),vr(pr,"isObject",yr);var mr=pr,gr=mr.isPrimitive;var dr=function(r){return gr(r)&&r>=0},br=mr.isObject;var hr=function(r){return br(r)&&r.valueOf()>=0},wr=dr,jr=hr;var Or=g,Er=function(r){return wr(r)||jr(r)},Ar=hr;Or(Er,"isPrimitive",dr),Or(Er,"isObject",Ar);var _r=Er;var Tr=function(r){return Object.keys(Object(r))},Pr=Tr;var Sr=function(){return function(){return 2!==(Pr(arguments)||"").length}(1,2)},Fr=void 0!==Object.keys,xr=G;var Ir,Ur=function(r){return"[object Arguments]"===xr(r)},Vr=Ur;Ir=function(){return Vr(arguments)}();var kr=Ir;var Nr=function(r){return"string"==typeof r},Hr=String.prototype.valueOf;var Br=G,Gr=function(r){try{return Hr.call(r),!0}catch(r){return!1}},Lr=T();var Mr=function(r){return"object"==typeof r&&(r instanceof String||(Lr?Gr(r):"[object String]"===Br(r)))},Rr=Nr,Wr=Mr;var Xr=g,Yr=function(r){return Rr(r)||Wr(r)},Cr=Mr;Xr(Yr,"isPrimitive",Nr),Xr(Yr,"isObject",Cr);var Dr=Yr;var qr=function(r){return r!=r},zr=Q.isPrimitive,Jr=qr;var Kr=function(r){return zr(r)&&Jr(r)},Qr=Q.isObject,Zr=qr;var $r=function(r){return Qr(r)&&Zr(r.valueOf())},rn=Kr,nn=$r;var tn=g,en=function(r){return rn(r)||nn(r)},on=$r;tn(en,"isPrimitive",Kr),tn(en,"isObject",on);var un,an=en,fn=Object.prototype.propertyIsEnumerable;un=!fn.call("beep","0");var cn=Dr,ln=an.isPrimitive,sn=mr.isPrimitive,vn=fn,pn=un;var yn=function(r,n){var t;return null!=r&&(!(t=vn.call(r,n))&&pn&&cn(r)?!ln(n=+n)&&sn(n)&&n>=0&&n<r.length:t)},mn=yn,gn=G;var dn=Array.isArray?Array.isArray:function(r){return"[object Array]"===gn(r)},bn=I,hn=mn,wn=dn,jn=j;var On=kr?Ur:function(r){return null!==r&&"object"==typeof r&&!wn(r)&&"number"==typeof r.length&&jn(r.length)&&r.length>=0&&r.length<=4294967295&&bn(r,"callee")&&!hn(r,"callee")},En=On,An=Tr,_n=Array.prototype.slice;var Tn=function(r){return En(r)?An(_n.call(r)):An(r)},Pn=dn;var Sn=function(r){return null!==r&&"object"==typeof r};g(Sn,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!Pn(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(Sn));var Fn=Sn;var xn=mn((function(){}),"prototype"),In=!mn({toString:null},"toString"),Un=j;var Vn=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Un(r.length)&&r.length>=0&&r.length<=9007199254740991},kn=an,Nn=Vn,Hn=Dr.isPrimitive,Bn=mr.isPrimitive;var Gn=function(r,n,t){var e,i;if(!Nn(r)&&!Hn(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(e=r.length))return-1;if(3===arguments.length){if(!Bn(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=e)return-1;i=t}else(i=e+t)<0&&(i=0)}else i=0;if(kn(n)){for(;i<e;i++)if(kn(r[i]))return i}else for(;i<e;i++)if(r[i]===n)return i;return-1},Ln=Gn,Mn=/./;var Rn=function(r){return"boolean"==typeof r},Wn=Boolean.prototype.toString;var Xn=G,Yn=function(r){try{return Wn.call(r),!0}catch(r){return!1}},Cn=T();var Dn=function(r){return"object"==typeof r&&(r instanceof Boolean||(Cn?Yn(r):"[object Boolean]"===Xn(r)))},qn=Rn,zn=Dn;var Jn=g,Kn=function(r){return qn(r)||zn(r)},Qn=Dn;Jn(Kn,"isPrimitive",Rn),Jn(Kn,"isObject",Qn);var Zn=Kn;var $n=function(){return new Function("return this;")()},rt="object"==typeof self?self:null,nt="object"==typeof window?window:null,tt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},et="object"==typeof tt?tt:null;module.exports=et;var it=Zn.isPrimitive,ot=$n,ut=rt,at=nt,ft=r(Object.freeze({__proto__:null}));var ct=function(r){if(arguments.length){if(!it(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ot()}if(ut)return ut;if(at)return at;if(ft)return ft;throw new Error("unexpected error. Unable to resolve global object.")},lt=ct(),st=lt.document&&lt.document.childNodes,vt=Int8Array,pt=Mn,yt=st,mt=vt;var gt=function(){return"function"==typeof pt||"object"==typeof mt||"function"==typeof yt};var dt=function(){return/^\s*function\s*([^(]*)/i},bt=dt;g(bt,"REGEXP",dt());var ht=Fn;var wt=G,jt=bt.REGEXP,Ot=function(r){return ht(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Et=function(r){var n,t,e;if(("Object"===(t=wt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=jt.exec(e.toString()))return n[1]}return Ot(r)?"Buffer":t},At=Et;var _t=Et;var Tt=function(r){var n;return null===r?"null":"object"===(n=typeof r)?At(r).toLowerCase():n},Pt=function(r){return _t(r).toLowerCase()},St=gt()?Pt:Tt;var Ft,xt=function(r){return r.constructor&&r.constructor.prototype===r},It="undefined"==typeof window?void 0:window,Ut=I,Vt=Ln,kt=St,Nt=xt,Ht=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Bt=It;Ft=function(){var r;if("undefined"===kt(Bt))return!1;for(r in Bt)try{-1===Vt(Ht,r)&&Ut(Bt,r)&&null!==Bt[r]&&"object"===kt(Bt[r])&&Nt(Bt[r])}catch(r){return!0}return!1}();var Gt="undefined"!=typeof window,Lt=Ft,Mt=xt,Rt=Gt;var Wt=Fn,Xt=I,Yt=On,Ct=xn,Dt=In,qt=function(r){if(!1===Rt&&!Lt)return Mt(r);try{return Mt(r)}catch(r){return!1}},zt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Jt=Tr,Kt=Tn,Qt=function(r){var n,t,e,i,o,u,a;if(i=[],Yt(r)){for(a=0;a<r.length;a++)i.push(a.toString());return i}if("string"==typeof r){if(r.length>0&&!Xt(r,"0"))for(a=0;a<r.length;a++)i.push(a.toString())}else{if(!1===(e="function"==typeof r)&&!Wt(r))return i;t=Ct&&e}for(o in r)t&&"prototype"===o||!Xt(r,o)||i.push(String(o));if(Dt)for(n=qt(r),a=0;a<zt.length;a++)u=zt[a],n&&"constructor"===u||!Xt(r,u)||i.push(String(u));return i},Zt=Fr?Sr()?Kt:Jt:Qt,$t=dn;var re=function(r){return"object"==typeof r&&null!==r&&!$t(r)},ne=St;var te=function(r){return"function"===ne(r)},ee=Object.getPrototypeOf;var ie=function(r){return r.__proto__},oe=G,ue=ie;var ae=function(r){var n=ue(r);return n||null===n?n:"[object Function]"===oe(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},fe=ee,ce=ae,le=te(Object.getPrototypeOf)?fe:ce;var se=re,ve=te,pe=function(r){return null==r?null:(r=Object(r),le(r))},ye=I,me=G,ge=Object.prototype;var de=function(r){var n;return!!se(r)&&(!(n=pe(r))||!ye(r,"constructor")&&ye(n,"constructor")&&ve(n.constructor)&&"[object Function]"===me(n.constructor)&&ye(n,"isPrototypeOf")&&ve(n.isPrototypeOf)&&(n===ge||function(r){var n;for(n in r)if(!ye(r,n))return!1;return!0}(r)))},be=Zt,he=dn,we=de,je=Fn,Oe=Zn.isPrimitive,Ee=I;var Ae=function(r,n){var t,e,i,o,u,a,f,c=!0;if(!je(r))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+r+"`.");if(arguments.length>1){if(!we(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(Ee(n,"duplicates")&&(c=n.duplicates,!Oe(c)))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+c+"`.")}if(e=(t=be(r)).length,u={},c)for(f=0;f<e;f++)o=r[i=t[f]],Ee(u,o)?(a=u[o],he(a)?u[o].push(i):u[o]=[a,i]):u[o]=i;else for(f=0;f<e;f++)u[r[i=t[f]]]=i;return u},_e=Ae,Te=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Pe=function(){return Te.slice()},Se=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Fe=p;var xe=function(r,n,t){Fe(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})},Ie=xe,Ue=Ie,Ve=Zt;var ke=function(r,n){var t,e,i;for(t=Ve(n),i=0;i<t.length;i++)e=t[i],Ue(r,e,n[e]);return r},Ne=function(){return Se.slice()},He=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},Be=ke;g(Ne,"enum",He),Be(Ne,He());var Ge=Ne,Le=(0,Ge.enum)();var Me=Ie,Re=Zt;var We=function(r,n){var t,e,i;for(t=Re(n),i=0;i<t.length;i++)e=t[i],Me(r,e,n[e]);return r},Xe=Pe,Ye=function(){return{bool:Le.bool,int8:Le.int8,uint8:Le.uint8,uint8c:Le.uint8c,int16:Le.int16,uint16:Le.uint16,int32:Le.int32,uint32:Le.uint32,int64:Le.int64,uint64:Le.uint64,float32:Le.float32,float64:Le.float64,complex64:Le.complex64,complex128:Le.complex128,binary:Le.binary,generic:Le.generic,notype:Le.notype,userdefined_type:Le.userdefined_type}},Ce=We;g(Xe,"enum",Ye),Ce(Xe,Ye());var De=Xe,qe=_e((0,De.enum)(),{duplicates:!1});var ze=function(r){var n=qe[r];return"string"==typeof n?n:null},Je=(0,Ge.enum)();var Ke=ze,Qe=function(r){var n=Je[r];return"number"==typeof n?n:null};var Ze=E,$e=_r.isPrimitive,ri=function(r){var n=typeof r;return"string"===n?null===Qe(r)?null:r:"number"===n?Ke(r):null};var ni=function(r,n,t){var e,i,o,u,a,f,c,l;if(!Ze(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(!$e(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(!$e(t))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+t+"`.");if(0===(e=r.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(e%(a=n+t)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(i=[],o=[],f=2*a,l=2*n,c=0;c<=f;c++)0===c?c===l?o.push("() => ("):o.push("("):c===f?c===l?o.push(") => ()"):o.push(")"):c===l?o.push(") => ("):c%2==1?o.push(""):o.push(", ");for(c=0;c<e;c++)null===(u=ri(r[c]))&&(u=r[c]),o[2*(l=c%a)+1]=u,l===a-1&&i.push(o.join(""));return i},ti=g,ei=h,ii=ni;var oi=function(r,n,t,e){return ti(t,"nargs",e?r.nargs+r.nin+r.nout:r.nargs),ti(t,"nin",r.nin),ti(t,"nout",r.nout),ei(t,"types",(function(){return ii(n,r.nin,r.nout)})),t},ui=oi,ai={nargs:7,nin:1,nout:1},fi=[11,11,11,15,10,10,10,11,10,15,15,15,6,11,6,15,4,10,4,11,4,15,1,10,1,11,1,15,7,11,7,15,5,10,5,11,5,15,2,10,2,11,2,15,3,10,3,11,3,15],ci=mr.isPrimitive;var li=function(r){return ci(r)&&r>0},si=mr.isObject;var vi=function(r){return si(r)&&r.valueOf()>0},pi=li,yi=vi;var mi=g,gi=function(r){return pi(r)||yi(r)},di=vi;mi(gi,"isPrimitive",li),mi(gi,"isObject",di);var bi=gi,hi=j;var wi=function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&hi(r.length)&&r.length>=0&&r.length<=4294967295};var ji=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!wi(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(te);var Oi=_r.isPrimitive,Ei=bi,Ai=mr.isPrimitive,_i=ji,Ti=te,Pi=Vn,Si=function(r){return Math.abs(r)},Fi=function(r,n,t,e,i,o,u,a,f){var c,l,s,v;for(c=o,s=0;s<r;s++){for(l=f,v=0;v<n&&t[c+v*i]===u[l];v++)l+=a;if(v===n)return s;c+=e}return-1};var xi=function(r,n,t,e,i,o){var u,a,f,c,l,s;if(Ti(r))s=r;else if(!_i(r))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+r+"`.");if(!Pi(n))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+n+"`.");if(!Pi(t)&&null!==t)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+t+"`.");if(!Ei(e))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+e+"`.");if(!Oi(i))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+i+"`.");if(!Oi(o))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+o+"`.");if(0===(f=i+o))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(s){if(c=n.length/f,!Ai(c))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(c=r.length,n.length!==c*f)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(t&&t.length!==c)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*f+1===e)a=!1;else{if(4*f+1!==e)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");a=!0}return l=i*(u=a?4:3)+1,function(){var v,p,y,m,g,d,b,h,w,j,O,E;if((d=arguments.length)!==e){if(d<e)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!Ai(h=arguments[0]))throw new TypeError("invalid argument. First argument must be an integer.");for(g=[h],m=[],O=1;O<e;O+=u)m.push(arguments[O]);for(v=[],O=3;O<e;O+=u){if(!Ai(w=arguments[O]))throw O<l?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");v.push(w)}if(a)for(p=[],O=4;O<e;O+=u){if(!Oi(w=arguments[O]))throw O<l?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");p.push(w)}for(y=[],O=2;O<e;O+=u){if(!Pi(w=arguments[O]))throw O<l?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(E=(O-2)/u,a){if(b=p[E]+(h-1)*v[E],h>0&&(b<0||b>=w.length))throw O<l?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((h-1)*Si(v[E])>=w.length)throw O<l?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");y.push(w)}if((b=Fi(c,f,n,f,1,0,m,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");j=s||r[b];t?a?j(y,g,v,p,t[b]):j(y,g,v,t[b]):a?j(y,g,v,p):j(y,g,v);if(1===o)return y[f-1];if(0===o)return;return y.slice(i)}},Ii=xi;var Ui=function(r,n,t,e){var i,o,u,a,f,c,l,s;if(!((l=n[0])<=0))for(u=(i=t[0])<0?(1-l)*i:0,a=(o=t[1])<0?(1-l)*o:0,f=r[0],c=r[1],s=0;s<l;s++)c[a]=e(f[u]),u+=i,a+=o};var Vi=function(r,n,t,e,i){var o,u,a,f,c,l,s,v,p,y;if(!((p=n[0])<=0))for(c=(a=t[0])<0?(1-p)*a:0,l=(f=t[1])<0?(1-p)*f:0,s=r[0],v=r[1],o=e[0],u=e[1],y=0;y<p;y++)u(v,l,i(o(s,c))),c+=a,l+=f};var ki=function(r,n){return r[n]};var Ni=function(r,n){return r.get(n)};var Hi=function(r,n,t){r[n]=t};var Bi=function(r,n,t){r.set(t,n)},Gi=Ui,Li=Vi,Mi=ki,Ri=Ni,Wi=Hi,Xi=Bi;var Yi=function(r,n,t,e){var i,o,u,a;return(u=r[0]).get&&u.set&&(i=Ri),(a=r[1]).get&&a.set&&(o=Xi),i||o?Li(r,n,t,[i=i||Mi,o=o||Wi],e):Gi(r,n,t,e)};var Ci=function(r,n,t,e,i){var o,u,a,f,c,l,s,v;if(!((s=n[0])<=0))for(a=e[0],f=e[1],o=t[0],u=t[1],c=r[0],l=r[1],v=0;v<s;v++)l[f]=i(c[a]),a+=o,f+=u};var Di=function(r,n,t,e,i,o){var u,a,f,c,l,s,v,p,y,m;if(!((y=n[0])<=0))for(l=e[0],s=e[1],f=t[0],c=t[1],v=r[0],p=r[1],u=i[0],a=i[1],m=0;m<y;m++)a(p,s,o(u(v,l))),l+=f,s+=c},qi=Ci,zi=Di,Ji=ki,Ki=Ni,Qi=Hi,Zi=Bi;var $i=function(r,n,t,e,i){var o,u,a,f;return(a=r[0]).get&&a.set&&(o=Ki),(f=r[1]).get&&f.set&&(u=Zi),o||u?zi(r,n,t,e,[o=o||Ji,u=u||Qi],i):qi(r,n,t,e,i)},ro=Yi;g(ro,"ndarray",$i);var no=ro,to=_e((0,De.enum)(),{duplicates:!1});var eo=function(r){var n=to[r];return"string"==typeof n?n:null},io=(0,De.enum)();var oo=eo,uo=function(r){var n=io[r];return"number"==typeof n?n:null};var ao=function(r){var n=typeof r;return"number"===n?oo(r)?r:null:"string"===n?uo(r):null},fo=G,co="function"==typeof Uint32Array;var lo="function"==typeof Uint32Array?Uint32Array:null,so=function(r){return co&&r instanceof Uint32Array||"[object Uint32Array]"===fo(r)},vo=lo;var po=function(){var r,n;if("function"!=typeof vo)return!1;try{n=new vo(n=[1,3.14,-3.14,4294967296,4294967297]),r=so(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var yo="function"==typeof Uint32Array?Uint32Array:void 0,mo=function(){throw new Error("not implemented")},go=po()?yo:mo,bo=G,ho="function"==typeof Float64Array;var wo="function"==typeof Float64Array?Float64Array:null,jo=function(r){return ho&&r instanceof Float64Array||"[object Float64Array]"===bo(r)},Oo=wo;var Eo=function(){var r,n;if("function"!=typeof Oo)return!1;try{n=new Oo([1,3.14,-3.14,NaN]),r=jo(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var Ao="function"==typeof Float64Array?Float64Array:void 0,_o=function(){throw new Error("not implemented")},To=Eo()?Ao:_o,Po=G,So="function"==typeof Uint8Array;var Fo="function"==typeof Uint8Array?Uint8Array:null,xo=function(r){return So&&r instanceof Uint8Array||"[object Uint8Array]"===Po(r)},Io=Fo;var Uo=function(){var r,n;if("function"!=typeof Io)return!1;try{n=new Io(n=[1,3.14,-3.14,256,257]),r=xo(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Vo="function"==typeof Uint8Array?Uint8Array:void 0,ko=function(){throw new Error("not implemented")},No=Uo()?Vo:ko,Ho=G,Bo="function"==typeof Uint16Array;var Go="function"==typeof Uint16Array?Uint16Array:null,Lo=function(r){return Bo&&r instanceof Uint16Array||"[object Uint16Array]"===Ho(r)},Mo=Go;var Ro=function(){var r,n;if("function"!=typeof Mo)return!1;try{n=new Mo(n=[1,3.14,-3.14,65536,65537]),r=Lo(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Wo,Xo="function"==typeof Uint16Array?Uint16Array:void 0,Yo=function(){throw new Error("not implemented")},Co={uint16:Ro()?Xo:Yo,uint8:No};(Wo=new Co.uint16(1))[0]=4660;var Do=52===new Co.uint8(Wo.buffer)[0],qo=go,zo=!0===Do?1:0,Jo=new To(1),Ko=new qo(Jo.buffer);var Qo=function(r){return Jo[0]=r,Ko[zo]},Zo=go,$o=!0===Do?1:0,ru=new To(1),nu=new Zo(ru.buffer);var tu=function(r,n){return ru[0]=r,nu[$o]=n>>>0,ru[0]},eu=tu,iu=Z,ou=$;var uu,au,fu=function(r){return r===iu||r===ou};!0===Do?(uu=1,au=0):(uu=0,au=1);var cu=go,lu={HIGH:uu,LOW:au},su=new To(1),vu=new cu(su.buffer),pu=lu.HIGH,yu=lu.LOW;var mu,gu,du=function(r,n){return vu[pu]=r,vu[yu]=n,su[0]},bu=du;!0===Do?(mu=1,gu=0):(mu=0,gu=1);var hu=go,wu={HIGH:mu,LOW:gu},ju=new To(1),Ou=new hu(ju.buffer),Eu=wu.HIGH,Au=wu.LOW;var _u=function(r,n){return ju[0]=n,r[0]=Ou[Eu],r[1]=Ou[Au],r};var Tu=function(r,n){return 1===arguments.length?_u([0,0],r):_u(r,n)};var Pu=Qo,Su=eu,Fu=fu,xu=bu,Iu=Tu,Uu=qr,Vu=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)},ku=2147483647,Nu=2147483648,Hu=Pu(22250738585072014e-324),Bu=[0,0];var Gu=function(r){var n,t,e,i,o;return 0===r||Uu(r)||Fu(r)?r:(n=(2147483648&(t=Pu(r)>>>0))>>>0,(t&=ku)<Hu?(e=(Pu(o=0x40000000000000*r)&ku)>>>0,o=xu(n|(e=696219795+(e/3>>>0)>>>0),0)):o=Su(o=0,n|(e=715094163+(t/3>>>0)>>>0)),o*=Vu(i=o*o*(o/r)),Iu(Bu,o),Bu[1]&Nu?(Bu[0]+=1,Bu[1]&=~Nu):Bu[1]|=Nu,o=xu(4294967295&Bu[0],3221225472&Bu[1]),o+=o*(i=((i=r/(o*o))-o)/(o+o+i)))},Lu="function"==typeof Math.fround?Math.fround:null,Mu=G,Ru="function"==typeof Float32Array;var Wu="function"==typeof Float32Array?Float32Array:null,Xu=function(r){return Ru&&r instanceof Float32Array||"[object Float32Array]"===Mu(r)},Yu=Z,Cu=Wu;var Du=function(){var r,n;if("function"!=typeof Cu)return!1;try{n=new Cu([1,3.14,-3.14,5e40]),r=Xu(n)&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===Yu}catch(n){r=!1}return r};var qu="function"==typeof Float32Array?Float32Array:void 0,zu=function(){throw new Error("not implemented")},Ju=new(Du()?qu:zu)(1);var Ku=Lu;"function"!=typeof Ku&&(Ku=function(r){return Ju[0]=r,Ju[0]});var Qu=Ku,Zu=Gu;var $u=function(r){return Qu(Zu(Qu(r)))},ra=[Gu,Gu,$u,Gu,Gu,Gu,Gu,Gu,$u,Gu,Gu,$u,Gu,Gu,Gu,Gu,$u,Gu,Gu,$u,Gu,Gu,$u,Gu,Gu],na=Ii(no,fi,ra,ai.nargs,ai.nin,ai.nout);function ta(r,n,t,e,i,o,u){return na(r,ao(n),t,e,ao(i),o,u)}var ea=Ii(no.ndarray,fi,ra,ai.nargs+ai.nin+ai.nout,ai.nin,ai.nout);return g(ta,"ndarray",(function(r,n,t,e,i,o,u,a,f){return ea(r,ao(n),t,e,i,ao(o),u,a,f)})),ui(ai,fi,ta,!1),ui(ai,fi,ta.ndarray,!0),ta}));
//# sourceMappingURL=browser.js.map
