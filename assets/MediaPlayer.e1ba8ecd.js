var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&a(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&a(e,r,t[r]);return e};import{p as l,e as c,f as u,h as f}from"./index.46a6af52.js";import{I as d,J as h,K as p,L as m,M as g,N as v,O as y,P as w,p as C,o as L,c as b,b as x,a as F,t as P,n as M,w as E,q as j,l as k}from"./vendor.957100f5.js";var $={exports:{}};!function(e){var t=function(e){var t,r=Object.prototype,o=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(O){l=function(e,t,r){return e[t]=r}}function c(e,t,r,o){var n=t&&t.prototype instanceof g?t:g,i=Object.create(n.prototype),a=new j(o||[]);return i._invoke=function(e,t,r){var o=f;return function(n,i){if(o===h)throw new Error("Generator is already running");if(o===p){if("throw"===n)throw i;return $()}for(r.method=n,r.arg=i;;){var a=r.delegate;if(a){var s=P(a,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var l=u(e,t,r);if("normal"===l.type){if(o=r.done?p:d,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=p,r.method="throw",r.arg=l.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",m={};function g(){}function v(){}function y(){}var w={};l(w,i,(function(){return this}));var C=Object.getPrototypeOf,L=C&&C(C(k([])));L&&L!==r&&o.call(L,i)&&(w=L);var b=y.prototype=g.prototype=Object.create(w);function x(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function F(e,t){function r(n,i,a,s){var l=u(e[n],e,i);if("throw"!==l.type){var c=l.arg,f=c.value;return f&&"object"==typeof f&&o.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(f).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,s)}))}s(l.arg)}var n;this._invoke=function(e,o){function i(){return new t((function(t,n){r(e,o,t,n)}))}return n=n?n.then(i,i):i()}}function P(e,r){var o=e.iterator[r.method];if(o===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=u(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,m;var i=n.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function M(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(M,this),this.reset(!0)}function k(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:$}}function $(){return{value:t,done:!0}}return v.prototype=y,l(b,"constructor",y),l(y,"constructor",v),v.displayName=l(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},x(F.prototype),l(F.prototype,a,(function(){return this})),e.AsyncIterator=F,e.async=function(t,r,o,n,i){void 0===i&&(i=Promise);var a=new F(c(t,r,o,n),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(b),l(b,s,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var o=t.pop();if(o in e)return r.value=o,r.done=!1,r}return r.done=!0,r}},e.values=k,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(o,n){return s.type="throw",s.arg=e,r.next=o,n&&(r.method="next",r.arg=t),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;E(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,o){return this.delegate={iterator:k(e),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=t),m}},e}($.exports);try{regeneratorRuntime=t}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}();let O=!1,S=()=>{};var T={logging:O,setLogging:e=>{O=e},setCustomLogger:e=>{S=e},log:(e,t)=>{S({type:e,message:t}),O&&console.log(`[${e}] ${t}`)}};let z=0,_=0;const A=e=>{const[t,r,o]=e.split(":");return 60*parseFloat(t)*60+60*parseFloat(r)+parseFloat(o)};var B={exports:{}};B.exports=function(){function e(){var e=arguments.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var t=document.createElement("base");if(t.href=arguments[0],1===e)return t.href;var r=document.getElementsByTagName("head")[0];r.insertBefore(t,r.firstChild);for(var o,n=document.createElement("a"),i=1;i<e;i++)n.href=arguments[i],o=n.href,t.href=o;return r.removeChild(t),o}return e}();var R={name:"@ffmpeg/ffmpeg",version:"0.10.1",description:"FFmpeg WebAssembly version",main:"src/index.js",types:"src/index.d.ts",directories:{example:"examples"},scripts:{start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js",prepublishOnly:"npm run build",lint:"eslint src",wait:"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},browser:{"./src/node/index.js":"./src/browser/index.js"},repository:{type:"git",url:"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},keywords:["ffmpeg","WebAssembly","video"],author:"Jerome Wu <jeromewus@gmail.com>",license:"MIT",bugs:{url:"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},engines:{node:">=12.16.1"},homepage:"https://github.com/ffmpegwasm/ffmpeg.wasm#readme",dependencies:{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},devDependencies:{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.10.0","@types/emscripten":"^1.39.4","babel-loader":"^8.1.0",chai:"^4.2.0",cors:"^2.8.5",eslint:"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1",express:"^4.17.1",mocha:"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0",webpack:"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"}};const{devDependencies:W}=R;var I={corePath:`https://unpkg.com/@ffmpeg/core@${W["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`};const N=B.exports,{log:Z}=T,V=async(e,t)=>{Z("info",`fetch ${e}`);const r=await(await fetch(e)).arrayBuffer();Z("info",`${e} file size = ${r.byteLength} bytes`);const o=new Blob([r],{type:t}),n=URL.createObjectURL(o);return Z("info",`${e} blob URL = ${n}`),n};const U=B.exports;var D={defaultOptions:I,getCreateFFmpegCore:async({corePath:e})=>{if("string"!=typeof e)throw Error("corePath should be a string!");const t=N(e),r=await V(t,"application/javascript"),o=await V(t.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),n=await V(t.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return"undefined"==typeof createFFmpegCore?new Promise((e=>{const t=document.createElement("script"),i=()=>{t.removeEventListener("load",i),Z("info","ffmpeg-core.js script loaded"),e({createFFmpegCore:createFFmpegCore,corePath:r,wasmPath:o,workerPath:n})};t.src=r,t.type="text/javascript",t.addEventListener("load",i),document.getElementsByTagName("head")[0].appendChild(t)})):(Z("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore:createFFmpegCore,corePath:r,wasmPath:o,workerPath:n}))},fetchFile:async e=>{let t=e;if(void 0===e)return new Uint8Array;if("string"==typeof e)if(/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e))t=atob(e.split(",")[1]).split("").map((e=>e.charCodeAt(0)));else{const r=await fetch(U(e));t=await r.arrayBuffer()}else(e instanceof File||e instanceof Blob)&&(t=await(r=e,new Promise(((e,t)=>{const o=new FileReader;o.onload=()=>{e(o.result)},o.onerror=({target:{error:{code:e}}})=>{t(Error(`File could not be read! Code=${e}`))},o.readAsArrayBuffer(r)}))));var r;return new Uint8Array(t)}};const{defaultArgs:G,baseOptions:Y}={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}},{setLogging:H,setCustomLogger:q,log:J}=T,K=(e,t)=>{if("string"==typeof e)if(e.startsWith("  Duration")){const r=e.split(", ")[0].split(": ")[1],o=A(r);t({duration:o,ratio:_}),(0===z||z>o)&&(z=o)}else if(e.startsWith("frame")||e.startsWith("size")){const r=e.split("time=")[1].split(" ")[0],o=A(r);_=o/z,t({ratio:_,time:o})}else e.startsWith("video:")&&(t({ratio:1}),z=0)},Q=(e,t)=>{const r=e._malloc(t.length*Uint32Array.BYTES_PER_ELEMENT);return t.forEach(((t,o)=>{const n=e._malloc(t.length+1);e.writeAsciiToMemory(t,n),e.setValue(r+Uint32Array.BYTES_PER_ELEMENT*o,n,"i32")})),[t.length,r]},{defaultOptions:X,getCreateFFmpegCore:ee}=D,{version:te}=R,re=Error("ffmpeg.wasm is not ready, make sure you have completed load().");const oe=(e={})=>{const t=s(s(s({},Y),X),e),{log:r,logger:a,progress:l}=t,c=((e,t)=>{var r={};for(var a in e)n.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r})(t,["log","logger","progress"]);let u=null,f=null,d=null,h=!1,p=l;const m=({type:e,message:t})=>{J(e,t),K(t,p),(e=>{"FFMPEG_END"===e&&null!==d&&(d(),d=null,h=!1)})(t)};return H(r),q(a),J("info",`use ffmpeg.wasm v${te}`),{setProgress:e=>{p=e},setLogger:e=>{q(e)},setLogging:H,load:async()=>{if(J("info","load ffmpeg-core"),null!==u)throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.");{J("info","loading ffmpeg-core");const{createFFmpegCore:e,corePath:t,workerPath:r,wasmPath:o}=await ee(c);u=await e({mainScriptUrlOrBlob:t,printErr:e=>m({type:"fferr",message:e}),print:e=>m({type:"ffout",message:e}),locateFile:(e,t)=>{if("undefined"!=typeof window){if(void 0!==o&&e.endsWith("ffmpeg-core.wasm"))return o;if(void 0!==r&&e.endsWith("ffmpeg-core.worker.js"))return r}return t+e}}),f=u.cwrap("proxy_main","number",["number","number"]),J("info","ffmpeg-core loaded")}},isLoaded:()=>null!==u,run:(...e)=>{if(J("info",`run ffmpeg command: ${e.join(" ")}`),null===u)throw re;if(h)throw Error("ffmpeg.wasm can only run one command at a time");return h=!0,new Promise((t=>{const r=[...G,...e].filter((e=>0!==e.length));d=t,f(...Q(u,r))}))},exit:()=>{if(null===u)throw re;h=!1,u.exit(1),u=null,f=null,d=null},FS:(e,...t)=>{if(J("info",`run FS.${e} ${t.map((e=>"string"==typeof e?e:`<${e.length} bytes binary file>`)).join(" ")}`),null===u)throw re;{let o=null;try{o=u.FS[e](...t)}catch(r){throw"readdir"===e?Error(`ffmpeg.FS('readdir', '${t[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`):"readFile"===e?Error(`ffmpeg.FS('readFile', '${t[0]}') error. Check if the path exists`):Error("Oops, something went wrong in FS operation.")}return o}}}},{fetchFile:ne}=D;var ie={createFFmpeg:oe,fetchFile:ne},ae="/win7/assets/play-normal.0a22a019.png",se="/win7/assets/play-idle.307abb01.png",le="/win7/assets/play-hover.fe99dd04.png",ce=/^\s+|\s+$/g,ue=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,de=/^0o[0-7]+$/i,he=parseInt,pe="object"==typeof d&&d&&d.Object===Object&&d,me="object"==typeof self&&self&&self.Object===Object&&self,ge=pe||me||Function("return this")(),ve=Object.prototype.toString,ye=Math.max,we=Math.min,Ce=function(){return ge.Date.now()};function Le(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function be(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==ve.call(e)}(e))return NaN;if(Le(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Le(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(ce,"");var r=fe.test(e);return r||de.test(e)?he(e.slice(2),r?2:8):ue.test(e)?NaN:+e}var xe=function(e,t,r){var o,n,i,a,s,l,c=0,u=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=o,i=n;return o=n=void 0,c=t,a=e.apply(i,r)}function p(e){return c=e,s=setTimeout(g,t),u?h(e):a}function m(e){var r=e-l;return void 0===l||r>=t||r<0||f&&e-c>=i}function g(){var e=Ce();if(m(e))return v(e);s=setTimeout(g,function(e){var r=t-(e-l);return f?we(r,i-(e-c)):r}(e))}function v(e){return s=void 0,d&&o?h(e):(o=n=void 0,a)}function y(){var e=Ce(),r=m(e);if(o=arguments,n=this,l=e,r){if(void 0===s)return p(l);if(f)return s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=be(t)||0,Le(r)&&(u=!!r.leading,i=(f="maxWait"in r)?ye(be(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,o=l=n=s=void 0},y.flush=function(){return void 0===s?a:v(Ce())},y},Fe={},Pe={},Me={},Ee=h(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{}}));Object.defineProperty(Me,"__esModule",{value:!0}),Me.readFile=Me.writeFileSync=Me.writeFile=Me.read=Me.open=Me.close=Me.stat=Me.createReadStream=Me.pathExists=void 0;const je=Ee;Me.pathExists=je.existsSync,Me.createReadStream=je.createReadStream,Me.stat=async function(e){return new Promise(((t,r)=>{je.stat(e,((e,o)=>{e?r(e):t(o)}))}))},Me.close=async function(e){return new Promise(((t,r)=>{je.close(e,(e=>{e?r(e):t()}))}))},Me.open=async function(e,t){return new Promise(((r,o)=>{je.open(e,t,((e,t)=>{e?o(e):r(t)}))}))},Me.read=async function(e,t,r,o,n){return new Promise(((i,a)=>{je.read(e,t,r,o,n,((e,t,r)=>{e?a(e):i({bytesRead:t,buffer:r})}))}))},Me.writeFile=async function(e,t){return new Promise(((r,o)=>{je.writeFile(e,t,(e=>{e?o(e):r()}))}))},Me.writeFileSync=function(e,t){je.writeFileSync(e,t)},Me.readFile=async function(e){return new Promise(((t,r)=>{je.readFile(e,((e,o)=>{e?r(e):t(o)}))}))};var ke={};Object.defineProperty(ke,"__esModule",{value:!0}),ke.fromFile=ke.FileTokenizer=void 0;const $e=p,Oe=m,Se=Me;class Te extends $e.AbstractTokenizer{constructor(e,t){super(t),this.fd=e}async readBuffer(e,t){const r=this.normalizeOptions(e,t);this.position=r.position;const o=await Se.read(this.fd,e,r.offset,r.length,r.position);if(this.position+=o.bytesRead,o.bytesRead<r.length&&(!t||!t.mayBeLess))throw new Oe.EndOfStreamError;return o.bytesRead}async peekBuffer(e,t){const r=this.normalizeOptions(e,t),o=await Se.read(this.fd,e,r.offset,r.length,r.position);if(!r.mayBeLess&&o.bytesRead<r.length)throw new Oe.EndOfStreamError;return o.bytesRead}async close(){return Se.close(this.fd)}}ke.FileTokenizer=Te,ke.fromFile=async function(e){const t=await Se.stat(e);if(!t.isFile)throw new Error(`File not a file: ${e}`);const r=await Se.open(e,"r");return new Te(r,{path:e,size:t.size})},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.fromStream=e.fromBuffer=e.EndOfStreamError=e.fromFile=void 0;const t=Me,r=g;var o=ke;Object.defineProperty(e,"fromFile",{enumerable:!0,get:function(){return o.fromFile}});var n=g;Object.defineProperty(e,"EndOfStreamError",{enumerable:!0,get:function(){return n.EndOfStreamError}}),Object.defineProperty(e,"fromBuffer",{enumerable:!0,get:function(){return n.fromBuffer}}),e.fromStream=async function(e,o){if(o=o||{},e.path){const r=await t.stat(e.path);o.path=e.path,o.size=r.size}return r.fromStream(e,o)}}(Pe);var ze={};Object.defineProperty(ze,"__esModule",{value:!0}),ze.RandomFileReader=void 0;const _e=Ee;ze.RandomFileReader=class{constructor(e,t){this.fileSize=t,this.fd=_e.openSync(e,"r")}randomRead(e,t,r,o){return new Promise(((n,i)=>{_e.read(this.fd,e,t,r,o,((e,t)=>{e?i(e):n(t)}))}))}close(){_e.closeSync(this.fd)}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ratingToStars=e.orderTags=e.parseFile=e.parseStream=e.selectCover=e.parseBuffer=e.parseFromTokenizer=void 0;const t=Pe,r=v,o=w,n=y.exports,i=ze,a=n("music-metadata:parser");var s=v;Object.defineProperty(e,"parseFromTokenizer",{enumerable:!0,get:function(){return s.parseFromTokenizer}}),Object.defineProperty(e,"parseBuffer",{enumerable:!0,get:function(){return s.parseBuffer}}),Object.defineProperty(e,"selectCover",{enumerable:!0,get:function(){return s.selectCover}}),e.parseStream=async function(e,o,n={}){const i=await t.fromStream(e,"string"==typeof o?{mimeType:o}:o);return r.parseFromTokenizer(i,n)},e.parseFile=async function(e,n={}){a(`parseFile: ${e}`);const s=await t.fromFile(e),l=new i.RandomFileReader(e,s.fileInfo.size);try{await r.scanAppendingHeaders(l,n)}finally{l.close()}try{const t=o.ParserFactory.getParserIdForExtension(e);return t||a(" Parser could not be determined by file extension"),await o.ParserFactory.parse(s,t,n)}finally{await s.close()}},e.orderTags=r.orderTags,e.ratingToStars=r.ratingToStars}(Fe);ie.createFFmpeg({log:!1});const Ae=(Be=s({inject:["$wm","$cnf","$fs"]},l({filePath:l.obj(null),wmId:l.any(),callbacks:l.any()})),t(Be,r({mounted(){this.fetchMediaFile(),new ResizeObserver(this.debouncedResize).observe(this.$refs.container)},data(){return{src:null,currentFile:this.filePath,loading:!0,images:[],imageHasListener:!1,PlayNormal:ae,PlayIdle:se,PlayHover:le,PlayMuted:"/win7/assets/play-muted.61c75d18.png",Pause:"/win7/assets/pause.d952bbea.png",volume:1,fullScreen:!1,media:{},currentTime:0,playing:!1,seeking:!1,duration:1800,coverImage:null,lastVolume:null,formattedCurrentTime:"00:00",repeat:!0,shuffle:!1,title:"",album:"",debouncedResize:xe(this.onContainerResize,250)}},async created(){this.callbacks.openFile=e=>{this.currentFile=e,this.fetchMediaFile()}},methods:{onEnd(){},async fetchMediaFile(){this.loading=!0,this.src=null;try{const t=await c(this.currentFile),r=await u(t,{encode:"unit8array"}),o=this.$refs.audio;o.src=URL.createObjectURL(new Blob([r])),this.initMedia(),this.getMetaData(r);try{await o.play()}catch(e){console.error(e)}}catch(e){}finally{this.loading=!1}},initMedia(){this.volume=this.$refs.audio.volume,this.$refs.audio.ontimeupdate=xe((()=>{!this.seeking&&this.$refs.audio&&(this.$refs.progress.value=this.$refs.audio.currentTime),this.formattedCurrentTime=f(this.$refs.audio.currentTime)}),500,{maxWait:500}),this.$refs.audio.onplay=()=>{this.playing=!0},this.$refs.audio.onpause=()=>{this.playing=!1},this.$refs.audio.onended=()=>{this.$refs.audio.currentTime=0,this.repeat&&this.$refs.audio.play()},this.$refs.audio.ondurationchange=()=>{this.duration=this.$refs.audio.duration}},seekTo(e){const t=+e.target.value;this.$refs.audio.seekable?this.$refs.audio.currentTime=t:console.error("cannot seek")},togglePlayPause(){this.$refs.audio.paused?this.$refs.audio.play():this.$refs.audio.pause()},async getMetaData(e){const t=(await Fe.parseBuffer(new Uint8Array(e))).common||{},r=t.picture||[];if(r[0]){const e=r[0];this.coverImage=URL.createObjectURL(new Blob([e.data]))}t.artist&&t.title?this.title=`${t.artist} - ${t.title}`:this.title=C.basename(this.currentFile),this.album=t.album,this.$wm.updateToolbarTitle(this.wmId,this.title)},onVolumeChange(e){this.$refs.audio.volume=+e.target.value,this.volume=this.$refs.audio.volume},onVolumeWheelMove(e){e.preventDefault();const t=this.$refs.audio.volume;let r=this.$refs.audio.volume;e.deltaY<0?r=t+.1:e.deltaY>0&&(r=t-.1),r>1?r=1:r<0&&(r=0),this.$refs.audio.volume=r,this.volume=this.$refs.audio.volume},toggleMute(){const e=this.$refs.audio;null===this.lastVolume&&(this.lastVolume=1),0!==e.volume&&(this.lastVolume=e.volume),e.volume=e.volume>0?0:this.lastVolume,this.volume=e.volume},onContainerResize(){this.$refs.container&&(this.containerWidth=this.$refs.container.clientWidth)},mediaPlayerClass(){let e="";return this.containerWidth<450?e+=" w-small ":this.containerWidth>=450&&this.containerWidth<580?e+=" w-medium ":e+=" w-large ",e}},style:({className:e})=>[e("player",{background:"#f1f3f4",width:"100%",padding:"15px 0"})],computed:{durationSeconds(){return this.$refs.audio.duration},mediaPlayerStyle:()=>({backgroundImage:'url("/win7/assets/wmp_12_wallpaper.b8f6bf64.jpg")',"--play-hover":`url("${le}")`,"--play-click":`url("${ae}")`,"--play-idle":`url("${se}")`}),onStopClicked(){this.$refs.audio.pause(),this.$nextTick((()=>{this.$refs.audio.currentTime=0,this.$refs.progress.value="0"}))}}})));var Be;const Re={class:"media-container"},We=["src"],Ie={name:"media",controls:"controls",ref:"audio"},Ne=x("div",{class:"shadow-controls"},null,-1),Ze={class:"controls"},Ve={class:"progress"},Ue=["max"],De={class:"rounded-left"},Ge={class:"rounded"},Ye={class:"left"},He=[x("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},[x("path",{d:"M 37.978516 4.9804688 A 2.0002 2.0002 0 0 0 36.585938 8.4140625 L 39.171875 11 L 35.484375 11 C 33.363729 11 31.327803 11.842739 29.828125 13.34375 L 12.34375 30.828125 C 11.591958 31.57925 10.576979 32 9.515625 32 L 4 32 A 2.0002 2.0002 0 1 0 4 36 L 9.515625 36 C 11.636271 36 13.671667 35.157078 15.171875 33.658203 A 2.0002 2.0002 0 0 0 15.171875 33.65625 L 32.65625 16.171875 A 2.0002 2.0002 0 0 0 32.658203 16.171875 C 33.408478 15.420886 34.423021 15 35.484375 15 L 39.171875 15 L 36.585938 17.585938 A 2.0002 2.0002 0 1 0 39.414062 20.414062 L 45.414062 14.414062 A 2.0002 2.0002 0 0 0 45.414062 11.585938 L 39.414062 5.5859375 A 2.0002 2.0002 0 0 0 37.978516 4.9804688 z M 4 11 C 2.9 11 2 11.9 2 13 C 2 14.1 2.9 15 4 15 L 9.4296875 15 C 10.519688 15 11.580078 15.450234 12.330078 16.240234 L 17.390625 21.539062 L 20.220703 18.710938 L 15.220703 13.480469 C 13.720703 11.900469 11.609687 11 9.4296875 11 L 4 11 z M 27.119141 25.949219 L 24.300781 28.769531 L 29.779297 34.519531 C 31.279297 36.099531 33.390313 37 35.570312 37 L 39.171875 37 L 36.585938 39.585938 A 2.0002 2.0002 0 1 0 39.414062 42.414062 L 45.414062 36.414062 A 2.0002 2.0002 0 0 0 45.414062 33.585938 L 39.414062 27.585938 A 2.0002 2.0002 0 0 0 37.978516 26.980469 A 2.0002 2.0002 0 0 0 36.585938 30.414062 L 39.171875 33 L 35.570312 33 C 34.480312 33 33.419922 32.549766 32.669922 31.759766 L 27.119141 25.949219 z"})],-1)],qe=[x("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 26"},[x("path",{d:"M 13 0 C 5.839844 0 0 5.839844 0 13 C 0 20.164063 5.839844 26 13 26 C 19.554688 26 25 21.113281 25.875 14.78125 C 25.976563 14.238281 25.773438 13.679688 25.339844 13.332031 C 24.90625 12.984375 24.320313 12.90625 23.808594 13.125 C 23.300781 13.339844 22.953125 13.824219 22.90625 14.375 C 22.234375 19.246094 18.070313 23 13 23 C 7.460938 23 3 18.542969 3 13 C 3 7.460938 7.460938 3 13 3 C 16.234375 3 19.109375 4.535156 20.9375 6.90625 L 19.15625 8.6875 C 19.003906 8.839844 18.96875 9.078125 19.03125 9.28125 C 19.089844 9.484375 19.257813 9.613281 19.46875 9.65625 C 22.164063 10.1875 25.277344 9.953125 25.40625 9.9375 C 25.539063 9.921875 25.660156 9.839844 25.75 9.75 C 25.839844 9.660156 25.917969 9.570313 25.9375 9.4375 C 25.953125 9.308594 26.1875 6.167969 25.65625 3.46875 C 25.617188 3.261719 25.480469 3.09375 25.28125 3.03125 C 25.078125 2.96875 24.835938 3.007813 24.6875 3.15625 L 23.0625 4.78125 C 20.679688 1.871094 17.046875 0 13 0 Z"})],-1)],Je=[x("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30"},[x("path",{d:"M22,6H8C6.895,6,6,6.895,6,8v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V8C24,6.895,23.105,6,22,6z"})],-1)],Ke={class:"center"},Qe=x("div",{class:"previous"},[x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},[x("path",{d:"M 4 6 C 3.448 6 3 6.448 3 7 L 3 17 C 3 17.552 3.448 18 4 18 C 4.552 18 5 17.552 5 17 L 5 7 C 5 6.448 4.552 6 4 6 z M 11.949219 6.9296875 C 11.770297 6.9383906 11.589578 6.9962813 11.423828 7.1132812 L 5.65625 11.183594 C 5.09225 11.581594 5.09225 12.418406 5.65625 12.816406 L 11.423828 16.886719 C 12.086828 17.354719 13 16.881312 13 16.070312 L 13 7.9296875 C 13 7.3214375 12.485984 6.9035781 11.949219 6.9296875 z M 19.949219 6.9296875 C 19.770297 6.9383906 19.589578 6.9962813 19.423828 7.1132812 L 13.65625 11.183594 C 13.09225 11.581594 13.09225 12.418406 13.65625 12.816406 L 19.423828 16.886719 C 20.086828 17.354719 21 16.881312 21 16.070312 L 21 7.9296875 C 21 7.3214375 20.485984 6.9035781 19.949219 6.9296875 z"})])],-1),Xe={class:"image",alt:""},et=["src"],tt=["src"],rt=["src"],ot=x("div",{class:"next"},[x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},[x("path",{d:"M 20 6 C 19.448 6 19 6.448 19 7 L 19 17 C 19 17.552 19.448 18 20 18 C 20.552 18 21 17.552 21 17 L 21 7 C 21 6.448 20.552 6 20 6 z M 4.0507812 6.9296875 C 3.5140156 6.9035781 3 7.3214375 3 7.9296875 L 3 16.070312 C 3 16.881312 3.9131719 17.354719 4.5761719 16.886719 L 10.34375 12.816406 C 10.90775 12.418406 10.90775 11.581594 10.34375 11.183594 L 4.5761719 7.1132812 C 4.4104219 6.9962813 4.2297031 6.9383906 4.0507812 6.9296875 z M 12.050781 6.9296875 C 11.514016 6.9035781 11 7.3214375 11 7.9296875 L 11 16.070312 C 11 16.881312 11.913172 17.354719 12.576172 16.886719 L 18.34375 12.816406 C 18.90775 12.418406 18.90775 11.581594 18.34375 11.183594 L 12.576172 7.1132812 C 12.410422 6.9962813 12.229703 6.9383906 12.050781 6.9296875 z"})])],-1),nt={class:"right"},it=[x("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},[x("path",{d:"M 24.1875 3 C 23.277344 3 22.332031 3.4375 21.5625 4.21875 L 9.9375 15.8125 C 9.296875 16.378906 9 17.476563 9 18.25 L 9 31.75 C 9 32.515625 9.316406 33.609375 9.90625 34.125 L 21.5 45.6875 C 22.554688 46.761719 23.527344 47 24.15625 47 C 25.824219 47 27 45.476563 27 43.3125 L 27 6.3125 C 27 4.035156 25.539063 3 24.1875 3 Z M 3 15.96875 C 1.324219 15.96875 -0.03125 17.324219 -0.03125 19 L -0.03125 31 C -0.03125 32.675781 1.324219 34.03125 3 34.03125 L 7.46875 34.03125 C 7.140625 33.246094 7 32.410156 7 31.75 L 7 18.25 C 7 17.59375 7.164063 16.761719 7.5 15.96875 Z M 31.90625 18.96875 C 31.863281 18.976563 31.820313 18.988281 31.78125 19 C 31.40625 19.066406 31.105469 19.339844 31 19.703125 C 30.894531 20.070313 31.003906 20.460938 31.28125 20.71875 L 35.5625 25 L 31.28125 29.28125 C 30.882813 29.679688 30.882813 30.320313 31.28125 30.71875 C 31.679688 31.117188 32.320313 31.117188 32.71875 30.71875 L 37 26.4375 L 41.28125 30.71875 C 41.679688 31.117188 42.320313 31.117188 42.71875 30.71875 C 43.117188 30.320313 43.117188 29.679688 42.71875 29.28125 L 38.4375 25 L 42.71875 20.71875 C 43.042969 20.417969 43.128906 19.941406 42.933594 19.546875 C 42.742188 19.148438 42.308594 18.929688 41.875 19 C 41.652344 19.023438 41.441406 19.125 41.28125 19.28125 L 37 23.5625 L 32.71875 19.28125 C 32.511719 19.058594 32.210938 18.945313 31.90625 18.96875 Z"})],-1)],at=[x("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},[x("path",{d:"M 24.1875 3 C 23.277344 3 22.332031 3.4375 21.5625 4.21875 L 9.9375 15.8125 C 9.296875 16.378906 9 17.476563 9 18.25 L 9 31.75 C 9 32.515625 9.316406 33.605469 9.90625 34.125 L 21.5 45.6875 C 22.554688 46.757813 23.527344 47 24.15625 47 C 25.824219 47 27 45.476563 27 43.3125 L 27 6.3125 C 27 4.035156 25.539063 3 24.1875 3 Z M 3 15.96875 C 1.324219 15.96875 -0.03125 17.324219 -0.03125 19 L -0.03125 31 C -0.03125 32.675781 1.324219 34.03125 3 34.03125 L 7.46875 34.03125 C 7.140625 33.246094 7 32.410156 7 31.75 L 7 18.25 C 7 17.59375 7.164063 16.761719 7.5 15.96875 Z M 30.53125 18.40625 C 30.046875 18.464844 29.679688 18.863281 29.65625 19.351563 C 29.632813 19.835938 29.960938 20.269531 30.4375 20.375 C 32.484375 20.910156 34 22.777344 34 25 C 34 27.222656 32.484375 29.089844 30.4375 29.625 C 29.902344 29.761719 29.582031 30.308594 29.71875 30.84375 C 29.855469 31.378906 30.402344 31.699219 30.9375 31.5625 C 33.851563 30.800781 36 28.136719 36 25 C 36 21.863281 33.847656 19.199219 30.9375 18.4375 C 30.804688 18.398438 30.667969 18.390625 30.53125 18.40625 Z"})],-1)],st=[x("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},[x("path",{d:"M 24.1875 3 C 23.277344 3 22.332031 3.4375 21.5625 4.21875 L 9.9375 15.8125 C 9.296875 16.378906 9 17.476563 9 18.25 L 9 31.75 C 9 32.515625 9.316406 33.605469 9.90625 34.125 L 21.5 45.6875 C 22.554688 46.757813 23.527344 47 24.15625 47 C 25.824219 47 27 45.476563 27 43.3125 L 27 6.3125 C 27 4.035156 25.539063 3 24.1875 3 Z M 34.71875 12.125 C 34.273438 12.179688 33.917969 12.527344 33.855469 12.972656 C 33.789063 13.414063 34.027344 13.847656 34.4375 14.03125 C 38.339844 16.136719 41 20.246094 41 25 C 41 29.738281 38.351563 33.859375 34.46875 35.96875 C 33.984375 36.234375 33.808594 36.84375 34.078125 37.328125 C 34.34375 37.8125 34.953125 37.988281 35.4375 37.71875 C 39.945313 35.269531 43 30.484375 43 25 C 43 19.5 39.9375 14.695313 35.40625 12.25 C 35.226563 12.148438 35.019531 12.105469 34.8125 12.125 C 34.78125 12.125 34.75 12.125 34.71875 12.125 Z M 3 15.96875 C 1.324219 15.96875 -0.03125 17.324219 -0.03125 19 L -0.03125 31 C -0.03125 32.675781 1.324219 34.03125 3 34.03125 L 7.46875 34.03125 C 7.140625 33.246094 7 32.410156 7 31.75 L 7 18.25 C 7 17.59375 7.164063 16.761719 7.5 15.96875 Z M 30.53125 18.40625 C 30.046875 18.464844 29.679688 18.863281 29.65625 19.351563 C 29.632813 19.835938 29.960938 20.269531 30.4375 20.375 C 32.484375 20.910156 34 22.777344 34 25 C 34 27.222656 32.484375 29.089844 30.4375 29.625 C 29.902344 29.761719 29.582031 30.308594 29.71875 30.84375 C 29.855469 31.378906 30.402344 31.699219 30.9375 31.5625 C 33.851563 30.800781 36 28.136719 36 25 C 36 21.863281 33.847656 19.199219 30.9375 18.4375 C 30.804688 18.398438 30.667969 18.390625 30.53125 18.40625 Z"})],-1)],lt=[x("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},[x("path",{d:"M 24.1875 3 C 23.277344 3 22.332031 3.4375 21.5625 4.21875 L 9.9375 15.8125 C 9.296875 16.378906 9 17.476563 9 18.25 L 9 31.75 C 9 32.515625 9.316406 33.605469 9.90625 34.125 L 21.5 45.6875 C 22.554688 46.757813 23.527344 47 24.15625 47 C 25.824219 47 27 45.476563 27 43.3125 L 27 6.3125 C 27 4.035156 25.539063 3 24.1875 3 Z M 38.28125 6.8125 C 37.84375 6.886719 37.507813 7.242188 37.457031 7.683594 C 37.410156 8.125 37.652344 8.546875 38.0625 8.71875 C 44.011719 11.71875 48.0625 17.871094 48.0625 25 C 48.0625 32.128906 44.011719 38.28125 38.0625 41.28125 C 37.695313 41.40625 37.4375 41.734375 37.394531 42.117188 C 37.351563 42.503906 37.535156 42.878906 37.867188 43.082031 C 38.195313 43.28125 38.613281 43.273438 38.9375 43.0625 C 45.539063 39.730469 50.0625 32.894531 50.0625 25 C 50.0625 17.105469 45.539063 10.269531 38.9375 6.9375 C 38.765625 6.839844 38.570313 6.796875 38.375 6.8125 C 38.34375 6.8125 38.3125 6.8125 38.28125 6.8125 Z M 34.71875 12.125 C 34.273438 12.179688 33.917969 12.527344 33.855469 12.972656 C 33.789063 13.414063 34.027344 13.847656 34.4375 14.03125 C 38.339844 16.136719 41 20.246094 41 25 C 41 29.738281 38.351563 33.859375 34.46875 35.96875 C 33.984375 36.234375 33.808594 36.84375 34.078125 37.328125 C 34.34375 37.8125 34.953125 37.988281 35.4375 37.71875 C 39.945313 35.269531 43 30.484375 43 25 C 43 19.5 39.9375 14.695313 35.40625 12.25 C 35.226563 12.148438 35.019531 12.105469 34.8125 12.125 C 34.78125 12.125 34.75 12.125 34.71875 12.125 Z M 3 15.96875 C 1.324219 15.96875 -0.03125 17.324219 -0.03125 19 L -0.03125 31 C -0.03125 32.675781 1.324219 34.03125 3 34.03125 L 7.46875 34.03125 C 7.140625 33.246094 7 32.410156 7 31.75 L 7 18.25 C 7 17.59375 7.164063 16.761719 7.5 15.96875 Z M 30.53125 18.40625 C 30.046875 18.464844 29.679688 18.863281 29.65625 19.351563 C 29.632813 19.835938 29.960938 20.269531 30.4375 20.375 C 32.484375 20.910156 34 22.777344 34 25 C 34 27.222656 32.484375 29.089844 30.4375 29.625 C 29.902344 29.761719 29.582031 30.308594 29.71875 30.84375 C 29.855469 31.378906 30.402344 31.699219 30.9375 31.5625 C 33.851563 30.800781 36 28.136719 36 25 C 36 21.863281 33.847656 19.199219 30.9375 18.4375 C 30.804688 18.398438 30.667969 18.390625 30.53125 18.40625 Z"})],-1)],ct={class:"rounded-right"},ut={key:0,class:"full-screen"},ft=[x("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},[x("path",{d:"M 8.5 7 C 5.4802259 7 3 9.4802259 3 12.5 L 3 35.5 C 3 38.519774 5.4802259 41 8.5 41 L 39.5 41 C 42.519774 41 45 38.519774 45 35.5 L 45 12.5 C 45 9.4802259 42.519774 7 39.5 7 L 8.5 7 z M 8.5 10 L 39.5 10 C 40.898226 10 42 11.101774 42 12.5 L 42 35.5 C 42 36.898226 40.898226 38 39.5 38 L 28 38 L 28 29.5 C 28 26.480763 25.519237 24 22.5 24 L 6 24 L 6 12.5 C 6 11.101774 7.1017741 10 8.5 10 z M 37.470703 12.986328 A 1.50015 1.50015 0 0 0 37.310547 13 L 32.5 13 A 1.50015 1.50015 0 1 0 32.5 16 L 33.878906 16 L 28.439453 21.439453 A 1.50015 1.50015 0 1 0 30.560547 23.560547 L 36 18.121094 L 36 19.5 A 1.50015 1.50015 0 1 0 39 19.5 L 39 14.673828 A 1.50015 1.50015 0 0 0 37.470703 12.986328 z M 6 27 L 22.5 27 C 23.892763 27 25 28.107237 25 29.5 L 25 38 L 8.5 38 C 7.1017741 38 6 36.898226 6 35.5 L 6 27 z"})],-1)],dt={key:1,class:"exit-full-screen"},ht=[x("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},[x("path",{d:"M 8.5 7 C 5.4802259 7 3 9.4802259 3 12.5 L 3 35.5 C 3 38.519774 5.4802259 41 8.5 41 L 39.5 41 C 42.519774 41 45 38.519774 45 35.5 L 45 12.5 C 45 9.4802259 42.519774 7 39.5 7 L 8.5 7 z M 8.5 10 L 39.5 10 C 40.898226 10 42 11.101774 42 12.5 L 42 35.5 C 42 36.898226 40.898226 38 39.5 38 L 28 38 L 28 29.5 C 28 26.480763 25.519237 24 22.5 24 L 6 24 L 6 12.5 C 6 11.101774 7.1017741 10 8.5 10 z M 37.470703 12.986328 A 1.50015 1.50015 0 0 0 36.439453 13.439453 L 31 18.878906 L 31 17.5 A 1.50015 1.50015 0 0 0 29.476562 15.978516 A 1.50015 1.50015 0 0 0 28 17.5 L 28 22.277344 A 1.50015 1.50015 0 0 0 29.720703 24 L 34.5 24 A 1.50015 1.50015 0 1 0 34.5 21 L 33.121094 21 L 38.560547 15.560547 A 1.50015 1.50015 0 0 0 37.470703 12.986328 z M 6 27 L 22.5 27 C 23.892763 27 25 28.107237 25 29.5 L 25 38 L 8.5 38 C 7.1017741 38 6 36.898226 6 35.5 L 6 27 z"})],-1)],pt={class:"shadow-top"},mt={class:"title"},gt={class:"album"},vt={key:0,class:"loading"},yt=[x("h1",null,"Loading ...",-1)];Ae.render=function(e,t,r,o,n,i){return L(),b("div",{class:M(["MediaPlayer",i.mediaPlayerClass()]),style:k(i.mediaPlayerStyle),ref:"container"},[x("div",Re,[n.coverImage?(L(),b("img",{key:0,class:"coverImage",src:n.coverImage,alt:""},null,8,We)):F("",!0),x("video",Ie,null,512)]),Ne,x("div",Ze,[x("div",Ve,[x("input",{type:"range",demo:"colors",min:"0",value:"0",max:n.duration,ref:"progress",onChange:t[0]||(t[0]=e=>i.seekTo(e)),onMousedown:t[1]||(t[1]=e=>n.seeking=!0),onMouseup:t[2]||(t[2]=e=>n.seeking=!1),onMouseleave:t[3]||(t[3]=e=>n.seeking=!1)},null,40,Ue)]),x("div",De,P(this.formattedCurrentTime),1),x("div",Ge,[x("div",Ye,[x("div",{class:M(["shuffle",{active:n.shuffle}]),onClick:t[4]||(t[4]=e=>n.shuffle=!n.shuffle)},He,2),x("div",{class:M(["repeat",{active:n.repeat}]),onClick:t[5]||(t[5]=e=>n.repeat=!n.repeat)},qe,2),x("div",{class:"stop",onClick:t[6]||(t[6]=(...e)=>i.onStopClicked&&i.onStopClicked(...e))},Je)]),x("div",Ke,[Qe,x("div",{class:"play",onClick:t[7]||(t[7]=(...e)=>i.togglePlayPause&&i.togglePlayPause(...e))},[x("div",Xe,[x("img",{class:"idle",src:n.playing?n.Pause:n.PlayIdle,alt:""},null,8,et),x("img",{class:"hover",src:n.playing?n.Pause:n.PlayIdle,alt:""},null,8,tt),x("img",{class:"active",src:n.playing?n.Pause:n.PlayIdle,alt:""},null,8,rt)])]),ot]),x("div",nt,[x("div",{class:"volume",onWheel:t[12]||(t[12]=(...e)=>i.onVolumeWheelMove&&i.onVolumeWheelMove(...e))},[0===n.volume?(L(),b("div",{key:0,onClick:t[8]||(t[8]=(...e)=>i.toggleMute&&i.toggleMute(...e)),class:"mute"},it)):F("",!0),n.volume>0&&n.volume<.3?(L(),b("div",{key:1,onClick:t[9]||(t[9]=(...e)=>i.toggleMute&&i.toggleMute(...e)),class:"low"},at)):F("",!0),n.volume>=.3&&n.volume<=.6?(L(),b("div",{key:2,onClick:t[10]||(t[10]=(...e)=>i.toggleMute&&i.toggleMute(...e)),class:"medium"},st)):F("",!0),n.volume>.6?(L(),b("div",{key:3,onClick:t[11]||(t[11]=(...e)=>i.toggleMute&&i.toggleMute(...e)),class:"high"},lt)):F("",!0)],32),E(x("input",{class:"volume-range",type:"range",min:"0",max:"1",step:"0.05","onUpdate:modelValue":t[13]||(t[13]=e=>n.volume=e),onWheel:t[14]||(t[14]=(...e)=>i.onVolumeWheelMove&&i.onVolumeWheelMove(...e)),onChange:t[15]||(t[15]=(...e)=>i.onVolumeChange&&i.onVolumeChange(...e))},null,544),[[j,n.volume]])])]),x("div",ct,[n.fullScreen?F("",!0):(L(),b("div",ut,ft)),n.fullScreen?(L(),b("div",dt,ht)):F("",!0)])]),x("div",pt,[x("div",mt,P(n.title),1),x("div",gt,P(n.album),1)]),n.loading?(L(),b("div",vt,yt)):F("",!0)],6)};export{Ae as default};
