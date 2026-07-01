"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw r=0,n}}};var o=s(function(M,u){"use strict";var y=require("@stdlib/assert-is-ndarray-like"),q=require("@stdlib/ndarray-from-scalar"),c=require("@stdlib/ndarray-dtype"),f=require("@stdlib/ndarray-ndims"),h=require("@stdlib/ndarray-concat1d"),w=require("@stdlib/string-format");function E(e){var r,n,i,a;if(!y(e)||f(e)!==1)throw new TypeError(w("invalid argument. First argument must be a one-dimensional ndarray. Value: `%s`.",e));if(r=arguments.length,r<2)throw new Error("invalid invocation. Must provide at least two arguments.");for(n=c(e),i=[e],a=1;a<r;a++)i.push(q(arguments[a],{dtype:n}));return h(i)}u.exports=E});var l=s(function(O,m){"use strict";var v=require("@stdlib/assert-is-ndarray-like"),T=require("@stdlib/ndarray-from-scalar"),b=require("@stdlib/ndarray-dtype"),d=require("@stdlib/ndarray-ndims"),L=require("@stdlib/ndarray-concat1d").assign,g=require("@stdlib/string-format");function V(e){var r,n,i,a,t;if(!v(e)||d(e)!==1)throw new TypeError(g("invalid argument. First argument must be a one-dimensional ndarray. Value: `%s`.",e));if(r=arguments.length,r<3)throw new Error("invalid invocation. Must provide at least three arguments.");if(a=arguments[r-1],!v(a)||d(a)!==1)throw new TypeError(g("invalid argument. Last argument must be a one-dimensional ndarray. Value: `%s`.",a));for(n=b(e),i=[e],t=1;t<r-1;t++)i.push(T(arguments[t],{dtype:n}));return L(i,a)}m.exports=V});var k=require("@stdlib/utils-define-nonenumerable-read-only-property"),p=o(),D=l();k(p,"assign",D);module.exports=p;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
//# sourceMappingURL=index.js.map
