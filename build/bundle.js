var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,s;function a(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){t.value=null==e?"":e}function b(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function w(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}t.selectedIndex=-1}function _(t){s=t}function k(){if(!s)throw new Error("Function called outside component initialization");return s}const x=[],E=[],q=[],N=[],S=Promise.resolve();let j=!1;function L(t){q.push(t)}let C=!1;const T=new Set;function z(){if(!C){C=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];_(e),O(e.$$)}for(_(null),x.length=0;E.length;)E.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];T.has(e)||(T.add(e),e())}q.length=0}while(x.length);for(;N.length;)N.pop()();j=!1,C=!1,T.clear()}}function O(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const P=new Set;let R;function H(){R={r:0,c:[],p:R}}function M(){R.r||r(R.c),R=R.p}function J(t,e){t&&t.i&&(P.delete(t),t.i(e))}function I(t,e,n,r){if(t&&t.o){if(P.has(t))return;P.add(t),R.c.push((()=>{P.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function U(t,e){const n=e.token={};function r(t,r,o,c){if(e.token!==n)return;e.resolved=c;let l=e.ctx;void 0!==o&&(l=l.slice(),l[o]=c);const s=t&&(e.current=t)(l);let a=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(H(),I(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),M())})):e.block.d(1),s.c(),J(s,1),s.m(e.mount(),e.anchor),a=!0),e.block=s,e.blocks&&(e.blocks[r]=s),a&&z()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=k();if(t.then((t=>{_(n),r(e.then,1,e.value,t),_(null)}),(t=>{if(_(n),r(e.catch,2,e.error,t),_(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var o}function A(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}function W(t){t&&t.c()}function X(t,n,c,l){const{fragment:s,on_mount:a,on_destroy:i,after_update:u}=t.$$;s&&s.m(n,c),l||L((()=>{const n=a.map(e).filter(o);i?i.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(L)}function G(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(x.push(t),j||(j=!0,S.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,o,c,l,a,i,u,h=[-1]){const p=s;_(e);const d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:o.target||p.$$.root};u&&u(d.root);let m=!1;if(d.ctx=c?c(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),m&&B(e,t)),n})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!l&&l(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();o.intro&&J(e.$$.fragment),X(e,o.target,o.anchor,o.customElement),z()}_(p)}class F{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function V(){let t=["https://warm-coast-72718.herokuapp.com/","https://afternoon-falls-07756.herokuapp.com/","https://boiling-oasis-44034.herokuapp.com/","https://ancient-lowlands-02291.herokuapp.com/","https://agile-forest-65193.herokuapp.com/"];return t[Math.floor(Math.random()*t.length)]}class K{constructor(t,e){this.country=t,this.full_locale=e}}async function Q(){const t=await async function(){const t=`${V()}https://apis.justwatch.com/content/locales/state`,e=await fetch(t,{headers:{"X-Requested-With":"fetch"}});if(0==e.ok)throw new Error("Http Error: "+e.status);return await e.json()}();var e=[];return t.forEach((t=>{var n=new K(t.country,t.full_locale);e.push(n)})),e}async function Y(){const t=await Q();var e=[],n=t.map((async t=>{var n=await async function(t){const e=`${V()}https://apis.justwatch.com/content/providers/locale/${t}`,n=await fetch(e,{headers:{"X-Requested-With":"fetch"}});if(0==n.ok)throw new Error("Http Error: "+n.status);return n.json()}(t.full_locale),r={country:t.country,providers:n};e.push(r)}));return await Promise.all(n),e}class Z{constructor(t,e,n,r,o,c){this.title=t,this.id=e,this.poster_uri=n,this.type=r,this.release_year=o,this.query_locale=c}}async function tt(t,e){const n=await async function(t,e){console.log(V());const n=`${V()}https://apis.justwatch.com/content/titles/${e}/popular`,r={query:t},o=await fetch(n,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json","X-Requested-With":"fetch"}});if(0==o.ok)throw new Error("Http Error: "+o.status);return await o.json()}(t,e.full_locale);var r=[];return n.items.forEach((t=>{var n,o=new RegExp("\\s*([0-9]+)").exec(t.poster);n=null==o?"NULL":`https://images.justwatch.com/poster/${o[0]}/s592/poster.webp`,r.push(new Z(t.title,t.id,n,t.object_type,t.original_release_year,e))})),r}function et(e){let n;return{c(){n=p("div"),n.innerHTML='<span class="svelte-152oh3b"><h1 class="svelte-152oh3b">Loading...</h1></span> \n  <span class="svelte-152oh3b"><div class="loader svelte-152oh3b"></div></span>',b(n,"padding-top","8rem"),b(n,"height","100vh")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class nt extends F{constructor(t){super(),D(this,t,null,et,c,{})}}function rt(t,e,n){const r=t.slice();return r[7]=e[n],r}function ot(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!1,pending:it,then:st,catch:lt,value:4,blocks:[,,,]};return U(t[4],r),{c(){e=p("div"),r.block.c(),y(e,"class","class svelte-1tqhm95")},m(t,o){u(t,e,o),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null,n=!0},p(e,n){A(r,t=e,n)},i(t){n||(J(r.block),n=!0)},o(t){for(let t=0;t<3;t+=1){I(r.blocks[t])}n=!1},d(t){t&&f(e),r.block.d(),r.token=null,r=null}}}function ct(t){let e,n;return e=new Kt({props:{page:"SearchResults",search:t[0]+",",locale:JSON.parse(t[1])}}),{c(){W(e.$$.fragment)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.search=t[0]+","),2&n&&(r.locale=JSON.parse(t[1])),e.$set(r)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function lt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function st(e){let n,o,c,l,s,a,d,g,_,k,x,E,q,N,S,j,C,T,z=e[4],O=[];for(let t=0;t<z.length;t+=1)O[t]=at(rt(e,z,t));return{c(){n=p("div"),o=m(),c=p("div"),l=p("h1"),l.textContent="Global Streaming Search",s=m(),a=p("h3"),a.textContent="Search for a movie or TV show title and see what streaming services\n          offer it worldwide!",d=m(),g=p("p"),g.textContent="Optionally select a country for the initial search, allows searching\n          in your country's native language.",_=m(),k=p("form"),x=p("div"),E=p("input"),q=m(),N=p("input"),S=m(),j=p("select");for(let t=0;t<O.length;t+=1)O[t].c();y(n,"class","background svelte-1tqhm95"),y(l,"class","svelte-1tqhm95"),y(a,"class","svelte-1tqhm95"),y(g,"class","svelte-1tqhm95"),y(E,"class","search svelte-1tqhm95"),y(E,"type","text"),y(E,"placeholder","🔎 Title"),b(E,"width","30vw"),y(N,"type","submit"),y(N,"class","search svelte-1tqhm95"),N.value="Search",y(j,"class","search svelte-1tqhm95"),void 0===e[1]&&L((()=>e[6].call(j))),y(c,"class","top svelte-1tqhm95")},m(t,r){u(t,n,r),u(t,o,r),u(t,c,r),i(c,l),i(c,s),i(c,a),i(c,d),i(c,g),i(c,_),i(c,k),i(k,x),i(x,E),v(E,e[0]),i(x,q),i(x,N),i(k,S),i(k,j);for(let t=0;t<O.length;t+=1)O[t].m(j,null);var f;w(j,e[1]),C||(T=[$(E,"input",e[5]),$(j,"change",e[6]),$(k,"submit",(f=e[3],function(t){return t.preventDefault(),f.call(this,t)}))],C=!0)},p(t,e){if(1&e&&E.value!==t[0]&&v(E,t[0]),16&e){let n;for(z=t[4],n=0;n<z.length;n+=1){const r=rt(t,z,n);O[n]?O[n].p(r,e):(O[n]=at(r),O[n].c(),O[n].m(j,null))}for(;n<O.length;n+=1)O[n].d(1);O.length=z.length}18&e&&w(j,t[1])},i:t,o:t,d(t){t&&f(n),t&&f(o),t&&f(c),h(O,t),C=!1,r(T)}}}function at(e){let n,r,o,c=e[7].country+"";return{c(){n=p("option"),r=d(c),n.__value=o=JSON.stringify(e[7]),n.value=n.__value},m(t,e){u(t,n,e),i(n,r)},p:t,d(t){t&&f(n)}}}function it(e){let n,r;return n=new nt({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(J(n.$$.fragment,t),r=!0)},o(t){I(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function ut(t){let e,n,r,o;const c=[ct,ot],l=[];function s(t,e){return t[2]?0:1}return e=s(t),n=l[e]=c[e](t),{c(){n.c(),r=g()},m(t,n){l[e].m(t,n),u(t,r,n),o=!0},p(t,[o]){let a=e;e=s(t),e===a?l[e].p(t,o):(H(),I(l[a],1,1,(()=>{l[a]=null})),M(),n=l[e],n?n.p(t,o):(n=l[e]=c[e](t),n.c()),J(n,1),n.m(r.parentNode,r))},i(t){o||(J(n),o=!0)},o(t){I(n),o=!1},d(t){l[e].d(t),t&&f(r)}}}function ft(t,e,n){let r,o,c=Q(),l=!1;return[r,o,l,function(){null!=r?n(2,l=!0):alert("Please input a valid title.")},c,function(){r=this.value,n(0,r)},function(){o=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(1,o),n(4,c)}]}class ht extends F{constructor(t){super(),D(this,t,ft,ut,c,{})}}function pt(e){let n;return{c(){n=p("div"),n.innerHTML='<a href="https://colaski.github.io/global-streaming-search/"><h1 class="svelte-szpydc">Global Streaming Search</h1></a>',y(n,"class","svelte-szpydc")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class dt extends F{constructor(t){super(),D(this,t,null,pt,c,{})}}class mt extends Z{constructor(t,e,n,r,o){super(t.title,t.id,t.poster_uri,t.type,t.release_year,t.query_locale),this.short_description=e,this.number_seasons=n,this.backdrop_url=r,this.offers=o}}async function gt(t,e){const n=await Q();let r=[];var o=n.map((async e=>{let n=await async function(t,e,n){const r=`${V()}https://apis.justwatch.com/content/titles/${n}/${t}/locale/${e}`,o=await fetch(r,{headers:{"X-Requested-With":"fetch"}});if(0==o.ok)throw new Error("Http Error: "+o.status);return o.json()}(t.id,e.full_locale,t.type);r.push({country:e.country,info:n})}));await Promise.all(o);let c=r.filter((e=>e.country===t.query_locale.country));c=c[0].info;let l=c.short_description,s=new RegExp("\\s*([0-9]+)").exec(c.backdrops[0].backdrop_url),a=null!=s?`https://images.justwatch.com/backdrop/${s[0]}/s1920/backdrop.webp`:"NULL",i="seasons"in c?c.seasons:"NULL",u=[];var f=r.map((async t=>{let n=t.country;if("offers"in(t=t.info)){let o=[];var r=t.offers.map((async t=>{t.monitization_types,e.forEach((e=>{t.provider_id==e.id&&o.push({id:e.id,short_name:e.short_name,clear_name:e.clear_name,icon_uri:e.icon_uri,monetization_types:e.monetization_types,url:t.urls.standard_web})}))}));await Promise.all(r),u.push({country:n,offers:o})}}));return await Promise.all(f),new mt(t,l,i,a,u)}class $t{constructor(t,e,n,r,o){this.id=t,this.short_name=e,this.clear_name=n,this.icon_uri=r,this.monetization_types=o}}function yt(t,e,n){const r=t.slice();return r[7]=e[n],r}function vt(t){let e,n,r,o,c,l,s,a,h;e=new dt({});let $={ctx:t,current:null,token:null,hasCatch:!1,pending:St,then:_t,catch:wt,value:4,blocks:[,,,]};return U(t[4],$),{c(){W(e.$$.fragment),n=m(),r=p("h2"),o=d("Results for "),c=p("span"),l=d(t[0]),s=m(),a=g(),$.block.c(),b(c,"color","red"),b(r,"color","white"),b(r,"text-align","center")},m(t,f){X(e,t,f),u(t,n,f),u(t,r,f),i(r,o),i(r,c),i(c,l),u(t,s,f),u(t,a,f),$.block.m(t,$.anchor=f),$.mount=()=>a.parentNode,$.anchor=a,h=!0},p(e,n){t=e,(!h||1&n)&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(l,t[0]),A($,t,n)},i(t){h||(J(e.$$.fragment,t),J($.block),h=!0)},o(t){I(e.$$.fragment,t);for(let t=0;t<3;t+=1){I($.blocks[t])}h=!1},d(t){G(e,t),t&&f(n),t&&f(r),t&&f(s),t&&f(a),$.block.d(t),$.token=null,$=null}}}function bt(t){let e,n;return e=new Kt({props:{page:"Selection",selection:t[2]}}),{c(){W(e.$$.fragment)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};4&n&&(r.selection=t[2]),e.$set(r)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function wt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function _t(e){let n;let r=function(t,e){return t[4].length>0?xt:kt}(e),o=r(e);return{c(){o.c(),n=g()},m(t,e){o.m(t,e),u(t,n,e)},p(t,e){o.p(t,e)},i:t,o:t,d(t){o.d(t),t&&f(n)}}}function kt(e){let n;return{c(){n=p("span"),n.innerHTML="<h1>No results 😭</h1> \n        <h2>please reload the page and try a different title.</h2>",b(n,"color","white"),b(n,"text-align","center")},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function xt(t){let e,n=t[4],r=[];for(let e=0;e<n.length;e+=1)r[e]=Nt(yt(t,n,e));return{c(){e=p("div");for(let t=0;t<r.length;t+=1)r[t].c();y(e,"class","results svelte-1rudybt")},m(t,n){u(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null)},p(t,o){if(24&o){let c;for(n=t[4],c=0;c<n.length;c+=1){const l=yt(t,n,c);r[c]?r[c].p(l,o):(r[c]=Nt(l),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=n.length}},d(t){t&&f(e),h(r,t)}}}function Et(e){let n,r;return{c(){n=p("img"),a(n.src,r="./images/noImage.webp")||y(n,"src","./images/noImage.webp"),y(n,"alt","No image found for the "+e[7].type+" "+e[7].title),y(n,"class","svelte-1rudybt")},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function qt(e){let n,r;return{c(){n=p("img"),a(n.src,r=e[7].poster_uri)||y(n,"src",r),y(n,"alt","Poster for the "+e[7].type+" "+e[7].title),y(n,"class","svelte-1rudybt")},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function Nt(t){let e,n,r,o,c,l,s,a,h,g,v,w,_,k,x,E,q,N=t[7].title+"",S=t[7].release_year+"",j=t[7].type+"";let L=function(t,e){return"NULL"!=t[7].poster_uri?qt:Et}(t),C=L(t);function T(){return t[6](t[7])}return{c(){e=p("div"),n=p("div"),C.c(),r=m(),o=p("span"),c=p("h2"),l=d(N),s=m(),a=p("h4"),h=d("("),g=d(S),v=d(")"),w=m(),_=p("h4"),k=d(j),x=m(),y(o,"class","resultinfo svelte-1rudybt"),y(n,"class","result svelte-1rudybt"),b(e,"display","inline-block"),b(e,"margin-left","2rem"),b(e,"margin-right","2rem"),b(e,"margin-bottom","2rem")},m(t,f){u(t,e,f),i(e,n),C.m(n,null),i(n,r),i(n,o),i(o,c),i(c,l),i(o,s),i(o,a),i(a,h),i(a,g),i(a,v),i(o,w),i(o,_),i(_,k),i(e,x),E||(q=$(o,"click",T),E=!0)},p(e,n){t=e,C.p(t,n)},d(t){t&&f(e),C.d(),E=!1,q()}}}function St(e){let n,r;return n=new nt({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(J(n.$$.fragment,t),r=!0)},o(t){I(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function jt(t){let e,n,r,o;const c=[bt,vt],l=[];function s(t,e){return t[1]?0:1}return e=s(t),n=l[e]=c[e](t),{c(){n.c(),r=g()},m(t,n){l[e].m(t,n),u(t,r,n),o=!0},p(t,[o]){let a=e;e=s(t),e===a?l[e].p(t,o):(H(),I(l[a],1,1,(()=>{l[a]=null})),M(),n=l[e],n?n.p(t,o):(n=l[e]=c[e](t),n.c()),J(n,1),n.m(r.parentNode,r))},i(t){o||(J(n),o=!0)},o(t){I(n),o=!1},d(t){l[e].d(t),t&&f(r)}}}function Lt(t,e,n){let{query:r}=e,{locale:o}=e;r=r.replace(",,","");let c,l=async function(t,e){return await tt(t,e)}(r,o),s=!1;function a(t){n(1,s=!0),n(2,c=JSON.stringify(t))}return t.$$set=t=>{"query"in t&&n(0,r=t.query),"locale"in t&&n(5,o=t.locale)},[r,s,c,a,l,o,t=>a(t)]}class Ct extends F{constructor(t){super(),D(this,t,Lt,jt,c,{query:0,locale:5})}}function Tt(t,e,n){const r=t.slice();return r[4]=e[n],r}function zt(t,e,n){const r=t.slice();return r[7]=e[n],r}function Ot(e){let n,r,o,c;return n=new dt({}),{c(){W(n.$$.fragment),r=m(),o=p("div"),o.innerHTML="<h1>The website is being rate limited 😞, please try again later</h1> \n    <p></p> \n    <h3>If you happen to know what Node.js is you can run this website locally and avoid rate limits.</h3> \n    <h3>Click the Github logo in the corner for more information.</h3>",b(o,"text-align","center"),b(o,"color","white"),b(o,"margin","1rem")},m(t,e){X(n,t,e),u(t,r,e),u(t,o,e),c=!0},p:t,i(t){c||(J(n.$$.fragment,t),c=!0)},o(t){I(n.$$.fragment,t),c=!1},d(t){G(n,t),t&&f(r),t&&f(o)}}}function Pt(t){let e,n,r,o,c,l,s,g,$,v,w,_,k,x,E,q,N,S,j,L,C,T=t[3].title+"",z=t[3].release_year+"",O=t[3].short_description+"";e=new dt({});let P=t[3].offers,R=[];for(let e=0;e<P.length;e+=1)R[e]=Ht(Tt(t,P,e));return{c(){W(e.$$.fragment),n=m(),r=p("div"),o=p("div"),c=m(),l=p("div"),s=p("div"),g=p("img"),v=m(),w=p("div"),_=p("h1"),k=d(T),x=m(),E=p("h3"),q=d(z),N=m(),S=p("p"),j=d(O),L=m();for(let t=0;t<R.length;t+=1)R[t].c();b(o,"background-color","transparent"),b(o,"height","15rem"),a(g.src,$=t[3].poster_uri)||y(g,"src",$),y(g,"alt","Poster for the "+t[3].type+" "+t[3].title),y(g,"class","svelte-nayd1u"),y(w,"class","text svelte-nayd1u"),b(s,"display","flex"),b(s,"align-items","left"),y(l,"class","box svelte-nayd1u"),y(r,"class","selection svelte-nayd1u"),b(r,"--backdrop-url","url("+t[3].backdrop_url+")")},m(t,a){X(e,t,a),u(t,n,a),u(t,r,a),i(r,o),i(r,c),i(r,l),i(l,s),i(s,g),i(s,v),i(s,w),i(w,_),i(_,k),i(w,x),i(w,E),i(E,q),i(w,N),i(w,S),i(S,j),i(w,L);for(let t=0;t<R.length;t+=1)R[t].m(w,null);C=!0},p(t,e){if(1&e){let n;for(P=t[3].offers,n=0;n<P.length;n+=1){const r=Tt(t,P,n);R[n]?R[n].p(r,e):(R[n]=Ht(r),R[n].c(),R[n].m(w,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=P.length}},i(t){C||(J(e.$$.fragment,t),C=!0)},o(t){I(e.$$.fragment,t),C=!1},d(t){G(e,t),t&&f(n),t&&f(r),h(R,t)}}}function Rt(e){let n,r,o,c,l,s,h,g,$,v=e[7].clear_name+"";return{c(){n=p("div"),r=p("span"),o=p("a"),c=p("img"),s=m(),h=p("label"),g=d(v),a(c.src,l=e[7].icon_uri)||y(c,"src",l),y(c,"alt","Icon for "+e[7].clear_name),y(c,"id",e[7].short_name),y(c,"class","svelte-nayd1u"),y(o,"href",e[7].url),y(h,"for",$=e[7].short_name),y(h,"class","svelte-nayd1u"),b(r,"text-align","center"),b(r,"display","inline-block"),b(n,"display","inline-block")},m(t,e){u(t,n,e),i(n,r),i(r,o),i(o,c),i(r,s),i(r,h),i(h,g)},p:t,d(t){t&&f(n)}}}function Ht(t){let e,n,r,o,c,l=t[4].country+"",s=t[4].offers,a=[];for(let e=0;e<s.length;e+=1)a[e]=Rt(zt(t,s,e));return{c(){e=p("div"),n=p("h4"),r=d(l),o=m();for(let t=0;t<a.length;t+=1)a[t].c();c=m(),y(e,"class","offer svelte-nayd1u")},m(t,l){u(t,e,l),i(e,n),i(n,r),i(e,o);for(let t=0;t<a.length;t+=1)a[t].m(e,null);i(e,c)},p(t,n){if(1&n){let r;for(s=t[4].offers,r=0;r<s.length;r+=1){const o=zt(t,s,r);a[r]?a[r].p(o,n):(a[r]=Rt(o),a[r].c(),a[r].m(e,c))}for(;r<a.length;r+=1)a[r].d(1);a.length=s.length}},d(t){t&&f(e),h(a,t)}}}function Mt(e){let n,r;return n=new nt({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(J(n.$$.fragment,t),r=!0)},o(t){I(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function Jt(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:Mt,then:Pt,catch:Ot,value:3,error:10,blocks:[,,,]};return U(t[0],r),{c(){e=g(),r.block.c()},m(t,o){u(t,e,o),r.block.m(t,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,n=!0},p(e,[n]){A(r,t=e,n)},i(t){n||(J(r.block),n=!0)},o(t){for(let t=0;t<3;t+=1){I(r.blocks[t])}n=!1},d(t){t&&f(e),r.block.d(t),r.token=null,r=null}}}function It(t,e,n){let{providers:r}=e,{selection:o}=e;o=JSON.parse(o);let c=gt(o,r);return t.$$set=t=>{"providers"in t&&n(2,r=t.providers),"selection"in t&&n(1,o=t.selection)},[c,o,r]}class Ut extends F{constructor(t){super(),D(this,t,It,Jt,c,{providers:2,selection:1})}}function At(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Wt(t){let e,n,r,o;const c=[Bt,Gt,Xt],l=[];function s(t,e){return"search"==t[0]?0:"SearchResults"==t[0]?1:"Selection"==t[0]?2:-1}return~(e=s(t))&&(n=l[e]=c[e](t)),{c(){n&&n.c(),r=g()},m(t,n){~e&&l[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=s(t),e===a?~e&&l[e].p(t,o):(n&&(H(),I(l[a],1,1,(()=>{l[a]=null})),M()),~e?(n=l[e],n?n.p(t,o):(n=l[e]=c[e](t),n.c()),J(n,1),n.m(r.parentNode,r)):n=null)},i(t){o||(J(n),o=!0)},o(t){I(n),o=!1},d(t){~e&&l[e].d(t),t&&f(r)}}}function Xt(t){let e,n;return e=new Ut({props:{providers:t[4],selection:t[3]}}),{c(){W(e.$$.fragment)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};8&n&&(r.selection=t[3]),e.$set(r)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Gt(t){let e,n;return e=new Ct({props:{query:t[1]+",",locale:t[2]}}),{c(){W(e.$$.fragment)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.query=t[1]+","),4&n&&(r.locale=t[2]),e.$set(r)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Bt(e){let n,r;return n=new ht({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(J(n.$$.fragment,t),r=!0)},o(t){I(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function Dt(e){let n,r;return n=new nt({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(J(n.$$.fragment,t),r=!0)},o(t){I(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function Ft(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!1,pending:Dt,then:Wt,catch:At,value:4,blocks:[,,,]};return U(t[4],r),{c(){e=g(),r.block.c()},m(t,o){u(t,e,o),r.block.m(t,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,n=!0},p(e,[n]){A(r,t=e,n)},i(t){n||(J(r.block),n=!0)},o(t){for(let t=0;t<3;t+=1){I(r.blocks[t])}n=!1},d(t){t&&f(e),r.block.d(t),r.token=null,r=null}}}function Vt(t,e,n){let r=async function(){var t=await Y(),e=[],n=t.map((async t=>{t.providers.forEach((t=>{if(t.monetization_types.includes("flatrate")||t.monetization_types.includes("free")||t.monetization_types.includes("ads")){var n=t.monetization_types,r=new RegExp("\\s*([0-9]+)").exec(t.icon_url);let o=null!=r?`https://www.justwatch.com/images/icon/${r[0]}/s100/icon.webp`:"NULL";e.push(new $t(t.id,t.short_name,t.clear_name,o,n))}}))}));return await Promise.all(n),[...new Map(e.map((t=>[t.id,t]))).values()]}(),{page:o="search"}=e,{search:c}=e,{locale:l}=e,{selection:s}=e;return t.$$set=t=>{"page"in t&&n(0,o=t.page),"search"in t&&n(1,c=t.search),"locale"in t&&n(2,l=t.locale),"selection"in t&&n(3,s=t.selection)},[o,c,l,s,r]}class Kt extends F{constructor(t){super(),D(this,t,Vt,Ft,c,{page:0,search:1,locale:2,selection:3})}}function Qt(e){let n,r,o,c,l;return c=new Kt({}),{c(){n=p("main"),r=p("a"),r.innerHTML='<img src="https://colaski.github.io/global-streaming-search/images/github.png" alt="github logo" class="svelte-n4guo7"/>',o=m(),W(c.$$.fragment),y(r,"href","https://github.com/Colaski/global-streaming-search")},m(t,e){u(t,n,e),i(n,r),i(n,o),X(c,n,null),l=!0},p:t,i(t){l||(J(c.$$.fragment,t),l=!0)},o(t){I(c.$$.fragment,t),l=!1},d(t){t&&f(n),G(c)}}}return new class extends F{constructor(t){super(),D(this,t,null,Qt,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
