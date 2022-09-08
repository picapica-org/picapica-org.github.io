"use strict";(self.webpackChunkpicapica_web_client=self.webpackChunkpicapica_web_client||[]).push([[67],{4535:function(e,t,n){n.d(t,{hu:function(){return m},__:function(){return l},Rk:function(){return u}});var r=n(7294),s=n(6856),c=n(8385);const a={en:{core_fulltext_languagenameenglish:{title:"CORE - The world's largest collection of open-access research papers"}},de:{core_fulltext_languagenameenglish:{title:"CORE - The world's largest collection of open-access research papers"}}},o={};var i=n(376);function l(e){return r.createElement("span",{className:"Label"},e.icon&&r.createElement(i.fd,{kind:e.icon}),r.createElement("span",{className:"text"},e.text))}function u(){const e=(0,c.ql)(d);return r.createElement(l,{icon:"upload",text:e.submittedFiles})}function m(e){const{urn:t,collection:n}=function(e){if("collection"in e)return{urn:s.f.parse(e.collection.urn),collection:e.collection};{var t;let n,r;if("string"==typeof e.collectionUrn){const t=s.f.tryParse(e.collectionUrn);if(!t||"collection"!==t.type)return{urn:void 0,collection:void 0};n=t,r=e.collectionUrn}else n=e.collectionUrn,r=s.f.stringify(n);return{urn:n,collection:null===(t=e.collections)||void 0===t?void 0:t.find((e=>e.urn===r))}}}(e),{title:i}=function(e){const t=(0,c.ql)(a),n="string"==typeof e?s.f.tryParse(e):e;if(n&&"collection"===n.type){const e=t[n.collectionId];if(e)return e}return o}(t);return i?r.createElement(l,{text:i}):null!=n&&n.properties?r.createElement(l,{text:`${n.properties.name} - ${n.properties.description}`}):r.createElement(E,null)}function E(){const e=(0,c.ql)(d);return r.createElement(l,{text:e.unknown})}const d={en:{submittedFiles:"Your submitted files",unknown:"Unknown"},de:{submittedFiles:"Ihre eingereichten Dateien",unknown:"Unbekannt"}}},2974:function(e,t,n){n.d(t,{C:function(){return s}});var r=n(7294);function s({left:e,right:t,instruction:n}){return r.createElement("div",{className:"StepActionBar"},r.createElement("div",{className:"left"},r.createElement("div",null,e)),r.createElement("div",{className:"instruction"},n),r.createElement("div",{className:"right"},r.createElement("div",null,t)))}},2639:function(e,t,n){n.d(t,{aW:function(){return i},xE:function(){return l},nh:function(){return u}});var r=n(5444),s=n(7294),c=n(8385),a=n(1874),o=n(376);function i({to:e}){const t=(0,c.ql)(m).next;return s.createElement(r.rU,{to:e,className:`NextButton ${a.E.BUTTON}`,title:t},s.createElement("span",{className:"text"},t),s.createElement(o.fd,{kind:"next"}))}function l({to:e}){const t=(0,c.ql)(m).back;return s.createElement(r.rU,{to:e,className:`BackButton ${a.E.BUTTON}`,title:t},s.createElement(o.fd,{kind:"back"}),s.createElement("span",{className:"text"},t))}function u({to:e}){const t=(0,c.ql)(m).start;return s.createElement(r.rU,{to:e,className:`StartButton ${a.E.BUTTON} ${a.E.GREEN}`,title:t},s.createElement("span",{className:"text"},t),s.createElement(o.fd,{kind:"next"}))}const m={en:{next:"Next",back:"Back",start:"Start"},de:{next:"Weiter",back:"Zurück",start:"Start"}}},5795:function(e,t,n){n.d(t,{n0:function(){return p},Px:function(){return m}});var r=n(5444),s=n(7294),c=n(1194),a=n(8385),o=n(3046),i=n(1874);function l({heading:e,children:t}){return s.createElement("div",{className:"Group"},s.createElement("div",{className:"group-heading"},e),s.createElement("div",{className:"group-container"},t))}var u=n(376);function m(e,t){switch(e){case"submit":return(0,c.me)({urn:t});case"analysis":return(0,c.sF)({urn:t});case"checkout":return"/checkout/";case"results":return(0,c.bq)({urn:t});default:(0,o.vE)(e)}}const E=["submit","analysis","checkout","results"],d={submit:"upload",analysis:"analyse",checkout:"checkout",results:"results"};function f({current:e,sessionUrn:t,disableOthers:n}){const c=(0,a.ql)(h);return s.createElement("span",{className:`StepSelector ${i.E.BUTTON_GROUP}`},E.filter((e=>"checkout"!==e)).map((a=>{const o=c[a];return n&&a!==e?s.createElement("span",{key:a,className:`${i.E.BUTTON} ${i.E.DISABLED}`,title:o},s.createElement(u.fd,{kind:d[a]}),s.createElement("span",{className:"text"},o)):s.createElement(r.rU,{key:a,to:m(a,t),className:`${i.E.BUTTON}${a===e?" "+i.E.ACTIVE:""}`,title:o},s.createElement(u.fd,{kind:d[a]}),s.createElement("span",{className:"text"},o))})))}function p({current:e,sessionUrn:t,disableOthers:n,children:r}){return s.createElement("div",{className:"StepSelectorGroup"},s.createElement(l,{heading:s.createElement("div",{className:"heading-wrapper"},s.createElement(f,{current:e,sessionUrn:t,disableOthers:n}))},r))}const h={en:{submit:"Upload",analysis:"Analysis",checkout:"Checkout",results:"Results"},de:{submit:"Hochladen",analysis:"Analyse",checkout:"Kasse",results:"Ergebnisse"}}},8807:function(e,t,n){n.d(t,{PT:function(){return c},jD:function(){return a},ww:function(){return o}});var r=n(1038),s=n(7653);function c(e,t){const n=new r.DeleteItemRequest;return n.setSessionUrn(e.urn),n.setItemUrn(t),{request:n,mutate(e){const n=(0,s.R3)(e);return n.itemsList=n.itemsList.filter((e=>e.urn!==t)),n}}}function a(e,t,n){const c=n.toObject(),a=new r.UpdateItemRequest;return a.setSessionUrn(e.urn),a.setItemUrn(t),a.setMeta(n),{request:a,mutate(e){const n=(0,s.R3)(e),r=n.itemsList.find((e=>e.urn===t));return r&&(r.meta=c),n}}}function o(e,t){const n=t.getResourcePairs(),c=n.map((e=>e.toObject())),a=new r.UpdateComparisonSetRequest;return a.setSessionUrn(e.urn),a.setComparisonsList(n),{request:a,mutate(e){const t=(0,s.R3)(e);return t.comparisonsList=c,t}}}},7653:function(e,t,n){function r(e){return JSON.parse(JSON.stringify(e))}function s(){const e=Date.now();return{seconds:Math.floor(e/1e3),nanos:e%1e3*1e7}}function c(e,t){return e.seconds===t.seconds?e.nanos-t.nanos:e.seconds-t.seconds}function a(e){return[...e].sort(((e,t)=>{const n=e.createdAt,r=t.createdAt;return n||r?n?r?c(n,r)||e.urn.localeCompare(t.urn):1:-1:0}))}n.d(t,{R3:function(){return r},VN:function(){return s},pv:function(){return c},a$:function(){return a}})},9377:function(e,t,n){n.d(t,{b:function(){return a}});var r=n(3467),s=n(1038),c=n(2440);function a(e){return[(0,r.useQuery)(["collections",e],{refetchInterval:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,queryFn:async()=>{const t=new s.GetCollectionsRequest;t.setSessionUrn(e);return(await(0,c.M)().getCollections(t,null)).toObject().collectionsList}}).data]}},9198:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(7294),s=n(5186),c=n(1874),a=n(376),o=n(4535),i=n(9539),l=n(1277),u=n(9528),m=n(2974),E=n(2639),d=n(5795),f=n(5572),p=n(8664),h=n(8807),N=n(3046),T=n(6856);class w{constructor(e,t,n){this.groupA=e,this.groupB=t,this.collections=n}withGroupA(e){return new w(e,this.groupB,this.collections)}withGroupB(e){return new w(this.groupA,e,this.collections)}withCollections(e){return new w(this.groupA,this.groupB,e)}withCollection(e,t){const n=new Map(this.collections);return n.set(e,t),this.withCollections(n)}static fromResourcePairs(e,t){const n=new Set,r=new Set,s=new Map;function c(e,t){let n=s.get(e);void 0===n&&(n=new Set,s.set(e,n)),n.add(t)}function a(e){const n=U(e);return"item"===n?[e]:"session"===n?t:[]}for(const o of e){const[e,t]=o instanceof f.ResourcePair?[o.getUrnA(),o.getUrnB()]:[o.urnA,o.urnB],s=U(e),i=U(t);"collection"!==s?"collection"!==i?(a(e).forEach((e=>n.add(e))),a(t).forEach((e=>r.add(e)))):a(e).forEach((e=>c(t,e))):a(t).forEach((t=>c(e,t)))}return new w(n,r,s)}getResourcePairs(){const e=[],t=new Set,n=new Set;for(const r of this.groupA)for(const s of this.groupB)r===s||(t.add(r),n.add(s),e.push((new f.ResourcePair).setUrnA(r).setUrnB(s)));for(const r of this.groupA)t.has(r)||e.push((new f.ResourcePair).setUrnA(r).setUrnB(T.s));for(const r of this.groupB)n.has(r)||e.push((new f.ResourcePair).setUrnA(T.s).setUrnB(r));for(const[r,s]of this.collections)for(const t of s)e.push((new f.ResourcePair).setUrnA(r).setUrnB(t));return e}}function U(e){try{return T.f.parse(e).type}catch(t){return}}(w||(w={})).EMPTY=new w(N.a4,N.a4,N.wO);var v=n(2440),g=n(7653),k=n(9377),B=n(8385),O=n(5009);function C(){return r.createElement(r.Fragment,null,(0,p.D8)((()=>r.createElement(b,null))),r.createElement(u.s,null),r.createElement(s.q,null,r.createElement("title",null,"Picapica")))}function b(){const e=(0,B.ql)(I),[t,n]=(0,O.zU)(),[s]=(0,k.b)((0,O.PK)(t)),c=(0,r.useCallback)((e=>{if("Ready"===t.type){const{mutate:r,request:s}=(0,h.ww)(t.session,e);n((0,v.M)().updateComparisonSet(s,null).then(N.ZT),r)}}),[t,n]),a=(0,r.useMemo)((()=>{var e;return"Ready"===t.type?w.fromResourcePairs(null!==(e=t.session.comparisonsList)&&void 0!==e?e:N.LZ,t.session.itemsList.map((e=>e.urn))):w.EMPTY}),[t]);return r.createElement(i.T,{className:"Analysis",header:"small"},r.createElement(d.n0,{sessionUrn:(0,O.PK)(t),current:"analysis"},r.createElement(l.sM,{state:t,onReady:({session:t})=>r.createElement(r.Fragment,null,r.createElement(m.C,{left:r.createElement(E.xE,{to:(0,d.Px)("submit",t.urn)}),right:r.createElement(E.nh,{to:(0,d.Px)("results",t.urn)}),instruction:e.instruction}),r.createElement(y,{session:t,config:a,update:c}),(null!=s?s:[]).map((n=>r.createElement(A,{key:n.urn,session:t,config:a,update:c,collection:n,instruction:e.wikipediaInstruction}))),r.createElement(m.C,{left:r.createElement(E.xE,{to:(0,d.Px)("submit",t.urn)}),right:r.createElement(E.nh,{to:(0,d.Px)("results",t.urn)}),instruction:""}))})))}function y({session:e,config:t,update:n}){const s=(0,B.ql)(I),i=(0,g.a$)(e.itemsList),l=i.map((e=>e.urn)),u=l.every((e=>t.groupA.has(e))),m=l.every((e=>t.groupB.has(e))),E=u&&m,d=l.every((e=>!t.groupA.has(e)&&!t.groupB.has(e))),p="inactive";return r.createElement("div",{className:"ItemConfig"},r.createElement("div",{className:"heading"},r.createElement("span",{className:"title"},r.createElement(o.Rk,null)),r.createElement("span",{className:"buttons"},r.createElement("span",{className:c.E.BUTTON_GROUP},r.createElement("button",{className:`${c.E.BUTTON} ${E?c.E.ACTIVE:p}`,onClick:function(){const e=t.withGroupA(new Set(l)).withGroupB(new Set(l));n(e)}},s.all),r.createElement("button",{className:`${c.E.BUTTON} ${d?c.E.ACTIVE:p}`,onClick:function(){const e=t.withGroupA(N.a4).withGroupB(N.a4);n(e)}},s.none)))),r.createElement("div",{className:"content"},r.createElement("div",{className:"instruction"},s.itemInstruction),r.createElement("div",{className:"table"},r.createElement("div",{className:c.E.BUTTON_GROUP},r.createElement("span",{className:c.E.NON_BUTTON},s.file),r.createElement("button",{className:`${c.E.BUTTON} ${u?c.E.ACTIVE:p}`,onClick:function(){const e=t.withGroupA(new Set(l));n(e)}},"A"),r.createElement("button",{className:`${c.E.BUTTON} ${m?c.E.ACTIVE:p}`,onClick:function(){const e=t.withGroupB(new Set(l));n(e)}},"B")),i.map((e=>{var s,o,i;const l=t.groupA.has(e.urn),u=t.groupB.has(e.urn);return r.createElement("div",{key:e.urn,className:c.E.BUTTON_GROUP},r.createElement("span",{className:c.E.NON_BUTTON},r.createElement(a.wy,{type:null!==(s=null===(o=e.resource)||void 0===o?void 0:o.type)&&void 0!==s?s:f.Item.Resource.Type.TYPE_UNSPECIFIED}),null===(i=e.meta)||void 0===i?void 0:i.name),r.createElement("button",{className:`${c.E.BUTTON} ${l?c.E.ACTIVE:p}`,onClick:()=>function(e){const r=t.withGroupA($(t.groupA,e));n(r)}(e.urn)},"A"),r.createElement("button",{className:`${c.E.BUTTON} ${u?c.E.ACTIVE:p}`,onClick:()=>function(e){const r=t.withGroupB($(t.groupB,e));n(r)}(e.urn)},"B"))})))))}function A({session:e,config:t,collection:n,instruction:s,update:i}){var l;const u=(0,B.ql)(I),m=null!==(l=t.collections.get(n.urn))&&void 0!==l?l:N.a4,E=(0,g.a$)(e.itemsList),d=E.map((e=>e.urn)),p=d.every((e=>m.has(e))),h=d.every((e=>!m.has(e))),T="inactive";function w(){const e=t.withCollection(n.urn,new Set(d));i(e)}function U(){const e=t.withCollection(n.urn,N.a4);i(e)}function v(e){const r=t.withCollection(n.urn,$(m,e));i(r)}return r.createElement("div",{className:"CollectionConfig"},r.createElement("div",{className:"heading"},r.createElement("span",{className:"title"},r.createElement(o.hu,{collectionUrn:n.urn})),r.createElement("span",{className:"buttons"},r.createElement("span",{className:c.E.BUTTON_GROUP},r.createElement("button",{className:`${c.E.BUTTON} ${p?c.E.ACTIVE:T}`,onClick:w},u.all),r.createElement("button",{className:`${c.E.BUTTON} ${h?c.E.ACTIVE:T}`,onClick:U},u.none)))),r.createElement("div",{className:"content"},r.createElement("div",{className:"instruction"},s),r.createElement("div",{className:"table"},r.createElement("div",{className:c.E.BUTTON_GROUP},r.createElement("span",{className:c.E.NON_BUTTON},u.file),r.createElement("button",{className:`${c.E.BUTTON} ${p?c.E.ACTIVE:T}`,onClick:w},r.createElement(a.JO,{kind:"check-line"})),r.createElement("button",{className:`${c.E.BUTTON} ${h?c.E.ACTIVE:T}`,onClick:U},r.createElement(a.JO,{kind:"close-line"}))),E.map((e=>{var t,n,s;const o=m.has(e.urn);return r.createElement("div",{key:e.urn,className:c.E.BUTTON_GROUP},r.createElement("span",{className:c.E.NON_BUTTON},r.createElement(a.wy,{type:null!==(t=null===(n=e.resource)||void 0===n?void 0:n.type)&&void 0!==t?t:f.Item.Resource.Type.TYPE_UNSPECIFIED}),null===(s=e.meta)||void 0===s?void 0:s.name),r.createElement("button",{className:`${c.E.BUTTON} ${o?c.E.ACTIVE:T}`,onClick:()=>v(e.urn)},r.createElement(a.JO,{kind:"check-line"})),r.createElement("button",{className:`${c.E.BUTTON} ${o?T:c.E.ACTIVE}`,onClick:()=>v(e.urn)},r.createElement(a.JO,{kind:"close-line"})))})))))}function $(e,t){const n=new Set(e);return e.has(t)?n.delete(t):n.add(t),n}const I={en:{instruction:"Select analysis options",all:"All",none:"None",file:"File",itemInstruction:"Compare your submitted files among each other. Group A will be compared with Group B.",wikipediaInstruction:"Compare your submitted files with all of Wikipedia."},de:{instruction:"Analyseoptionen auswählen",all:"Alles",none:"Nichts",file:"Datei",itemInstruction:"Vergleichen Sie Ihre eingereichten Dateien miteinander. Gruppe A wird mit Gruppe B verglichen.",wikipediaInstruction:"Vergleichen Sie Ihre eingereichten Dateien mit der gesamten Wikipedia."}}}}]);
//# sourceMappingURL=component---src-pages-analysis-tsx-9676c47528b08f83ba74.js.map