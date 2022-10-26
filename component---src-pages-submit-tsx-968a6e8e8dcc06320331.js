"use strict";(self.webpackChunkpicapica_web_client=self.webpackChunkpicapica_web_client||[]).push([[183],{9435:function(e,t){t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",a=(e.type||"").toLowerCase(),l=a.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?l===t.replace(/\/.*$/,""):a===t}))}return!0}},9356:function(e,t,n){n.d(t,{T:function(){return l}});var r=n(7294),a=n(3097);function l({id:e}){return r.createElement("span",{className:"LoaderAnimation",id:e}," ",r.createElement(a.JO,{kind:"loader-5-line"}),r.createElement(a.JO,{kind:"loader-5-line"}))}},840:function(e,t,n){n.d(t,{C:function(){return a}});var r=n(7294);function a({left:e,right:t,instruction:n}){return r.createElement("div",{className:"StepActionBar"},r.createElement("div",{className:"left"},r.createElement("div",null,e)),r.createElement("div",{className:"instruction"},n),r.createElement("div",{className:"right"},r.createElement("div",null,t)))}},6769:function(e,t,n){n.d(t,{aW:function(){return c},nh:function(){return u},xE:function(){return s}});var r=n(1082),a=n(7294),l=n(6627),o=n(4761),i=n(3097);function c({to:e}){const t=(0,l.q)(m).next;return a.createElement(r.rU,{to:e,className:`NextButton ${o.E.BUTTON}`,title:t},a.createElement("span",{className:"text"},t),a.createElement(i.fd,{kind:"next"}))}function s({to:e}){const t=(0,l.q)(m).back;return a.createElement(r.rU,{to:e,className:`BackButton ${o.E.BUTTON}`,title:t},a.createElement(i.fd,{kind:"back"}),a.createElement("span",{className:"text"},t))}function u({to:e}){const t=(0,l.q)(m).start;return a.createElement(r.rU,{to:e,className:`StartButton ${o.E.BUTTON} ${o.E.GREEN}`,title:t},a.createElement("span",{className:"text"},t),a.createElement(i.fd,{kind:"next"}))}const m={en:{next:"Next",back:"Back",start:"Start"},de:{next:"Weiter",back:"Zurück",start:"Start"}}},1878:function(e,t,n){n.d(t,{n0:function(){return g},Px:function(){return m}});var r=n(1082),a=n(7294),l=n(4831),o=n(6627),i=n(5461),c=n(4761);function s({heading:e,children:t}){return a.createElement("div",{className:"Group"},a.createElement("div",{className:"group-heading"},e),a.createElement("div",{className:"group-container"},t))}var u=n(3097);function m(e,t){switch(e){case"submit":return(0,l.me)({urn:t});case"analysis":return(0,l.sF)({urn:t});case"checkout":return"/checkout/";case"results":return(0,l.bq)({urn:t});default:(0,i.vE)(e)}}const d=["submit","analysis","checkout","results"],f={submit:"upload",analysis:"analyse",checkout:"checkout",results:"results"};function p({current:e,sessionUrn:t,disableOthers:n}){const l=(0,o.q)(v);return a.createElement("span",{className:`StepSelector ${c.E.BUTTON_GROUP}`},d.filter((e=>"checkout"!==e)).map((o=>{const i=l[o];return n&&o!==e?a.createElement("span",{key:o,className:`${c.E.BUTTON} ${c.E.DISABLED}`,title:i},a.createElement(u.fd,{kind:f[o]}),a.createElement("span",{className:"text"},i)):a.createElement(r.rU,{key:o,to:m(o,t),className:`${c.E.BUTTON}${o===e?" "+c.E.ACTIVE:""}`,title:i},a.createElement(u.fd,{kind:f[o]}),a.createElement("span",{className:"text"},i))})))}function g({current:e,sessionUrn:t,disableOthers:n,children:r}){return a.createElement("div",{className:"StepSelectorGroup"},a.createElement(s,{heading:a.createElement("div",{className:"heading-wrapper"},a.createElement(p,{current:e,sessionUrn:t,disableOthers:n}))},r))}const v={en:{submit:"Upload",analysis:"Analysis",checkout:"Checkout",results:"Results"},de:{submit:"Hochladen",analysis:"Analyse",checkout:"Kasse",results:"Ergebnisse"}}},3252:function(e,t,n){n.d(t,{PT:function(){return l},jD:function(){return o},ww:function(){return i}});var r=n(603),a=n(495);function l(e,t){const n=new r.DeleteItemRequest;return n.setSessionUrn(e.urn),n.setItemUrn(t),{request:n,mutate(e){const n=(0,a.R3)(e);return n.itemsList=n.itemsList.filter((e=>e.urn!==t)),n}}}function o(e,t,n){const l=n.toObject(),o=new r.UpdateItemRequest;return o.setSessionUrn(e.urn),o.setItemUrn(t),o.setMeta(n),{request:o,mutate(e){const n=(0,a.R3)(e),r=n.itemsList.find((e=>e.urn===t));return r&&(r.meta=l),n}}}function i(e,t){const n=t.getResourcePairs(),l=n.map((e=>e.toObject())),o=new r.UpdateComparisonSetRequest;return o.setSessionUrn(e.urn),o.setComparisonsList(n),{request:o,mutate(e){const t=(0,a.R3)(e);return t.comparisonsList=l,t}}}},495:function(e,t,n){function r(e){return JSON.parse(JSON.stringify(e))}function a(){const e=Date.now();return{seconds:Math.floor(e/1e3),nanos:e%1e3*1e7}}function l(e,t){return e.seconds===t.seconds?e.nanos-t.nanos:e.seconds-t.seconds}function o(e){return[...e].sort(((e,t)=>{const n=e.createdAt,r=t.createdAt;return n||r?n?r?l(n,r)||e.urn.localeCompare(t.urn):1:-1:0}))}n.d(t,{R3:function(){return r},VN:function(){return a},a$:function(){return o},pv:function(){return l}})},3116:function(e,t,n){n.r(t),n.d(t,{Head:function(){return Ke},default:function(){return Je}});var r=n(7294);function a(e,t,n,r){return new(n||(n=Promise))((function(a,l){function o(e){try{c(r.next(e))}catch(t){l(t)}}function i(e){try{c(r.throw(e))}catch(t){l(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}c((r=r.apply(e,t||[])).next())}))}function l(e,t){var n,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(i){l=[6,i],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}Object.create;function o(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,l=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=l.next()).done;)o.push(r.value)}catch(i){a={error:i}}finally{try{r&&!r.done&&(n=l.return)&&n.call(l)}finally{if(a)throw a.error}}return o}Object.create;var i=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function c(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=i.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var s=[".DS_Store","Thumbs.db"];function u(e){return(null!==e.target&&e.target.files?f(e.target.files):[]).map((function(e){return c(e)}))}function m(e,t){return a(this,void 0,void 0,(function(){var n;return l(this,(function(r){switch(r.label){case 0:return e.items?(n=f(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(p))]):[3,2];case 1:return[2,d(g(r.sent()))];case 2:return[2,d(f(e.files).map((function(e){return c(e)})))]}}))}))}function d(e){return e.filter((function(e){return-1===s.indexOf(e.name)}))}function f(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function p(e){if("function"!=typeof e.webkitGetAsEntry)return v(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?h(t):v(e)}function g(e){return e.reduce((function(e,t){return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(o(arguments[t]));return e}(e,Array.isArray(t)?g(t):[t])}),[])}function v(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=c(t);return Promise.resolve(n)}function E(e){return a(this,void 0,void 0,(function(){return l(this,(function(t){return[2,e.isDirectory?h(e):y(e)]}))}))}function h(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var i=this;t.readEntries((function(t){return a(i,void 0,void 0,(function(){var a,i,c;return l(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return a=l.sent(),e(a),[3,4];case 3:return i=l.sent(),n(i),[3,4];case 4:return[3,6];case 5:c=Promise.all(t.map(E)),r.push(c),o(),l.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function y(e){return a(this,void 0,void 0,(function(){return l(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=c(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var b=n(9435);function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x="file-invalid-type",D="file-too-large",O="file-too-small",w="too-many-files",S=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:x,message:"File type must be ".concat(t)}},T=function(e){return{code:D,message:"File is larger than ".concat(e," bytes")}},C=function(e){return{code:O,message:"File is smaller than ".concat(e," bytes")}},U={code:w,message:"Too many files"};function F(e,t){var n="application/x-moz-file"===e.type||(0,b.Z)(e,t);return[n,n?null:S(t)]}function A(e,t,n){if(P(e.size))if(P(t)&&P(n)){if(e.size>n)return[!1,T(n)];if(e.size<t)return[!1,C(t)]}else{if(P(t)&&e.size<t)return[!1,C(t)];if(P(n)&&e.size>n)return[!1,T(n)]}return[!0,null]}function P(e){return null!=e}function I(e){var t=e.files,n=e.accept,r=e.minSize,a=e.maxSize,l=e.multiple,o=e.maxFiles;return!(!l&&t.length>1||l&&o>=1&&t.length>o)&&t.every((function(e){var t=k(F(e,n),1)[0],l=k(A(e,r,a),1)[0];return t&&l}))}function R(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function L(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function j(e){e.preventDefault()}function $(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function z(e){return-1!==e.indexOf("Edge/")}function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return $(e)||z(e)}function M(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return t.some((function(t){return!R(e)&&t&&t.apply(void 0,[e].concat(r)),R(e)}))}}var q=["children"],K=["open"],J=["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],H=["refKey","onChange","onClick"];function G(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Z(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||Z(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ee=(0,r.forwardRef)((function(e,t){var n=e.children,a=re(X(e,q)),l=a.open,o=X(a,K);return(0,r.useImperativeHandle)(t,(function(){return{open:l}}),[l]),r.createElement(r.Fragment,null,n(Y(Y({},o),{},{open:l})))}));ee.displayName="Dropzone";var te={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,(function(){return l(this,(function(t){return[2,(n=e,n.dataTransfer&&e.dataTransfer?m(e.dataTransfer,e.type):u(e))];var n}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null};ee.defaultProps=te;var ne={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Y(Y({},te),e),n=t.accept,a=t.disabled,l=t.getFilesFromEvent,o=t.maxSize,i=t.minSize,c=t.multiple,s=t.maxFiles,u=t.onDragEnter,m=t.onDragLeave,d=t.onDragOver,f=t.onDrop,p=t.onDropAccepted,g=t.onDropRejected,v=t.onFileDialogCancel,E=t.preventDropOnDocument,h=t.noClick,y=t.noKeyboard,b=t.noDrag,k=t.noDragEventsBubbling,N=t.validator,x=(0,r.useRef)(null),D=(0,r.useRef)(null),O=(0,r.useReducer)(ae,ne),w=_(O,2),S=w[0],T=w[1],C=S.isFocused,P=S.isFileDialogActive,$=S.draggedFiles,z=(0,r.useCallback)((function(){D.current&&(T({type:"openDialog"}),D.current.value=null,D.current.click())}),[T]),q=function(){P&&setTimeout((function(){D.current&&(D.current.files.length||(T({type:"closeDialog"}),"function"==typeof v&&v()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",q,!1),function(){window.removeEventListener("focus",q,!1)}}),[D,P,v]);var K=(0,r.useCallback)((function(e){x.current&&x.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),z()))}),[x,D]),Z=(0,r.useCallback)((function(){T({type:"focus"})}),[]),V=(0,r.useCallback)((function(){T({type:"blur"})}),[]),W=(0,r.useCallback)((function(){h||(B()?setTimeout(z,0):z())}),[D,h]),ee=(0,r.useRef)([]),re=function(e){x.current&&x.current.contains(e.target)||(e.preventDefault(),ee.current=[])};(0,r.useEffect)((function(){return E&&(document.addEventListener("dragover",j,!1),document.addEventListener("drop",re,!1)),function(){E&&(document.removeEventListener("dragover",j),document.removeEventListener("drop",re))}}),[x,E]);var le=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),de(e),ee.current=[].concat(G(ee.current),[e.target]),L(e)&&Promise.resolve(l(e)).then((function(t){R(e)&&!k||(T({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),u&&u(e))}))}),[l,u,k]),oe=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),de(e);var t=L(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&d&&d(e),!1}),[d,k]),ie=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),de(e);var t=ee.current.filter((function(e){return x.current&&x.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),ee.current=t,t.length>0||(T({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),L(e)&&m&&m(e))}),[x,m,k]),ce=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),de(e),ee.current=[],L(e)&&Promise.resolve(l(e)).then((function(t){if(!R(e)||k){var r=[],a=[];t.forEach((function(e){var t=_(F(e,n),2),l=t[0],c=t[1],s=_(A(e,i,o),2),u=s[0],m=s[1],d=N?N(e):null;if(l&&u&&!d)r.push(e);else{var f=[c,m];d&&(f=f.concat(d)),a.push({file:e,errors:f.filter((function(e){return e}))})}})),(!c&&r.length>1||c&&s>=1&&r.length>s)&&(r.forEach((function(e){a.push({file:e,errors:[U]})})),r.splice(0)),T({acceptedFiles:r,fileRejections:a,type:"setFiles"}),f&&f(r,a,e),a.length>0&&g&&g(a,e),r.length>0&&p&&p(r,e)}})),T({type:"reset"})}),[c,n,i,o,s,l,f,p,g,k,N]),se=function(e){return a?null:e},ue=function(e){return y?null:se(e)},me=function(e){return b?null:se(e)},de=function(e){k&&e.stopPropagation()},fe=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onKeyDown,l=e.onFocus,o=e.onBlur,i=e.onClick,c=e.onDragEnter,s=e.onDragOver,u=e.onDragLeave,m=e.onDrop,d=X(e,J);return Y(Y(Q({onKeyDown:ue(M(r,K)),onFocus:ue(M(l,Z)),onBlur:ue(M(o,V)),onClick:se(M(i,W)),onDragEnter:me(M(c,le)),onDragOver:me(M(s,oe)),onDragLeave:me(M(u,ie)),onDrop:me(M(m,ce))},n,x),a||y?{}:{tabIndex:0}),d)}}),[x,K,Z,V,W,le,oe,ie,ce,y,b,a]),pe=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),ge=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,a=e.onChange,l=e.onClick,o=X(e,H),i=Q({accept:n,multiple:c,type:"file",style:{display:"none"},onChange:se(M(a,ce)),onClick:se(M(l,pe)),autoComplete:"off",tabIndex:-1},r,D);return Y(Y({},i),o)}}),[D,n,c,ce,a]),ve=$.length,Ee=ve>0&&I({files:$,accept:n,minSize:i,maxSize:o,multiple:c,maxFiles:s}),he=ve>0&&!Ee;return Y(Y({},S),{},{isDragAccept:Ee,isDragReject:he,isFocused:C&&!a,getRootProps:fe,getInputProps:ge,rootRef:x,inputRef:D,open:se(z)})}function ae(e,t){switch(t.type){case"focus":return Y(Y({},e),{},{isFocused:!0});case"blur":return Y(Y({},e),{},{isFocused:!1});case"openDialog":return Y(Y({},e),{},{isFileDialogActive:!0});case"closeDialog":return Y(Y({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var n=t.isDragActive,r=t.draggedFiles;return Y(Y({},e),{},{draggedFiles:r,isDragActive:n});case"setFiles":return Y(Y({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return Y({},ne);default:return e}}var le=n(2877),oe=n(9697),ie=n(3148),ce=n(6627);function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se.apply(this,arguments)}var ue=n(5461),me=n(4761),de=n(3097);const fe=["file","url","text"];function pe({onAdd:e,accept:t}){const n=(0,ce.q)(ye),[a,l]=(0,r.useState)("file"),o=(0,r.useRef)(null),i=(0,r.useCallback)((e=>{var t;l(e),null===(t=o.current)||void 0===t||t.open()}),[o,l]),c=(0,r.useCallback)((()=>{var e;return null===(e=o.current)||void 0===e?void 0:e.close()}),[o]),s=(0,r.useCallback)((async t=>{e(t)}),[e]),u=(0,r.useCallback)((e=>{s(e.map(ie.DJ.fromFile)).then((()=>{c()}))}),[s,c]);(0,r.useEffect)((()=>{const e=function(){const e=function(){switch(location.hash){case"#file":return"file";case"#url":return"url";case"#text":return"text";default:return}}();e&&(location.hash="");return e}();e&&i(e)}),[i]);const[m,d]=function(e,t){const n=(0,r.useRef)(null),a=(0,r.useCallback)((()=>{var e;null===(e=n.current)||void 0===e||e.click()}),[n]),l=(0,r.useCallback)((t=>{if(t.stopPropagation(),t.preventDefault(),t.target.files){const n=function(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n]);return t}(t.target.files);n.length>0&&e(n)}}),[e]);return[a,r.createElement("input",se({type:"file",ref:n,style:{display:"none"},onChange:l},t))]}(u,{multiple:!0,accept:t}),f={file(){return r.createElement(ge,{close:c,openFiles:m})},url(){return r.createElement(ve,{close:c,submit:s})},text(){return r.createElement(Ee,{close:c,submit:s})}};return r.createElement("span",{className:"AddItem"},r.createElement("button",{className:`${me.E.BUTTON} green big-plus`,onClick:()=>i(a)},r.createElement(de.JO,{kind:"add-line"})),r.createElement("span",{className:"group"},r.createElement("span",{className:me.E.BUTTON_GROUP},r.createElement("button",{className:`${me.E.BUTTON} green`,onClick:m},r.createElement(de.fd,{kind:"file"}),r.createElement("span",{className:"text"},n.file)),r.createElement("button",{className:`${me.E.BUTTON} green`,onClick:()=>i("url")},r.createElement(de.fd,{kind:"url"}),r.createElement("span",{className:"text"},n.url)),r.createElement("button",{className:`${me.E.BUTTON} green`,onClick:()=>i("text")},r.createElement(de.fd,{kind:"text"}),r.createElement("span",{className:"text"},n.text)))),d,r.createElement(oe.Z,{ref:o,modal:!0,closeOnDocumentClick:!0,closeOnEscape:!0,className:"AddItemModal"},r.createElement("div",{className:"modal"},r.createElement("div",{className:"tabs"},fe.map((e=>r.createElement("button",{key:e,className:"tab"+(a===e?" active":""),onClick:()=>l(e)},r.createElement(de.fd,{kind:e}),r.createElement("span",{className:"long"},n[`modal-tab-${e}-long`]),r.createElement("span",{className:"short"},n[`modal-tab-${e}-short`])))),r.createElement("button",{className:"close",onClick:c},r.createElement(de.JO,{kind:"close-line"}))),f[a]())))}function ge({close:e,openFiles:t}){const n=(0,ce.q)(ye);return r.createElement(r.Fragment,null,r.createElement("div",{className:"modal-content"},r.createElement("label",null,n.file),r.createElement("button",{className:me.E.BUTTON,onClick:t},n.chooseFiles),r.createElement("p",{className:"hint"},n.dragAndDropHint)),r.createElement(he,{close:e,add:t}))}function ve({close:e,submit:t}){const n=(0,ce.q)(ye),[a,l]=(0,r.useState)(""),[o,i]=(0,r.useState)("");function c(){/^\s*$/.test(a)?i(n.emptyUrlError):(0,ue.jv)(a)?(i(""),t([ie.DJ.fromUrl(a)]).then((()=>{l(""),e()}))):i(n.invalidUrlError)}return r.createElement(r.Fragment,null,r.createElement("div",{className:"modal-content"},r.createElement("label",{htmlFor:"urlInput"},n.url),r.createElement("input",{id:"urlInput",type:"url",value:a,placeholder:"https://",autoFocus:!0,onChange:e=>l(e.target.value),onKeyPress:e=>{"Enter"===e.key&&c()},spellCheck:!1}),!!o&&r.createElement("p",{className:"error"},o)),r.createElement(he,{close:e,add:c}))}function Ee({close:e,submit:t}){const n=(0,ce.q)(ye),[a,l]=(0,r.useState)(""),[o,i]=(0,r.useState)("");return r.createElement(r.Fragment,null,r.createElement("div",{className:"modal-content"},r.createElement("label",{htmlFor:"textInput"},n.text),r.createElement("textarea",{id:"textInput",value:a,autoFocus:!0,onChange:e=>l(e.target.value),spellCheck:!1}),!!o&&r.createElement("p",{className:"error"},o)),r.createElement(he,{close:e,add:function(){/^\s*$/.test(a)?i(n.emptyTextError):(i(""),t([ie.DJ.fromText(a)]).then((()=>{l(""),e()})))}}))}function he({close:e,add:t}){const n=(0,ce.q)(ye);return r.createElement("div",{className:"ModalFooter"},r.createElement("button",{className:`${me.E.BUTTON}`,onClick:e},n.cancel),!!t&&r.createElement("button",{className:`${me.E.BUTTON} ${me.E.GREEN}`,onClick:t},r.createElement(de.JO,{kind:"add-line"}),n.add))}const ye={en:{file:"Files",url:"URL",text:"Text","modal-tab-file-long":"Upload files","modal-tab-url-long":"Submit URL","modal-tab-text-long":"Paste text","modal-tab-file-short":"Files","modal-tab-url-short":"URL","modal-tab-text-short":"Text",cancel:"Cancel",add:"Add",chooseFiles:"Choose files",dragAndDropHint:"Hint: You can also drag and drop files into this window to upload them.",emptyTextError:"No text provided. Please paste some text.",emptyUrlError:"No URL provided. Please enter a URL.",invalidUrlError:"Invalid URL. Please enter a valid URL."},de:{file:"Dateien",url:"URL",text:"Text","modal-tab-file-long":"Dateien hochladen","modal-tab-url-long":"URL eingeben","modal-tab-text-long":"Text einfügen","modal-tab-file-short":"Dateien","modal-tab-url-short":"URL","modal-tab-text-short":"Text",cancel:"Abbrechen",add:"Hinzufügen",chooseFiles:"Dateien auswählen",dragAndDropHint:"Hinweis: Sie können Dateien auch in dieses Fenster ziehen, um sie hochzuladen.",emptyTextError:"Kein Text. Bitte fügen Sie Text ein.",emptyUrlError:"Keine URL. Bitte geben Sie eine URL ein.",invalidUrlError:"Ungültige URL. Bitte Sie geben eine gültige URL ein."}};var be=n(477);function ke(){return ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ke.apply(this,arguments)}function Ne(e){const[t,n]=(0,r.useState)(!1),a=(0,r.useCallback)((()=>n((e=>!e))),[n]);return r.createElement("div",{className:"EditInput"},t?r.createElement(xe,ke({},e,{toggleIsEditing:a})):r.createElement(De,{text:e.text,toggleIsEditing:a}))}function xe(e){const[t,n]=(0,r.useState)(e.text),[a,l]=(0,r.useState)(),o=(0,r.useRef)(null),i=t=>{if(e.validate){const r=e.validate(t);if(r)return l(r),null===(n=o.current)||void 0===n||n.open(),!1}var n,r;return a&&(l(void 0),null===(r=o.current)||void 0===r||r.close()),!0},c=()=>{i(t)&&(e.toggleIsEditing(),e.onSubmit(t))};return r.createElement("div",{className:`EditView ${me.E.BUTTON_GROUP}`},r.createElement(oe.Z,{position:"top center",ref:o,className:"error-popup",on:[],trigger:r.createElement("input",{className:`${me.E.NON_BUTTON} ${me.E.SMALL}${a?" error":""}`,autoFocus:!0,type:"text",value:t,onChange:e=>{n(e.target.value),a&&i(e.target.value)},onKeyPress:e=>{"Enter"===e.key&&c()},onKeyUp:t=>{"Escape"===t.key&&e.toggleIsEditing()}})},r.createElement("span",null,null!=a?a:"")),r.createElement("button",{className:`accept ${me.E.BUTTON} ${me.E.SMALL}`,onClick:c},r.createElement(de.JO,{kind:"check-line"})),r.createElement("button",{className:`cancel ${me.E.BUTTON} ${me.E.SMALL}`,onClick:e.toggleIsEditing},r.createElement(de.JO,{kind:"close-line"})))}function De({text:e,toggleIsEditing:t}){return r.createElement("div",{className:"TextView"},r.createElement("span",{className:"text"},r.createElement("span",null,e.replace(/[\r\n]+/g," "))),t&&r.createElement("button",{className:`edit ${me.E.BUTTON} ${me.E.SMALL}`,onClick:t},r.createElement(de.fd,{kind:"rename"})))}var Oe=n(6006),we=n(8721),Se=n(3252),Te=n(693),Ce=n(495),Ue=n(9356);function Fe({session:e,uploading:t,failed:n,removeFailed:a,update:l}){const o=(0,r.useContext)(be.d),i=(0,ce.q)(Pe),c=(0,Ce.a$)(e.itemsList).reverse();const s=(0,r.useCallback)((e=>!!/^\s*$/.test(e)&&i.emptyItemName),[i]);return r.createElement("table",{className:"ItemTable"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{className:"name",colSpan:2},i.file),r.createElement("th",{className:"size"},i.size),r.createElement("th",{className:"action"}))),r.createElement("tbody",null,[...n].sort(((e,t)=>(0,Ce.pv)(e.startTimestamp,t.startTimestamp))).map((({item:e,uploadId:t},n)=>r.createElement("tr",{key:t,className:"failed-item"+(0===n?" first":"")},r.createElement("td",{className:"icon"},r.createElement(de.fd,{kind:"failed"})),r.createElement("td",{className:"name"},r.createElement(De,{text:e.name})),r.createElement("td",{className:"size"},r.createElement("span",{className:"size"},Ae(e.size,o))),r.createElement("td",{className:"action"},r.createElement("button",{className:`delete ${me.E.BUTTON} ${me.E.SMALL} ${me.E.RED}`,onClick:()=>a(t)},r.createElement(de.fd,{kind:"delete"}),r.createElement("span",{className:"text"},i.delete)))))),[...t].sort(((e,t)=>-(0,Ce.pv)(e.startTimestamp,t.startTimestamp))).map((({item:e,uploadId:t},n)=>r.createElement("tr",{key:t,className:"uploading-item"+(0===n?" first":"")},r.createElement("td",{className:"icon"},r.createElement(Ue.T,null)),r.createElement("td",{className:"name"},r.createElement(De,{text:e.name})),r.createElement("td",{className:"size"},r.createElement("span",{className:"size"},Ae(e.size,o))),r.createElement("td",{className:"action"})))),c.map(((t,n)=>{var a,c,u,m,d,f,p;return r.createElement("tr",{key:t.urn,className:"session-item"+(0===n?" first":"")},r.createElement("td",{className:"icon"},r.createElement(de.wy,{type:null!==(a=null===(c=t.resource)||void 0===c?void 0:c.type)&&void 0!==a?a:Oe.Item.Resource.Type.TYPE_UNSPECIFIED})),r.createElement("td",{className:"name"},r.createElement(Ne,{text:null!==(u=null===(m=t.meta)||void 0===m?void 0:m.name)&&void 0!==u?u:"",onSubmit:n=>function(t,n){var r;if(n=n.replace(/\s+/g," ").trim(),(null===(r=t.meta)||void 0===r?void 0:r.name)===n)return;const a=new Oe.Item.Metadata;a.setName(n);const{mutate:o,request:i}=(0,Se.jD)(e,t.urn,a);l((0,Te.M)().updateItem(i,null).then(ue.ZT,(e=>{console.log(e)})),o)}(t,n),validate:s})),r.createElement("td",{className:"size"},r.createElement("span",{className:"size"},Ae(null!==(d=null===(f=t.resource)||void 0===f||null===(p=f.rawProperties)||void 0===p?void 0:p.size)&&void 0!==d?d:0,o))),r.createElement("td",{className:"action"},r.createElement("button",{className:`delete ${me.E.BUTTON} ${me.E.SMALL} ${me.E.RED}`,onClick:()=>function(t){const{mutate:n,request:r}=(0,Se.PT)(e,t.urn);l((0,Te.M)().deleteItem(r,null).then(ue.ZT,(e=>{console.log(e)})),n)}(t)},r.createElement(de.fd,{kind:"delete"}),r.createElement("span",{className:"text"},i.delete))))})),0===c.length&&0===t.length&&0===n.length&&r.createElement("tr",null,r.createElement("td",{className:"empty",colSpan:4},r.createElement("em",null,i.emptyItemList)))))}function Ae(e,t){let n;e<100?n="byte":e<1e6?(n="kilobyte",e/=1e3):(n="megabyte",e/=1e6);return new Intl.NumberFormat((0,we.ME)(t),{maximumSignificantDigits:2,style:"unit",unit:n}).format(e)}const Pe={en:{emptyItemList:"Empty",file:"File",size:"Size",delete:"Delete",emptyItemName:"The file name cannot be empty."},de:{emptyItemList:"Leer",file:"Datei",size:"Größe",delete:"Löschen",emptyItemName:"Der Name kann nicht leer sein."}};var Ie=n(6208),Re=n(7601),Le=n(8252),je=n(840),$e=n(6769),ze=n(1878),Be=n(9067),Me=n(4918),qe=n(3124);const Ke=()=>r.createElement(r.Fragment,null,r.createElement("title",null,"Picapica"),r.createElement("meta",{name:"robots",content:"noindex"}),r.createElement(Le.s,null));var Je=(0,Be.kj)((function(){var e;const t=(0,ce.q)(_e),{sendAlert:n}=(0,le.V)(),[a,l]=(0,Me.K6)(),o="Ready"===a.type,i=(0,r.useCallback)((e=>{l(Promise.resolve(),function({item:e,itemUrn:t}){return n=>{const r=(0,Ce.R3)(n),a=Date.now()/1e3,l=Math.floor(a),o={nanos:1e10*(a-l),seconds:l};return r.itemsList.push({urn:t,createdAt:o,modifiedAt:o,meta:{name:e.name},resource:{itemUrn:t,type:(0,ie.J6)(e.type),status:Oe.Item.Resource.ProcessingStatus.STATUS_RUNNING,rawProperties:{checksum:"fake",size:e.size},textProperties:{checksum:"fake",length:0}}}),r.comparisonsList.push({urnA:t,urnB:r.urn}),r}}(e))}),[l]),{uploading:c,upload:s,failed:u,removeFailed:m}=function(e){const[t,n]=(0,r.useState)([]),[a,l]=(0,r.useState)([]),[o,i]=(0,r.useState)([]),c=(0,r.useCallback)((e=>i((t=>[...t,e]))),[i]),s=(0,r.useCallback)((e=>i((t=>t.filter((t=>t.uploadId!==e))))),[i]),u=(0,r.useCallback)((e=>{l((t=>[...t,e])),n((t=>t.filter((t=>t.uploadId!==e.item.uploadId))))}),[n,l]),m=(0,r.useCallback)(((e,t)=>{if(0===e.length)return;const r=e.map((e=>{const n={uploadId:(0,qe.Z)(),item:e.getMeta(),startTimestamp:(0,Ce.VN)()};return e.read().then((async e=>{const n=e.getRequest(t);return n.addComparisonUrns(t),(await(0,Te.M)().createItem(n,null)).getItemUrn()})).then((e=>u({item:n,result:{type:"Ok",value:e}})),(e=>u({item:n,result:{type:"Error",error:e}}))),n}));n((e=>[...e,...r]))}),[n,u]);return(0,r.useEffect)((()=>{if(a.length>0){for(const{item:t,result:n}of a)"Ok"===n.type?e({...t,itemUrn:n.value}):c({...t,error:n.error});l([])}}),[a,l,e,c]),{uploading:t,upload:m,failed:o,removeFailed:s}}(i),d=!(o&&a.session.itemsList.length>0)&&0===c.length&&0===u.length,[f,p]=(0,r.useState)(!0);(0,r.useEffect)((()=>{d||p(!1)}),[d,p]);const g=(0,Me.PK)(a),v=(0,r.useCallback)((e=>{g&&o?s(e.map(ie.DJ.fromFile),g):n({type:"error",message:t.cannotDropUntilReady})}),[g,o,s,n,t]),E=re({accept:He,multiple:!0,disabled:!o,onDrop:v,noClick:!0});return r.createElement(Ie.T,{className:"Submit",title:t.title,header:"small",dropState:E},r.createElement(ze.n0,{sessionUrn:null!==(e=(0,Me.PK)(a))&&void 0!==e?e:"",current:"submit",disableOthers:"Ready"!==a.type||0===a.session.itemsList.length},r.createElement(Re.sM,{state:a,onReady:({session:e})=>{const n=r.createElement(pe,{onAdd:t=>s(t,e.urn),accept:He});return r.createElement(r.Fragment,null,r.createElement("button",{onClick:()=>s([ie.DJ.fromText(Ge())],e.urn),style:{display:"none",position:"absolute",opacity:".4",zIndex:1e3}},"Random Text"),d&&f?r.createElement(r.Fragment,null,r.createElement("div",{className:"blank-session"},n,r.createElement("div",{className:"spacer"}),r.createElement("span",{className:"pseudo-tooltip"},t.addItemHint))):r.createElement(r.Fragment,null,r.createElement(je.C,{left:n,right:r.createElement($e.aW,{to:(0,ze.Px)("analysis",e.urn)}),instruction:t.instruction}),r.createElement(Fe,{session:e,uploading:c,failed:u,removeFailed:m,update:l})))}})))}));const He=[".pdf","application/pdf",".doc",".docx","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"].join(",");function Ge(){const e=10**(6.5*Math.random());let t=String.fromCodePoint(65+Math.floor(26*Math.random())),n=!1;for(let r=0;r<e;r++)!n&&Math.random()<.01?(t+="\n",n=!0):!n&&Math.random()<1/4?(t+=" ",n=!0):(t+=String.fromCodePoint(65+Math.floor(26*Math.random())),n=!1);return t}const _e={en:{title:"Upload - Picapica",instruction:"Add more files, or proceed",addItemHint:"Click here to upload documents.",cannotDropUntilReady:"You cannot upload files until the session is fully loaded. Please wait until the session is loaded and try again."},de:{title:"Hochladen - Picapica",instruction:"Es können weitere Dateien hinzugefügt werden",addItemHint:"Hier klicken, um Dokumente hochzuladen.",cannotDropUntilReady:"Sie können keine Dateien hochladen bis die Seite vollständig geladen ist. Bitte warten Sie bis die Seite geladen ist und versuchen Sie es erneut."}}}}]);
//# sourceMappingURL=component---src-pages-submit-tsx-968a6e8e8dcc06320331.js.map