"use strict";(self.webpackChunkpicapica_web_client=self.webpackChunkpicapica_web_client||[]).push([[446],{3106:function(e,t,n){n.d(t,{r:function(){return s}});var r=n(7294);function s({className:e,grow:t,left:n,right:s}){return r.createElement("div",{className:"CenterAlignTwo"+(e?" "+e:"")},r.createElement("div",{className:"left"+("left"===t?" grow":"")},n),r.createElement("div",{className:"right"+("right"===t?" grow":"")},s))}},4535:function(e,t,n){n.d(t,{hu:function(){return m},__:function(){return i},Rk:function(){return u}});var r=n(7294),s=n(6856),l=n(8385);const c={en:{core_fulltext_languagenameenglish:{title:"CORE - The world's largest collection of open-access research papers"}},de:{core_fulltext_languagenameenglish:{title:"CORE - The world's largest collection of open-access research papers"}}},o={};var a=n(376);function i(e){return r.createElement("span",{className:"Label"},e.icon&&r.createElement(a.fd,{kind:e.icon}),r.createElement("span",{className:"text"},e.text))}function u(){const e=(0,l.ql)(f);return r.createElement(i,{icon:"upload",text:e.submittedFiles})}function m(e){const{urn:t,collection:n}=function(e){if("collection"in e)return{urn:s.f.parse(e.collection.urn),collection:e.collection};{var t;let n,r;if("string"==typeof e.collectionUrn){const t=s.f.tryParse(e.collectionUrn);if(!t||"collection"!==t.type)return{urn:void 0,collection:void 0};n=t,r=e.collectionUrn}else n=e.collectionUrn,r=s.f.stringify(n);return{urn:n,collection:null===(t=e.collections)||void 0===t?void 0:t.find((e=>e.urn===r))}}}(e),{title:a}=function(e){const t=(0,l.ql)(c),n="string"==typeof e?s.f.tryParse(e):e;if(n&&"collection"===n.type){const e=t[n.collectionId];if(e)return e}return o}(t);return a?r.createElement(i,{text:a}):null!=n&&n.properties?r.createElement(i,{text:`${n.properties.name} - ${n.properties.description}`}):r.createElement(d,null)}function d(){const e=(0,l.ql)(f);return r.createElement(i,{text:e.unknown})}const f={en:{submittedFiles:"Your submitted files",unknown:"Unknown"},de:{submittedFiles:"Ihre eingereichten Dateien",unknown:"Unbekannt"}}},5755:function(e,t,n){n.d(t,{T:function(){return l}});var r=n(7294),s=n(376);function l({id:e}){return r.createElement("span",{className:"LoaderAnimation",id:e}," ",r.createElement(s.JO,{kind:"loader-5-line"}),r.createElement(s.JO,{kind:"loader-5-line"}))}},838:function(e,t,n){n.d(t,{Vl:function(){return g},O6:function(){return h},sJ:function(){return v},u$:function(){return p}});var r=n(5444),s=n(7294),l=n(1038),c=n(6856);function o(e){const t={items:[],collections:new Map,invalid:[]};function n(e,n,r){const s=c.f.stringify({type:"collection",collectionId:n.collectionId});let l=t.collections.get(s);void 0===l&&(l=[],t.collections.set(s,l)),l.push({item:e,document:n,result:r})}for(const a of e){var r,s,l,o;const e=c.f.tryParse(null!==(r=null===(s=a.resources)||void 0===s?void 0:s.urnA)&&void 0!==r?r:""),i=c.f.tryParse(null!==(l=null===(o=a.resources)||void 0===o?void 0:o.urnB)&&void 0!==l?l:"");e&&i?"item"===e.type&&"item"===i.type?t.items.push({a:e,b:i,result:a}):"item"===e.type&&"document"===i.type?n(e,i,a):"document"===e.type&&"item"===i.type?n(i,e,a):t.invalid.push(a):t.invalid.push(a)}return t}var a=n(8385);function i({kind:e,children:t}){return s.createElement("span",{className:`Badge ${e}`},t)}var u=n(1874),m=n(3106),d=n(376),f=n(4535),E=n(5755);function v({backTo:e,title:t,children:n}){const l=(0,a.ql)(k);return s.createElement("div",{className:"OverviewContainer"},s.createElement("div",{className:"head"},e&&s.createElement(r.rU,{className:u.E.BUTTON,to:e,title:l.back},s.createElement(d.fd,{kind:"back"})),s.createElement("div",null,t)),s.createElement("div",{className:"content"},n))}function p({session:e,collections:t,backTo:n,itemTo:c,collectionTo:d}){const p=(0,a.ql)(k),h=o(e.resultsList);h.invalid.length&&(console.error("Not displaying the following results:"),console.error(h.invalid));const g=s.createElement(m.r,{grow:"left",left:s.createElement(f.__,{icon:"results",text:p.analysisResults}),right:s.createElement(i,{kind:"Dark"},p.results)}),N=e.status===l.Session.ComputeStatus.STATUS_RUNNING;return s.createElement("div",{className:"ResultsOverview"},s.createElement(v,{backTo:n,title:g},s.createElement("div",null,s.createElement(r.rU,{className:u.E.BUTTON,to:c},s.createElement(m.r,{grow:"left",left:s.createElement(f.Rk,null),right:s.createElement(i,{kind:"Light"},N&&s.createElement(E.T,null),h.items.length)}))),[...h.collections].map((([e,n])=>s.createElement("div",{key:e},s.createElement(r.rU,{className:u.E.BUTTON,to:d(e)},s.createElement(m.r,{grow:"left",left:s.createElement(f.hu,{collectionUrn:e,collections:t}),right:s.createElement(i,{kind:"Light"},n.length)})))))))}function h({session:e,backTo:t,resultTo:n}){const c=(0,a.ql)(k),{items:d}=o(e.resultsList),p=s.createElement(m.r,{grow:"left",left:s.createElement(f.Rk,null),right:s.createElement(i,{kind:"Dark"},c.matches)}),h=new Map(e.itemsList.map((e=>{var t;return[e.urn,null===(t=e.meta)||void 0===t?void 0:t.name]})));return s.createElement("div",{className:"ItemResultsOverview"},s.createElement(v,{backTo:t,title:p},d.map((({result:t})=>{var o,a,d,f,v,p;const g=null!==(o=h.get(null!==(a=null===(d=t.resources)||void 0===d?void 0:d.urnA)&&void 0!==a?a:""))&&void 0!==o?o:c.unknownItem,k=null!==(f=h.get(null!==(v=null===(p=t.resources)||void 0===p?void 0:p.urnB)&&void 0!==v?v:""))&&void 0!==f?f:c.unknownItem;return s.createElement("div",{key:t.urn},s.createElement(r.rU,{className:u.E.BUTTON,to:n(t)},s.createElement(m.r,{grow:"left",left:s.createElement("span",{className:"item-vs"},s.createElement("span",{className:"left"},g),s.createElement("span",{className:"vs"},"vs."),s.createElement("span",{className:"right"},k)),right:e.status===l.Session.ComputeStatus.STATUS_COMPLETED?s.createElement(i,{kind:"Light"},t.seedsList.length):s.createElement(E.T,null)})))})),0===d.length&&s.createElement("div",{className:"no-results"},c.noResults)))}function g({session:e,collectionUrn:t,collections:n,backTo:d,resultTo:p}){var h;const g=(0,a.ql)(k),N=null!==(h=o(e.resultsList).collections.get(t))&&void 0!==h?h:[],T=s.createElement(m.r,{grow:"left",left:s.createElement(f.hu,{collectionUrn:t,collections:n}),right:s.createElement(i,{kind:"Dark"},g.matches)}),w=new Map(e.itemsList.map((e=>{var t;return[e.urn,null===(t=e.meta)||void 0===t?void 0:t.name]})));return s.createElement("div",{className:"CollectionResultsOverview"},s.createElement(v,{backTo:d,title:T},N.map((({item:t,document:n,result:o})=>{var a;const d=null!==(a=w.get(c.f.stringify(t)))&&void 0!==a?a:g.unknownItem,f=n.documentId;return s.createElement("div",{key:o.urn},s.createElement(r.rU,{className:u.E.BUTTON,to:p(o)},s.createElement(m.r,{grow:"left",left:s.createElement("span",{className:"item-vs"},s.createElement("span",{className:"left"},d),s.createElement("span",{className:"vs"},"vs."),s.createElement("span",{className:"right"},f)),right:e.status===l.Session.ComputeStatus.STATUS_COMPLETED?s.createElement(i,{kind:"Light"},o.seedsList.length):s.createElement(E.T,null)})))})),0===N.length&&s.createElement("div",{className:"no-results"},g.noResults)))}const k={en:{back:"Back",analysisResults:"Analysis results",results:"Results",matches:"Matches",noResults:"No results",unknownItem:"<unknown>"},de:{back:"Zurück",analysisResults:"Analyse­ergebnisse",results:"Ergebnisse",matches:"Treffer",noResults:"Keine Ergebnisse",unknownItem:"<unbekannt>"}}},5795:function(e,t,n){n.d(t,{n0:function(){return v},Px:function(){return m}});var r=n(5444),s=n(7294),l=n(1194),c=n(8385),o=n(3046),a=n(1874);function i({heading:e,children:t}){return s.createElement("div",{className:"Group"},s.createElement("div",{className:"group-heading"},e),s.createElement("div",{className:"group-container"},t))}var u=n(376);function m(e,t){switch(e){case"submit":return(0,l.me)({urn:t});case"analysis":return(0,l.sF)({urn:t});case"checkout":return"/checkout/";case"results":return(0,l.bq)({urn:t});default:(0,o.vE)(e)}}const d=["submit","analysis","checkout","results"],f={submit:"upload",analysis:"analyse",checkout:"checkout",results:"results"};function E({current:e,sessionUrn:t,disableOthers:n}){const l=(0,c.ql)(p);return s.createElement("span",{className:`StepSelector ${a.E.BUTTON_GROUP}`},d.filter((e=>"checkout"!==e)).map((c=>{const o=l[c];return n&&c!==e?s.createElement("span",{key:c,className:`${a.E.BUTTON} ${a.E.DISABLED}`,title:o},s.createElement(u.fd,{kind:f[c]}),s.createElement("span",{className:"text"},o)):s.createElement(r.rU,{key:c,to:m(c,t),className:`${a.E.BUTTON}${c===e?" "+a.E.ACTIVE:""}`,title:o},s.createElement(u.fd,{kind:f[c]}),s.createElement("span",{className:"text"},o))})))}function v({current:e,sessionUrn:t,disableOthers:n,children:r}){return s.createElement("div",{className:"StepSelectorGroup"},s.createElement(i,{heading:s.createElement("div",{className:"heading-wrapper"},s.createElement(E,{current:e,sessionUrn:t,disableOthers:n}))},r))}const p={en:{submit:"Upload",analysis:"Analysis",checkout:"Checkout",results:"Results"},de:{submit:"Hochladen",analysis:"Analyse",checkout:"Kasse",results:"Ergebnisse"}}},7653:function(e,t,n){function r(e){return JSON.parse(JSON.stringify(e))}function s(){const e=Date.now();return{seconds:Math.floor(e/1e3),nanos:e%1e3*1e7}}function l(e,t){return e.seconds===t.seconds?e.nanos-t.nanos:e.seconds-t.seconds}function c(e){return[...e].sort(((e,t)=>{const n=e.createdAt,r=t.createdAt;return n||r?n?r?l(n,r)||e.urn.localeCompare(t.urn):1:-1:0}))}n.d(t,{R3:function(){return r},VN:function(){return s},pv:function(){return l},a$:function(){return c}})},9377:function(e,t,n){n.d(t,{b:function(){return c}});var r=n(3467),s=n(1038),l=n(2440);function c(e){return[(0,r.useQuery)(["collections",e],{refetchInterval:!1,refetchOnMount:!1,refetchOnReconnect:!1,refetchOnWindowFocus:!1,queryFn:async()=>{const t=new s.GetCollectionsRequest;t.setSessionUrn(e);return(await(0,l.M)().getCollections(t,null)).toObject().collectionsList}}).data]}},2041:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(7294),s=n(5186),l=n(9539),c=n(838),o=n(1277),a=n(9528),i=n(5795),u=n(1038),m=n(1194),d=n(8664),f=n(2375),E=n(9377);const v=new(n(2316).B)("last-compute-cache");function p(e){var t;return JSON.stringify(null!==(t=e.config)&&void 0!==t?t:{})}var h=n(2440),g=n(7653),k=n(3046);const N=e=>{if(e.status===u.Session.ComputeStatus.STATUS_UNDEFINED){const t=(0,g.R3)(e);return t.status=u.Session.ComputeStatus.STATUS_RUNNING,t}return e};function T(e,t){const[n,s]=(0,r.useState)(0);(0,d.bd)((async r=>{if("Ready"!==e.type)return;const{session:l}=e;if(l.status===u.Session.ComputeStatus.STATUS_RUNNING)return;if(void 0!==function(e){const t=p(e),n=v.get(e.urn);if((null==n?void 0:n.id)===t)return new Date(n.when)}(l))return;n>0&&(await(0,k.gw)(3e3),r.checkCanceled());const c=new u.ComputeResultsRequest;c.setSessionUrn(l.urn),console.log("Compute results");const o=(0,h.M)().computeResults(c,null).then((()=>{!function(e){v.set(e.urn,{id:p(e),when:Date.now()})}(l),s(0)}),(e=>{throw s((e=>e+1)),e}));t(o,N)}),k.ZT,k.ZT,[e,t,n,s])}var w=n(8385),y=n(5009);function b(){return r.createElement(r.Fragment,null,(0,d.D8)((()=>r.createElement(U,null))),r.createElement(a.s,null),r.createElement(s.q,null,r.createElement("title",null,"Picapica")))}function U(){const e=(0,w.ql)(I),[t,n]=(0,y.zU)();T(t,n);const[s]=(0,E.b)((0,y.PK)(t)),a=function(){const e=(0,f.Ee)().get("view");return e?function(e){if(e){if("items"===e)return R;const t=/^collection:([^]+)$/.exec(e);if(t)return{type:"collection",collectionUrn:t[1]}}return S}(e):S}(),d=e=>(0,m.K8)({urn:e.urn,view:O(a)});return r.createElement(l.T,{className:"Results",header:"small"},r.createElement(o.sM,{state:t,onReady:({session:t})=>{const n=(0,k.Gi)(a,{overview:()=>r.createElement(c.u$,{session:t,collections:s,backTo:(0,i.Px)("analysis",t.urn),itemTo:C(t.urn,R),collectionTo:e=>C(t.urn,{type:"collection",collectionUrn:e})}),items:()=>r.createElement(c.O6,{session:t,backTo:C(t.urn,S),resultTo:d}),collection:({collectionUrn:e})=>r.createElement(c.Vl,{collectionUrn:e,session:t,collections:s,backTo:C(t.urn,S),resultTo:d})}),l=t.status===u.Session.ComputeStatus.STATUS_RUNNING;return r.createElement(r.Fragment,null,n,r.createElement("p",{className:"loading",style:l?{}:{opacity:0,userSelect:"none"}},e.running))}}))}const S={type:"overview"},R={type:"items"};function O(e){return"items"===e.type?"items":"collection"===e.type?`collection:${e.collectionUrn}`:void 0}function C(e,t){return(0,m.bq)({urn:e,view:O(t)})}const I={en:{running:"Your submitted files are currently being processed. This might take a few seconds."},de:{running:"Ihre Eingabe wird bearbeited. Dies kann ein paar Sekunden dauern."}}}}]);
//# sourceMappingURL=component---src-pages-results-tsx-6619594c525da6d2174f.js.map