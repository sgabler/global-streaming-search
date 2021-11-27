var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(t)}function o(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let c,a;function u(e,t){return c||(c=document.createElement("a")),c.href=t,e===c.href}function s(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function f(e){e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function _(){return d(" ")}function m(){return d("")}function y(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $(e,t){e.value=null==t?"":t}function b(e,t,n,l){e.style.setProperty(t,n,l?"important":"")}function v(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t)return void(l.selected=!0)}e.selectedIndex=-1}function w(e){a=e}function k(){if(!a)throw new Error("Function called outside component initialization");return a}const x=[],E=[],S=[],N=[],L=Promise.resolve();let C=!1;function T(e){S.push(e)}let q=!1;const M=new Set;function R(){if(!q){q=!0;do{for(let e=0;e<x.length;e+=1){const t=x[e];w(t),P(t.$$)}for(w(null),x.length=0;E.length;)E.pop()();for(let e=0;e<S.length;e+=1){const t=S[e];M.has(t)||(M.add(t),t())}S.length=0}while(x.length);for(;N.length;)N.pop()();C=!1,q=!1,M.clear()}}function P(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}const A=new Set;let O;function B(){O={r:0,c:[],p:O}}function H(){O.r||l(O.c),O=O.p}function I(e,t){e&&e.i&&(A.delete(e),e.i(t))}function j(e,t,n,l){if(e&&e.o){if(A.has(e))return;A.add(e),O.c.push((()=>{A.delete(e),l&&(n&&e.d(1),l())})),e.o(t)}}function z(e,t){const n=t.token={};function l(e,l,o,r){if(t.token!==n)return;t.resolved=r;let c=t.ctx;void 0!==o&&(c=c.slice(),c[o]=r);const a=e&&(t.current=e)(c);let u=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==l&&e&&(B(),j(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),H())})):t.block.d(1),a.c(),I(a,1),a.m(t.mount(),t.anchor),u=!0),t.block=a,t.blocks&&(t.blocks[l]=a),u&&R()}if((o=e)&&"object"==typeof o&&"function"==typeof o.then){const n=k();if(e.then((e=>{w(n),l(t.then,1,t.value,e),w(null)}),(e=>{if(w(n),l(t.catch,2,t.error,e),w(null),!t.hasCatch)throw e})),t.current!==t.pending)return l(t.pending,0),!0}else{if(t.current!==t.then)return l(t.then,1,t.value,e),!0;t.resolved=e}var o}function G(e,t,n){const l=t.slice(),{resolved:o}=e;e.current===e.then&&(l[e.value]=o),e.current===e.catch&&(l[e.error]=o),e.block.p(l,n)}function U(e){e&&e.c()}function J(e,n,r,c){const{fragment:a,on_mount:u,on_destroy:s,after_update:i}=e.$$;a&&a.m(n,r),c||T((()=>{const n=u.map(t).filter(o);s?s.push(...n):l(n),e.$$.on_mount=[]})),i.forEach(T)}function D(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function K(e,t){-1===e.$$.dirty[0]&&(x.push(e),C||(C=!0,L.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(t,o,r,c,u,s,i,h=[-1]){const p=a;w(t);const d=t.$$={fragment:null,ctx:null,props:s,update:e,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:o.target||p.$$.root};i&&i(d.root);let _=!1;if(d.ctx=r?r(t,o.props||{},((e,n,...l)=>{const o=l.length?l[0]:n;return d.ctx&&u(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),_&&K(t,e)),n})):[],d.update(),_=!0,l(d.before_update),d.fragment=!!c&&c(d.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);d.fragment&&d.fragment.l(e),e.forEach(f)}else d.fragment&&d.fragment.c();o.intro&&I(t.$$.fragment),J(t,o.target,o.anchor,o.customElement),R()}w(p)}class Y{$destroy(){D(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function V(){let e=["https://warm-coast-72718.herokuapp.com/","https://afternoon-falls-07756.herokuapp.com/","https://boiling-oasis-44034.herokuapp.com/","https://ancient-lowlands-02291.herokuapp.com/","https://agile-forest-65193.herokuapp.com/"];return e[Math.floor(Math.random()*e.length)]}class W{constructor(e,t){this.country=e,this.full_locale=t}}async function Z(){const e=await async function(){const e=`${V()}https://apis.justwatch.com/content/locales/state`,t=await fetch(e,{headers:{"X-Requested-With":"fetch"}});if(0==t.ok)throw new Error("Http Error: "+t.status);return await t.json()}();var t=[];return e.forEach((e=>{var n=new W(e.country,e.full_locale);t.push(n)})),t}class X{constructor(e,t,n,l,o,r){this.title=e,this.id=t,this.poster_uri=n,this.type=l,this.release_year=o,this.query_locale=r}}async function Q(e,t){const n=await async function(e,t){console.log(V());const n=`${V()}https://apis.justwatch.com/content/titles/${t}/popular`,l={query:e},o=await fetch(n,{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json","X-Requested-With":"fetch"}});if(0==o.ok)throw new Error("Http Error: "+o.status);return await o.json()}(e,t.full_locale);var l=[];return n.items.forEach((e=>{var n,o=new RegExp("\\s*([0-9]+)").exec(e.poster);n=null==o?"NULL":`https://images.justwatch.com/poster/${o[0]}/s592/poster.webp`,l.push(new X(e.title,e.id,n,e.object_type,e.original_release_year,t))})),l}function ee(t){let n;return{c(){n=p("div"),n.innerHTML='<span class="svelte-152oh3b"><h1 class="svelte-152oh3b">Loading...</h1></span> \n  <span class="svelte-152oh3b"><div class="loader svelte-152oh3b"></div></span>',b(n,"padding-top","8rem"),b(n,"height","100vh")},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&f(n)}}}class te extends Y{constructor(e){super(),F(this,e,null,ee,r,{})}}function ne(e,t,n){const l=e.slice();return l[7]=t[n],l}function le(e){let t,n,l={ctx:e,current:null,token:null,hasCatch:!1,pending:ue,then:ce,catch:re,value:4,blocks:[,,,]};return z(e[4],l),{c(){t=p("div"),l.block.c(),g(t,"class","class svelte-1tqhm95")},m(e,o){i(e,t,o),l.block.m(t,l.anchor=null),l.mount=()=>t,l.anchor=null,n=!0},p(t,n){G(l,e=t,n)},i(e){n||(I(l.block),n=!0)},o(e){for(let e=0;e<3;e+=1){j(l.blocks[e])}n=!1},d(e){e&&f(t),l.block.d(),l.token=null,l=null}}}function oe(e){let t,n;return t=new Ve({props:{page:"SearchResults",search:e[0]+",",locale:JSON.parse(e[1])}}),{c(){U(t.$$.fragment)},m(e,l){J(t,e,l),n=!0},p(e,n){const l={};1&n&&(l.search=e[0]+","),2&n&&(l.locale=JSON.parse(e[1])),t.$set(l)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function re(t){return{c:e,m:e,p:e,i:e,o:e,d:e}}function ce(t){let n,o,r,c,a,u,d,m,w,k,x,E,S,N,L,C,q,M,R=t[4],P=[];for(let e=0;e<R.length;e+=1)P[e]=ae(ne(t,R,e));return{c(){n=p("div"),o=_(),r=p("div"),c=p("h1"),c.textContent="Global Streaming Search",a=_(),u=p("h3"),u.textContent="Search for a movie or TV show title and see what streaming services\n          offer it worldwide!",d=_(),m=p("p"),m.textContent="Optionally select a country for the initial search, allows searching\n          in your country's native language.",w=_(),k=p("form"),x=p("div"),E=p("input"),S=_(),N=p("input"),L=_(),C=p("select");for(let e=0;e<P.length;e+=1)P[e].c();g(n,"class","background svelte-1tqhm95"),g(c,"class","svelte-1tqhm95"),g(u,"class","svelte-1tqhm95"),g(m,"class","svelte-1tqhm95"),g(E,"class","search svelte-1tqhm95"),g(E,"type","text"),g(E,"placeholder","🔎 Title"),b(E,"width","30vw"),g(N,"type","submit"),g(N,"class","search svelte-1tqhm95"),N.value="Search",g(C,"class","search svelte-1tqhm95"),void 0===t[1]&&T((()=>t[6].call(C))),g(r,"class","top svelte-1tqhm95")},m(e,l){i(e,n,l),i(e,o,l),i(e,r,l),s(r,c),s(r,a),s(r,u),s(r,d),s(r,m),s(r,w),s(r,k),s(k,x),s(x,E),$(E,t[0]),s(x,S),s(x,N),s(k,L),s(k,C);for(let e=0;e<P.length;e+=1)P[e].m(C,null);var f;v(C,t[1]),q||(M=[y(E,"input",t[5]),y(C,"change",t[6]),y(k,"submit",(f=t[3],function(e){return e.preventDefault(),f.call(this,e)}))],q=!0)},p(e,t){if(1&t&&E.value!==e[0]&&$(E,e[0]),16&t){let n;for(R=e[4],n=0;n<R.length;n+=1){const l=ne(e,R,n);P[n]?P[n].p(l,t):(P[n]=ae(l),P[n].c(),P[n].m(C,null))}for(;n<P.length;n+=1)P[n].d(1);P.length=R.length}18&t&&v(C,e[1])},i:e,o:e,d(e){e&&f(n),e&&f(o),e&&f(r),h(P,e),q=!1,l(M)}}}function ae(t){let n,l,o,r=t[7].country+"";return{c(){n=p("option"),l=d(r),n.__value=o=JSON.stringify(t[7]),n.value=n.__value},m(e,t){i(e,n,t),s(n,l)},p:e,d(e){e&&f(n)}}}function ue(t){let n,l;return n=new te({}),{c(){U(n.$$.fragment)},m(e,t){J(n,e,t),l=!0},p:e,i(e){l||(I(n.$$.fragment,e),l=!0)},o(e){j(n.$$.fragment,e),l=!1},d(e){D(n,e)}}}function se(e){let t,n,l,o;const r=[oe,le],c=[];function a(e,t){return e[2]?0:1}return t=a(e),n=c[t]=r[t](e),{c(){n.c(),l=m()},m(e,n){c[t].m(e,n),i(e,l,n),o=!0},p(e,[o]){let u=t;t=a(e),t===u?c[t].p(e,o):(B(),j(c[u],1,1,(()=>{c[u]=null})),H(),n=c[t],n?n.p(e,o):(n=c[t]=r[t](e),n.c()),I(n,1),n.m(l.parentNode,l))},i(e){o||(I(n),o=!0)},o(e){j(n),o=!1},d(e){c[t].d(e),e&&f(l)}}}function ie(e,t,n){let l,o,r=Z(),c=!1;return[l,o,c,function(){null!=l?n(2,c=!0):alert("Please input a valid title.")},r,function(){l=this.value,n(0,l)},function(){o=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(1,o),n(4,r)}]}class fe extends Y{constructor(e){super(),F(this,e,ie,se,r,{})}}function he(t){let n;return{c(){n=p("div"),n.innerHTML='<a href="https://colaski.github.io/global-streaming-search/"><h1 class="svelte-szpydc">Global Streaming Search</h1></a>',g(n,"class","svelte-szpydc")},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&f(n)}}}class pe extends Y{constructor(e){super(),F(this,e,null,he,r,{})}}class de extends X{constructor(e,t,n,l,o){super(e.title,e.id,e.poster_uri,e.type,e.release_year,e.query_locale),this.short_description=t,this.number_seasons=n,this.backdrop_url=l,this.offers=o}}async function _e(e,t){const n=await Z();let l=[];var o=n.map((async t=>{let n=await async function(e,t,n){const l=`${V()}https://apis.justwatch.com/content/titles/${n}/${e}/locale/${t}`,o=await fetch(l,{headers:{"X-Requested-With":"fetch"}});if(0==o.ok)throw new Error("Http Error: "+o.status);return o.json()}(e.id,t.full_locale,e.type);l.push({country:t.country,info:n})}));await Promise.all(o);let r=l.filter((t=>t.country===e.query_locale.country));r=r[0].info;let c=r.short_description,a=new RegExp("\\s*([0-9]+)").exec(r.backdrops[0].backdrop_url),u=null!=a?`https://images.justwatch.com/backdrop/${a[0]}/s1920/backdrop.webp`:"NULL",s="seasons"in r?r.seasons:"NULL",i=[];var f=l.map((async e=>{let n=e.country;if("offers"in(e=e.info)){let o=[];var l=e.offers.map((async e=>{e.monitization_types,t.forEach((t=>{e.provider_id==t.id&&o.push({id:t.id,short_name:t.short_name,clear_name:t.clear_name,icon_uri:t.icon_uri,monetization_types:t.monetization_types,url:e.urls.standard_web})}))}));await Promise.all(l),i.push({country:n,offers:o})}}));return await Promise.all(f),new de(e,c,s,u,i)}class me{constructor(e,t,n,l,o){this.id=e,this.short_name=t,this.clear_name=n,this.icon_uri=l,this.monetization_types=o}}function ye(e,t,n){const l=e.slice();return l[7]=t[n],l}function ge(e){let t,n,l,o,r,c,a,u,h;t=new pe({});let y={ctx:e,current:null,token:null,hasCatch:!1,pending:Ne,then:ve,catch:be,value:4,blocks:[,,,]};return z(e[4],y),{c(){U(t.$$.fragment),n=_(),l=p("h2"),o=d("Results for "),r=p("span"),c=d(e[0]),a=_(),u=m(),y.block.c(),b(r,"color","red"),b(l,"color","white"),b(l,"text-align","center")},m(e,f){J(t,e,f),i(e,n,f),i(e,l,f),s(l,o),s(l,r),s(r,c),i(e,a,f),i(e,u,f),y.block.m(e,y.anchor=f),y.mount=()=>u.parentNode,y.anchor=u,h=!0},p(t,n){e=t,(!h||1&n)&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(c,e[0]),G(y,e,n)},i(e){h||(I(t.$$.fragment,e),I(y.block),h=!0)},o(e){j(t.$$.fragment,e);for(let e=0;e<3;e+=1){j(y.blocks[e])}h=!1},d(e){D(t,e),e&&f(n),e&&f(l),e&&f(a),e&&f(u),y.block.d(e),y.token=null,y=null}}}function $e(e){let t,n;return t=new Ve({props:{page:"Selection",selection:e[2]}}),{c(){U(t.$$.fragment)},m(e,l){J(t,e,l),n=!0},p(e,n){const l={};4&n&&(l.selection=e[2]),t.$set(l)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function be(t){return{c:e,m:e,p:e,i:e,o:e,d:e}}function ve(t){let n;let l=function(e,t){return e[4].length>0?ke:we}(t),o=l(t);return{c(){o.c(),n=m()},m(e,t){o.m(e,t),i(e,n,t)},p(e,t){o.p(e,t)},i:e,o:e,d(e){o.d(e),e&&f(n)}}}function we(t){let n;return{c(){n=p("span"),n.innerHTML="<h1>No results 😭</h1> \n        <h2>please reload the page and try a different title.</h2>",b(n,"color","white"),b(n,"text-align","center")},m(e,t){i(e,n,t)},p:e,d(e){e&&f(n)}}}function ke(e){let t,n=e[4],l=[];for(let t=0;t<n.length;t+=1)l[t]=Se(ye(e,n,t));return{c(){t=p("div");for(let e=0;e<l.length;e+=1)l[e].c();g(t,"class","results svelte-1rudybt")},m(e,n){i(e,t,n);for(let e=0;e<l.length;e+=1)l[e].m(t,null)},p(e,o){if(24&o){let r;for(n=e[4],r=0;r<n.length;r+=1){const c=ye(e,n,r);l[r]?l[r].p(c,o):(l[r]=Se(c),l[r].c(),l[r].m(t,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(e){e&&f(t),h(l,e)}}}function xe(t){let n,l;return{c(){n=p("img"),u(n.src,l="./images/noImage.webp")||g(n,"src","./images/noImage.webp"),g(n,"alt","No image found for the "+t[7].type+" "+t[7].title),g(n,"class","svelte-1rudybt")},m(e,t){i(e,n,t)},p:e,d(e){e&&f(n)}}}function Ee(t){let n,l;return{c(){n=p("img"),u(n.src,l=t[7].poster_uri)||g(n,"src",l),g(n,"alt","Poster for the "+t[7].type+" "+t[7].title),g(n,"class","svelte-1rudybt")},m(e,t){i(e,n,t)},p:e,d(e){e&&f(n)}}}function Se(e){let t,n,l,o,r,c,a,u,h,m,$,v,w,k,x,E,S,N=e[7].title+"",L=e[7].release_year+"",C=e[7].type+"";let T=function(e,t){return"NULL"!=e[7].poster_uri?Ee:xe}(e),q=T(e);function M(){return e[6](e[7])}return{c(){t=p("div"),n=p("div"),q.c(),l=_(),o=p("span"),r=p("h2"),c=d(N),a=_(),u=p("h4"),h=d("("),m=d(L),$=d(")"),v=_(),w=p("h4"),k=d(C),x=_(),g(o,"class","resultinfo svelte-1rudybt"),g(n,"class","result svelte-1rudybt"),b(t,"display","inline-block"),b(t,"margin-left","2rem"),b(t,"margin-right","2rem"),b(t,"margin-bottom","2rem")},m(e,f){i(e,t,f),s(t,n),q.m(n,null),s(n,l),s(n,o),s(o,r),s(r,c),s(o,a),s(o,u),s(u,h),s(u,m),s(u,$),s(o,v),s(o,w),s(w,k),s(t,x),E||(S=y(o,"click",M),E=!0)},p(t,n){e=t,q.p(e,n)},d(e){e&&f(t),q.d(),E=!1,S()}}}function Ne(t){let n,l;return n=new te({}),{c(){U(n.$$.fragment)},m(e,t){J(n,e,t),l=!0},p:e,i(e){l||(I(n.$$.fragment,e),l=!0)},o(e){j(n.$$.fragment,e),l=!1},d(e){D(n,e)}}}function Le(e){let t,n,l,o;const r=[$e,ge],c=[];function a(e,t){return e[1]?0:1}return t=a(e),n=c[t]=r[t](e),{c(){n.c(),l=m()},m(e,n){c[t].m(e,n),i(e,l,n),o=!0},p(e,[o]){let u=t;t=a(e),t===u?c[t].p(e,o):(B(),j(c[u],1,1,(()=>{c[u]=null})),H(),n=c[t],n?n.p(e,o):(n=c[t]=r[t](e),n.c()),I(n,1),n.m(l.parentNode,l))},i(e){o||(I(n),o=!0)},o(e){j(n),o=!1},d(e){c[t].d(e),e&&f(l)}}}function Ce(e,t,n){let{query:l}=t,{locale:o}=t;l=l.replace(",,","");let r,c=async function(e,t){return await Q(e,t)}(l,o),a=!1;function u(e){n(1,a=!0),n(2,r=JSON.stringify(e))}return e.$$set=e=>{"query"in e&&n(0,l=e.query),"locale"in e&&n(5,o=e.locale)},[l,a,r,u,c,o,e=>u(e)]}class Te extends Y{constructor(e){super(),F(this,e,Ce,Le,r,{query:0,locale:5})}}function qe(e,t,n){const l=e.slice();return l[4]=t[n],l}function Me(e,t,n){const l=e.slice();return l[7]=t[n],l}function Re(t){let n,l,o,r;return n=new pe({}),{c(){U(n.$$.fragment),l=_(),o=p("div"),o.innerHTML="<h1>The website is being rate limited 😞, please try again later</h1> \n    <p></p> \n    <h3>If you happen to know what Node.js is you can run this website locally and avoid rate limits.</h3> \n    <h3>Click the Github logo in the corner for more information.</h3>",b(o,"text-align","center"),b(o,"color","white"),b(o,"margin","1rem")},m(e,t){J(n,e,t),i(e,l,t),i(e,o,t),r=!0},p:e,i(e){r||(I(n.$$.fragment,e),r=!0)},o(e){j(n.$$.fragment,e),r=!1},d(e){D(n,e),e&&f(l),e&&f(o)}}}function Pe(e){let t,n,l,o,r,c,a,m,y,$,v,w,k,x,E,S,N,L,C,T,q,M=e[3].title+"",R=e[3].release_year+"",P=e[3].short_description+"";t=new pe({});let A=e[3].offers,O=[];for(let t=0;t<A.length;t+=1)O[t]=Oe(qe(e,A,t));return{c(){U(t.$$.fragment),n=_(),l=p("div"),o=p("div"),r=_(),c=p("div"),a=p("div"),m=p("img"),$=_(),v=p("div"),w=p("h1"),k=d(M),x=_(),E=p("h3"),S=d(R),N=_(),L=p("p"),C=d(P),T=_();for(let e=0;e<O.length;e+=1)O[e].c();b(o,"background-color","transparent"),b(o,"height","15rem"),u(m.src,y=e[3].poster_uri)||g(m,"src",y),g(m,"alt","Poster for the "+e[3].type+" "+e[3].title),g(m,"class","svelte-nayd1u"),g(v,"class","text svelte-nayd1u"),b(a,"display","flex"),b(a,"align-items","left"),g(c,"class","box svelte-nayd1u"),g(l,"class","selection svelte-nayd1u"),b(l,"--backdrop-url","url("+e[3].backdrop_url+")")},m(e,u){J(t,e,u),i(e,n,u),i(e,l,u),s(l,o),s(l,r),s(l,c),s(c,a),s(a,m),s(a,$),s(a,v),s(v,w),s(w,k),s(v,x),s(v,E),s(E,S),s(v,N),s(v,L),s(L,C),s(v,T);for(let e=0;e<O.length;e+=1)O[e].m(v,null);q=!0},p(e,t){if(1&t){let n;for(A=e[3].offers,n=0;n<A.length;n+=1){const l=qe(e,A,n);O[n]?O[n].p(l,t):(O[n]=Oe(l),O[n].c(),O[n].m(v,null))}for(;n<O.length;n+=1)O[n].d(1);O.length=A.length}},i(e){q||(I(t.$$.fragment,e),q=!0)},o(e){j(t.$$.fragment,e),q=!1},d(e){D(t,e),e&&f(n),e&&f(l),h(O,e)}}}function Ae(t){let n,l,o,r,c,a,h,m,y,$=t[7].clear_name+"";return{c(){n=p("div"),l=p("span"),o=p("a"),r=p("img"),a=_(),h=p("label"),m=d($),u(r.src,c=t[7].icon_uri)||g(r,"src",c),g(r,"alt","Icon for "+t[7].clear_name),g(r,"id",t[7].short_name),g(r,"class","svelte-nayd1u"),g(o,"href",t[7].url),g(h,"for",y=t[7].short_name),g(h,"class","svelte-nayd1u"),b(l,"text-align","center"),b(l,"display","inline-block"),b(n,"display","inline-block")},m(e,t){i(e,n,t),s(n,l),s(l,o),s(o,r),s(l,a),s(l,h),s(h,m)},p:e,d(e){e&&f(n)}}}function Oe(e){let t,n,l,o,r,c=e[4].country+"",a=e[4].offers,u=[];for(let t=0;t<a.length;t+=1)u[t]=Ae(Me(e,a,t));return{c(){t=p("div"),n=p("h4"),l=d(c),o=_();for(let e=0;e<u.length;e+=1)u[e].c();r=_(),g(t,"class","offer svelte-nayd1u")},m(e,c){i(e,t,c),s(t,n),s(n,l),s(t,o);for(let e=0;e<u.length;e+=1)u[e].m(t,null);s(t,r)},p(e,n){if(1&n){let l;for(a=e[4].offers,l=0;l<a.length;l+=1){const o=Me(e,a,l);u[l]?u[l].p(o,n):(u[l]=Ae(o),u[l].c(),u[l].m(t,r))}for(;l<u.length;l+=1)u[l].d(1);u.length=a.length}},d(e){e&&f(t),h(u,e)}}}function Be(t){let n,l;return n=new te({}),{c(){U(n.$$.fragment)},m(e,t){J(n,e,t),l=!0},p:e,i(e){l||(I(n.$$.fragment,e),l=!0)},o(e){j(n.$$.fragment,e),l=!1},d(e){D(n,e)}}}function He(e){let t,n,l={ctx:e,current:null,token:null,hasCatch:!0,pending:Be,then:Pe,catch:Re,value:3,error:10,blocks:[,,,]};return z(e[0],l),{c(){t=m(),l.block.c()},m(e,o){i(e,t,o),l.block.m(e,l.anchor=o),l.mount=()=>t.parentNode,l.anchor=t,n=!0},p(t,[n]){G(l,e=t,n)},i(e){n||(I(l.block),n=!0)},o(e){for(let e=0;e<3;e+=1){j(l.blocks[e])}n=!1},d(e){e&&f(t),l.block.d(e),l.token=null,l=null}}}function Ie(e,t,n){let{providers:l}=t,{selection:o}=t;o=JSON.parse(o);let r=_e(o,l);return e.$$set=e=>{"providers"in e&&n(2,l=e.providers),"selection"in e&&n(1,o=e.selection)},[r,o,l]}class je extends Y{constructor(e){super(),F(this,e,Ie,He,r,{providers:2,selection:1})}}function ze(t){return{c:e,m:e,p:e,i:e,o:e,d:e}}function Ge(e){let t,n,l,o;const r=[De,Je,Ue],c=[];function a(e,t){return"search"==e[0]?0:"SearchResults"==e[0]?1:"Selection"==e[0]?2:-1}return~(t=a(e))&&(n=c[t]=r[t](e)),{c(){n&&n.c(),l=m()},m(e,n){~t&&c[t].m(e,n),i(e,l,n),o=!0},p(e,o){let u=t;t=a(e),t===u?~t&&c[t].p(e,o):(n&&(B(),j(c[u],1,1,(()=>{c[u]=null})),H()),~t?(n=c[t],n?n.p(e,o):(n=c[t]=r[t](e),n.c()),I(n,1),n.m(l.parentNode,l)):n=null)},i(e){o||(I(n),o=!0)},o(e){j(n),o=!1},d(e){~t&&c[t].d(e),e&&f(l)}}}function Ue(e){let t,n;return t=new je({props:{providers:e[4],selection:e[3]}}),{c(){U(t.$$.fragment)},m(e,l){J(t,e,l),n=!0},p(e,n){const l={};8&n&&(l.selection=e[3]),t.$set(l)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function Je(e){let t,n;return t=new Te({props:{query:e[1]+",",locale:e[2]}}),{c(){U(t.$$.fragment)},m(e,l){J(t,e,l),n=!0},p(e,n){const l={};2&n&&(l.query=e[1]+","),4&n&&(l.locale=e[2]),t.$set(l)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function De(t){let n,l;return n=new fe({}),{c(){U(n.$$.fragment)},m(e,t){J(n,e,t),l=!0},p:e,i(e){l||(I(n.$$.fragment,e),l=!0)},o(e){j(n.$$.fragment,e),l=!1},d(e){D(n,e)}}}function Ke(t){let n,l;return n=new te({}),{c(){U(n.$$.fragment)},m(e,t){J(n,e,t),l=!0},p:e,i(e){l||(I(n.$$.fragment,e),l=!0)},o(e){j(n.$$.fragment,e),l=!1},d(e){D(n,e)}}}function Fe(e){let t,n,l={ctx:e,current:null,token:null,hasCatch:!1,pending:Ke,then:Ge,catch:ze,value:4,blocks:[,,,]};return z(e[4],l),{c(){t=m(),l.block.c()},m(e,o){i(e,t,o),l.block.m(e,l.anchor=o),l.mount=()=>t.parentNode,l.anchor=t,n=!0},p(t,[n]){G(l,e=t,n)},i(e){n||(I(l.block),n=!0)},o(e){for(let e=0;e<3;e+=1){j(l.blocks[e])}n=!1},d(e){e&&f(t),l.block.d(e),l.token=null,l=null}}}function Ye(e,t,n){let l=async function(){var e=await async function(){return[{country:"United States",full_locale:"en_US"},{country:"Germany",full_locale:"de_DE"},{country:"Brazil",full_locale:"pt_BR"},{country:"Australia",full_locale:"en_AU"},{country:"New Zealand",full_locale:"en_NZ"},{country:"Canada",full_locale:"en_CA"},{country:"United Kingdom",full_locale:"en_GB"},{country:"South Africa",full_locale:"en_ZA"},{country:"Ireland",full_locale:"en_IE"},{country:"Lithuania",full_locale:"lt_LT"},{country:"Taiwan",full_locale:"zh_TW"},{country:"Egypt",full_locale:"ar_EG"},{country:"France",full_locale:"fr_FR"},{country:"Norway",full_locale:"nb_NO"},{country:"South Korea",full_locale:"ko_KR"},{country:"Italy",full_locale:"it_IT"},{country:"Mexico",full_locale:"es_MX"},{country:"Japan",full_locale:"ja_JP"},{country:"Netherlands",full_locale:"en_NL"},{country:"Guatemala",full_locale:"es_GT"},{country:"Belgium",full_locale:"fr_BE"},{country:"Peru",full_locale:"es_PE"},{country:"Saudi Arabia",full_locale:"ar_SA"},{country:"Thailand",full_locale:"en_TH"},{country:"Hong Kong",full_locale:"zh_HK"},{country:"Slovakia",full_locale:"sk_SK"},{country:"Bulgaria",full_locale:"bg_BG"},{country:"Portugal",full_locale:"pt_PT"},{country:"Czech Republic",full_locale:"cs_CZ"},{country:"Russia",full_locale:"ru_RU"},{country:"India",full_locale:"en_IN"},{country:"Switzerland",full_locale:"de_CH"},{country:"Austria",full_locale:"de_AT"},{country:"Malaysia",full_locale:"en_MY"},{country:"Indonesia",full_locale:"en_ID"},{country:"Honduras",full_locale:"es_HN"},{country:"Singapore",full_locale:"en_SG"},{country:"Poland",full_locale:"pl_PL"},{country:"Finland",full_locale:"fi_FI"},{country:"Hungary",full_locale:"hu_HU"},{country:"Greece",full_locale:"el_GR"},{country:"Turkey",full_locale:"tr_TR"},{country:"Colombia",full_locale:"es_CO"},{country:"Venezuela",full_locale:"es_VE"},{country:"Philippines",full_locale:"en_PH"},{country:"Estonia",full_locale:"et_EE"},{country:"Paraguay",full_locale:"es_PY"},{country:"United Arab Emirates",full_locale:"ar_AE"},{country:"Iceland",full_locale:"is_IS"},{country:"Sweden",full_locale:"sv_SE"},{country:"Romania",full_locale:"ro_RO"},{country:"Jamaica",full_locale:"en_JM"},{country:"Moldova",full_locale:"ro_MD"},{country:"Panama",full_locale:"es_PA"},{country:"Uruguay",full_locale:"es_UY"},{country:"Dominican Republic",full_locale:"es_DO"},{country:"El Salvador",full_locale:"es_SV"},{country:"Liechtenstein",full_locale:"de_LI"},{country:"Monaco",full_locale:"fr_MC"},{country:"San Marino",full_locale:"it_SM"},{country:"Gibraltar",full_locale:"en_GI"},{country:"Barbados",full_locale:"en_BB"},{country:"Norway",full_locale:"en_NO"},{country:"Bahrain",full_locale:"ar_BH"},{country:"Bermuda",full_locale:"en_BM"},{country:"Bahamas",full_locale:"en_BS"},{country:"Algeria",full_locale:"ar_DZ"},{country:"French Guiana",full_locale:"fr_GF"},{country:"Jordan",full_locale:"ar_JO"},{country:"Kuwait",full_locale:"ar_KW"},{country:"Libya",full_locale:"ar_LY"},{country:"Morocco",full_locale:"ar_MA"},{country:"Oman",full_locale:"ar_OM"},{country:"Qatar",full_locale:"ar_QA"},{country:"Tunisia",full_locale:"ar_TN"},{country:"Croatia",full_locale:"hr_HR"},{country:"Yemen",full_locale:"ar_YE"},{country:"Denmark",full_locale:"en_DK"},{country:"Argentina",full_locale:"es_AR"},{country:"Chile",full_locale:"es_CL"},{country:"Ecuador",full_locale:"es_EC"},{country:"Bolivia",full_locale:"es_BO"},{country:"Spain",full_locale:"es_ES"},{country:"Latvia",full_locale:"lv_LV"},{country:"Costa Rica",full_locale:"es_CR"}]}(),t=[],n=e.map((async e=>{e.providers.forEach((e=>{if(e.monetization_types.includes("flatrate")||e.monetization_types.includes("free")||e.monetization_types.includes("ads")){var n=e.monetization_types,l=new RegExp("\\s*([0-9]+)").exec(e.icon_url);let o=null!=l?`https://www.justwatch.com/images/icon/${l[0]}/s100/icon.webp`:"NULL";t.push(new me(e.id,e.short_name,e.clear_name,o,n))}}))}));return await Promise.all(n),[...new Map(t.map((e=>[e.id,e]))).values()]}(),{page:o="search"}=t,{search:r}=t,{locale:c}=t,{selection:a}=t;return e.$$set=e=>{"page"in e&&n(0,o=e.page),"search"in e&&n(1,r=e.search),"locale"in e&&n(2,c=e.locale),"selection"in e&&n(3,a=e.selection)},[o,r,c,a,l]}class Ve extends Y{constructor(e){super(),F(this,e,Ye,Fe,r,{page:0,search:1,locale:2,selection:3})}}function We(t){let n,l,o,r,c;return r=new Ve({}),{c(){n=p("main"),l=p("a"),l.innerHTML='<img src="https://colaski.github.io/global-streaming-search/images/github.png" alt="github logo" class="svelte-n4guo7"/>',o=_(),U(r.$$.fragment),g(l,"href","https://github.com/Colaski/global-streaming-search")},m(e,t){i(e,n,t),s(n,l),s(n,o),J(r,n,null),c=!0},p:e,i(e){c||(I(r.$$.fragment,e),c=!0)},o(e){j(r.$$.fragment,e),c=!1},d(e){e&&f(n),D(r)}}}return new class extends Y{constructor(e){super(),F(this,e,null,We,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
