"use strict";(self.webpackChunkpicapica_web_client=self.webpackChunkpicapica_web_client||[]).push([[633],{6362:function(e,t,n){n.d(t,{G:function(){return o}});var r=n(7294),a=n(9249),i=n(8587);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const o=(0,r.memo)((e=>{var t,n;const[i]=(0,a.W)(e.alignmentKey,[e]),s=null===(t=i[0])||void 0===t||null===(n=t.diff)||void 0===n?void 0:n.diff;return r.createElement("div",{className:"AlignmentView"},s?r.createElement(r.Fragment,null,s.map((({left:e},t)=>r.createElement(l,{key:"l"+t,left:e,index:t,total:s.length}))),s.map((({right:e},t)=>r.createElement(l,{key:"r"+t,right:e,index:t,total:s.length})))):r.createElement(r.Fragment,null,r.createElement("div",{className:"left",style:{gridRow:1}},r.createElement("span",null,e.left)),r.createElement("div",{className:"right",style:{gridRow:1}},r.createElement("span",null,e.right))))}));function l(e){let t,n,a;"left"in e?(t=e.left.equal,n=e.left.removed,a="left"):(t=e.right.equal,n=e.right.added,a="right");const i="left"===a?"removed":"added";return r.createElement("div",{className:a,style:{gridRow:e.index+1}},""!==t?r.createElement(r.Fragment,null,r.createElement("span",{className:"unchanged"},t.trim()),/\s$/.test(t)?" ":"",r.createElement(h,s({},e,{type:i,text:n,isFirst:!1}))):r.createElement(h,s({},e,{type:i,text:n,isFirst:!0})))}function h(e){const t=e.text,n=500;if(e.index===e.total-1&&t.length>n){const a=c(t),i=d(a,n);if(i.length>20)return r.createElement(r.Fragment,null,r.createElement("span",{className:e.type},r.createElement(m,{text:a.join(" ").trim(),position:"end"})),r.createElement(f,{words:i.length}))}else if(e.isFirst&&t.length>n){const a=c(t).reverse(),i=d(a,n);if(i.length>20)return r.createElement(r.Fragment,null,r.createElement(f,{words:i.length}),r.createElement("span",{className:e.type},r.createElement(m,{text:a.reverse().join(" ").trim(),position:"start"})))}else if(t.length>1e3){const a=c(t),i=d(a,n).reverse(),s=d(i,n);if(s.length>20)return r.createElement(r.Fragment,null,r.createElement("span",{className:e.type},r.createElement(m,{text:a.join(" ").trim(),position:"end"})),r.createElement(f,{words:s.length}),r.createElement("span",{className:e.type},r.createElement(m,{text:i.reverse().join(" ").trim(),position:"start"})))}return r.createElement("span",{className:e.type},e.text)}function c(e){return e.split(/ /g)}function d(e,t){let n=0;for(let r=0;r<e.length;r++)if(n+=e[r].length,n>=t)return e.splice(r+1,e.length-r-1);return[]}function m(e){const t=10,n=[...e.text];if(n.length<t)return r.createElement(r.Fragment,null,e.text);const a="start"===e.position?n.splice(0,t):n.splice(n.length-t,t),i=n.join("");return"start"===e.position?r.createElement(r.Fragment,null,a.map(((e,n)=>r.createElement("span",{key:n,className:"fade",style:{opacity:n/t}},e))),i):r.createElement(r.Fragment,null,i,a.map(((e,n)=>r.createElement("span",{key:n,className:"fade",style:{opacity:(t-n)/t}},e))))}function f(e){const t=(0,i.ql)(u);return r.createElement("span",{className:"Omitted"}," [",t.omitted(e.words),"] ")}const u={en:{omitted(e){return r.createElement(r.Fragment,null,"… ",e," words omitted")}},de:{omitted(e){return r.createElement(r.Fragment,null,"… ",e," Wörter weggelassen")}}}},9249:function(e,t,n){n.d(t,{W:function(){return w}});var r=n(7294);function a(e,t){if(e.length<=t)return e.slice(0);if(1===t)return[e[Math.floor(Math.random()*e.length)]];const n=e.slice(0);return function(e){let t,n,r;for(r=e.length-1;r>0;r--)t=Math.floor(Math.random()*(r+1)),n=e[r],e[r]=e[t],e[t]=n}(n),n.slice(0,t)}class i{_map={};constructor(e=100){this.size=e,this._length=0,this._head=new s(null,null),this._tail=new s(null,null),this._head.next=this._tail,this._tail.prev=this._head}add(e,t){return this.addAll({[e]:t})}addAll(e){let t=Object.keys(e);if(0===t.length)return;t.length>this.size&&(t=t.slice(0,this.size));const n=t.length+this._length-this.size;n>0&&a(Object.keys(this._map),n).forEach((e=>{this.remove(e)}));for(const r of t){const t=new s(r,e[r]);this._tail.insertBefore(t),this._map[r]=t,this._length++}}get(e,t){const n=this._map[e];return n?(n.remove(),this._head.insertAfter(n),n.obj):t}contains(e){return Boolean(this._map[e])}remove(e){const t=this._map[e];return!!t&&(this._removeNode(t),!0)}_removeNode(e){this._length--,delete this._map[e.key],e.remove()}}class s{prev=void 0;next=void 0;constructor(e,t){this.key=e,this.obj=t}remove(){this.prev.next=this.next,this.next.prev=this.prev}insertAfter(e){e.next=this.next,e.prev=this,this.next.prev=e,this.next=e}insertBefore(e){return this.prev.insertAfter(e)}}var o=n(9067),l=n(5461);let h=0;const c=new Map,d=(0,l.Vo)((()=>{const e=new Worker(new URL(n.p+n.u(33),n.b));return e.onmessage=({data:{diff:e,id:t}})=>{const n=c.get(t);c.delete(t),n&&n(e)},e})),m=new i(500),f=new i(500);function u(e,t){return e+"\0"+t}function g(e,t){const n=u(e,t);let r=m.get(n);return void 0===r&&(r=new Promise((n=>{const r=h++;c.set(r,n),d().postMessage({left:e,right:t,id:r})})),m.add(n,r),r.then((e=>f.add(n,e)))),r}function p(e,t){const n=u(e,t);return f.get(n)}function w(e,t){const[n,a]=(0,r.useState)(e),[i,s]=(0,r.useState)((()=>v(t)));return(0,r.useEffect)((()=>{e!==n&&(a(e),s(v(t)))}),[e,n,t]),(0,o.bd)((async e=>{if(i.every((e=>void 0!==e.diff)))return;const t=[...i];for(let n=0;n<i.length;n++){const e=i[n];if(void 0===e.diff){const r=p(e.left,e.right);void 0!==r&&(t[n]={...e,diff:r})}}for(let n=0;n<i.length;n++){const e=i[n];if(void 0===e.diff){t[n]={...e,diff:await g(e.left,e.right)};break}}return t}),(e=>{e&&s(e)}),l.ZT,[i]),[i]}function v(e){return e.map((e=>({left:e.left,right:e.right,diff:p(e.left,e.right)})))}},5241:function(e,t,n){n.r(t),n.d(t,{Head:function(){return h}});var r=n(7294),a=n(6362),i=n(6208),s=n(8252),o=n(6006),l=n(9067);const h=()=>r.createElement(r.Fragment,null,r.createElement("title",null,"Picapica"),r.createElement(s.s,null));t.default=(0,l.kj)((function(){const e={itemUrn:"asdasdasd",type:3,status:o.Item.Resource.ProcessingStatus.STATUS_COMPLETED,rawProperties:{checksum:"",size:4},textProperties:{checksum:"",length:4}};return r.createElement(i.T,{className:"Test",header:"small"},r.createElement(a.G,{alignmentKey:"fake-key",left:c,right:d}),e.itemUrn)}));const c="commanders on both sides, like Lord Kitchener, predicted the war would be a long one. Other political leaders, such as Bethmann Hollweg in Germany, were concerned by the potential social consequences of a war. International bond and financial markets entered severe crises in late July and early August reflecting worry about the financial consequences of war. The perceived excitement of war captured the imagination of many in the warring nations. Spurred on by propaganda and nationalist fervor, many eagerly joined the ranks in search of adventure. Few were prepared for what they actually encountered at the front. See also: Recruitment to the British Army during WW I Trench warfare begins See main article: Western Front (World War I) After their initial success on the Marne, Entente and German forces began a series of outflanking manoeuvres to try to force the other to retreat, in the so-called Race to the Sea. Britain and France soon found themselves facing entrenched German positions from Lorraine to Belgium's Flemish coast. The British and French sought to take the offensive while Germany sought to defend the territories it had occupied. One consequence of this was that the German trenches were much better constructed than those of their enemy: the Anglo-French trenches were only intended to be 'temporary' before their forces broke through the German defences. In April 1915,the Germans used mustard gas for the first time,opening a 4 mile wide hole in the Allied lines when French colonial troops retreated from it. This breach was closed by Canadian soldiers. Neither side proved able to deliver a decisive blow for the next four years, though protracted German action at Verdun throughout (1916), and the Entente's failure at the Somme in the summer of 1916 brought the French army to the brink of collapse. Futile attempts at more frontal assaults, at terrible cost to the French poilu infantry, led to mutinies which threatened the integrity of the front line in 1917 after the Nivelle Offensive in the spring of 1917. News of the Russian Revolution gave a new incentive to socialist sentiments. Red flags were hoisted and the Internationale was sung on several occasions. At the height of the mutiny, 30,000 to 40,000 French soldiers participated. Throughout 1915-17 the British Empire and French armies suffered many more casualties than the German one, but both sides lost millions of soldiers to injury and disease. Around 800,000 soldiers from the British Empire were on the Western Front",d='Main article: Western Front (World War I) Trench warfare begins Trenches of the 11th Cheshire Regiment at Ovillers-la-Boisselle, on the Somme, July 1916 Military tactics which were developed before World War I failed to keep pace with advances in technology and had become obsolete. These advances had allowed the creation of strong defensive systems, which out-of-date military tactics could not break through for most of the war. Barbed wire was a significant hindrance to massed infantry advances, while artillery, vastly more lethal than in the 1870s, coupled with machine guns, made crossing open ground extremely difficult.[95] Commanders on both sides failed to develop tactics for breaching entrenched positions without heavy casualties. In time, however, technology began to produce new offensive weapons, such as gas warfare and the tank.[96] After the First Battle of the Marne (5–12 September 1914), Allied and German forces unsuccessfully tried to outflank each other, a series of manoeuvres later known as the "Race to the Sea". By the end of 1914, the opposing forces were left confronting each other along an uninterrupted line of entrenched positions from Alsace to Belgium\'s North Sea coast.[14] Since the Germans were able to choose where to stand, they normally had the advantage of the high ground; in addition, their trenches tended to be better built, since Anglo-French trenches were initially intended as "temporary," and would only be needed until the breaking of German defences.[97] Both sides tried to break the stalemate using scientific and technological advances. On 22 April 1915, at the Second Battle of Ypres, the Germans (violating the Hague Convention) used chlorine gas for the first time on the Western Front. Several types of gas soon became widely used by both sides, and though it never proved a decisive, battle-winning weapon, poison gas became one of the most-feared and best-remembered horrors of the war.[98] [99] Tanks were developed by Britain and France and were first used in combat by the British during the Battle of Flers–Courcelette (part of the Battle of the Somme) on 15 September 1916, with only partial success. However, their effectiveness would grow as the war progressed; the Allies built tanks in large numbers, whilst the Germans employed only a few of their own design, supplemented by captured Allied tanks. Continuation of trench warfare French 87th regiment near Verdun, 1916 Neither side proved able to deliver a decisive blow for the next two years. Throughout 1915–17, the British Empire and'}}]);
//# sourceMappingURL=component---src-pages-test-tsx-f87d08c12392047f05fe.js.map