"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=s(function(M,u){"use strict";var y=require("@stdlib/assert-is-ndarray-like"),q=require("@stdlib/ndarray-from-scalar"),c=require("@stdlib/ndarray-dtype"),f=require("@stdlib/ndarray-ndims"),h=require("@stdlib/ndarray-concat1d"),w=require("@stdlib/string-format");function E(r){var e,i,n,a;if(!y(r)||f(r)!==1)throw new TypeError(w("invalid argument. First argument must be a one-dimensional ndarray. Value: `%s`.",r));if(e=arguments.length,e<2)throw new Error("invalid invocation. Must provide at least two arguments.");for(i=c(r),n=[r],a=1;a<e;a++)n.push(q(arguments[a],{dtype:i}));return h(n)}u.exports=E});var l=s(function(O,m){"use strict";var v=require("@stdlib/assert-is-ndarray-like"),T=require("@stdlib/ndarray-from-scalar"),b=require("@stdlib/ndarray-dtype"),d=require("@stdlib/ndarray-ndims"),L=require("@stdlib/ndarray-concat1d").assign,g=require("@stdlib/string-format");function V(r){var e,i,n,a,t;if(!v(r)||d(r)!==1)throw new TypeError(g("invalid argument. First argument must be a one-dimensional ndarray. Value: `%s`.",r));if(e=arguments.length,e<3)throw new Error("invalid invocation. Must provide at least three arguments.");if(a=arguments[e-1],!v(a)||d(a)!==1)throw new TypeError(g("invalid argument. Last argument must be a one-dimensional ndarray. Value: `%s`.",a));for(i=b(r),n=[r],t=1;t<e-1;t++)n.push(T(arguments[t],{dtype:i}));return L(n,a)}m.exports=V});var k=require("@stdlib/utils-define-nonenumerable-read-only-property"),p=o(),D=l();k(p,"assign",D);module.exports=p;
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
