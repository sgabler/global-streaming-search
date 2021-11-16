var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,s;function a(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){t.value=null==e?"":e}function b(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function w(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}t.selectedIndex=-1}function _(t){s=t}function k(){if(!s)throw new Error("Function called outside component initialization");return s}const x=[],E=[],N=[],S=[],j=Promise.resolve();let L=!1;function q(t){N.push(t)}let C=!1;const O=new Set;function P(){if(!C){C=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];_(e),R(e.$$)}for(_(null),x.length=0;E.length;)E.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];O.has(e)||(O.add(e),e())}N.length=0}while(x.length);for(;S.length;)S.pop()();L=!1,C=!1,O.clear()}}function R(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const T=new Set;let z;function H(){z={r:0,c:[],p:z}}function J(){z.r||r(z.c),z=z.p}function M(t,e){t&&t.i&&(T.delete(t),t.i(e))}function U(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),z.c.push((()=>{T.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function A(t,e){const n=e.token={};function r(t,r,o,c){if(e.token!==n)return;e.resolved=c;let l=e.ctx;void 0!==o&&(l=l.slice(),l[o]=c);const s=t&&(e.current=t)(l);let a=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(H(),U(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),J())})):e.block.d(1),s.c(),M(s,1),s.m(e.mount(),e.anchor),a=!0),e.block=s,e.blocks&&(e.blocks[r]=s),a&&P()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=k();if(t.then((t=>{_(n),r(e.then,1,e.value,t),_(null)}),(t=>{if(_(n),r(e.catch,2,e.error,t),_(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var o}function I(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}function W(t){t&&t.c()}function X(t,n,c,l){const{fragment:s,on_mount:a,on_destroy:i,after_update:u}=t.$$;s&&s.m(n,c),l||q((()=>{const n=a.map(e).filter(o);i?i.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(q)}function G(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(x.push(t),L||(L=!0,j.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,o,c,l,a,i,u,h=[-1]){const p=s;_(e);const d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:o.target||p.$$.root};u&&u(d.root);let m=!1;if(d.ctx=c?c(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),m&&B(e,t)),n})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!l&&l(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();o.intro&&M(e.$$.fragment),X(e,o.target,o.anchor,o.customElement),P()}_(p)}class F{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class V{constructor(t,e){this.country=t,this.full_locale=e}}async function K(){const t=await async function(){const t=await fetch("https://warm-coast-72718.herokuapp.com/https://apis.justwatch.com/content/locales/state",{headers:{"X-Requested-With":"fetch"}});if(0==t.ok)throw new Error("Http Error: "+t.status);return await t.json()}();var e=[];return t.forEach((t=>{var n=new V(t.country,t.full_locale);e.push(n)})),e}async function Q(){const t=await K();var e=[],n=t.map((async t=>{var n=await async function(t){const e=`https://warm-coast-72718.herokuapp.com/https://apis.justwatch.com/content/providers/locale/${t}`,n=await fetch(e,{headers:{"X-Requested-With":"fetch"}});if(0==n.ok)throw new Error("Http Error: "+n.status);return n.json()}(t.full_locale),r={country:t.country,providers:n};e.push(r)}));return await Promise.all(n),e}class Y{constructor(t,e,n,r,o,c){this.title=t,this.id=e,this.poster_uri=n,this.type=r,this.release_year=o,this.query_locale=c}}async function Z(t,e){const n=await async function(t,e){const n=`https://warm-coast-72718.herokuapp.com/https://apis.justwatch.com/content/titles/${e}/popular`,r={query:t},o=await fetch(n,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json","X-Requested-With":"fetch"}});if(0==o.ok)throw new Error("Http Error: "+o.status);return await o.json()}(t,e.full_locale);var r=[];return n.items.forEach((t=>{var n,o=new RegExp("\\s*([0-9]+)").exec(t.poster);n=null==o?"NULL":`https://images.justwatch.com/poster/${o[0]}/s592/poster.webp`,r.push(new Y(t.title,t.id,n,t.object_type,t.original_release_year,e))})),r}function tt(e){let n;return{c(){n=p("div"),n.innerHTML='<span class="svelte-152oh3b"><h1 class="svelte-152oh3b">Loading...</h1></span> \n  <span class="svelte-152oh3b"><div class="loader svelte-152oh3b"></div></span>',b(n,"padding-top","8rem"),b(n,"height","100vh")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class et extends F{constructor(t){super(),D(this,t,null,tt,c,{})}}function nt(t,e,n){const r=t.slice();return r[7]=e[n],r}function rt(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!1,pending:at,then:lt,catch:ct,value:4,blocks:[,,,]};return A(t[4],r),{c(){e=p("div"),r.block.c(),v(e,"class","class svelte-bposvh")},m(t,o){u(t,e,o),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null,n=!0},p(e,n){I(r,t=e,n)},i(t){n||(M(r.block),n=!0)},o(t){for(let t=0;t<3;t+=1){U(r.blocks[t])}n=!1},d(t){t&&f(e),r.block.d(),r.token=null,r=null}}}function ot(t){let e,n;return e=new Vt({props:{page:"SearchResults",search:t[0]+",",locale:JSON.parse(t[1])}}),{c(){W(e.$$.fragment)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.search=t[0]+","),2&n&&(r.locale=JSON.parse(t[1])),e.$set(r)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function ct(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function lt(e){let n,o,c,l,s,a,d,g,_,k,x,E,N,S,j,L,C,O,P=e[4],R=[];for(let t=0;t<P.length;t+=1)R[t]=st(nt(e,P,t));return{c(){n=p("div"),o=m(),c=p("div"),l=p("h1"),l.textContent="Global Streaming Search",s=m(),a=p("h3"),a.textContent="Search for a movie or TV show title and see what streaming services\n          offer it worldwide!",d=m(),g=p("form"),_=p("div"),k=p("input"),x=m(),E=p("input"),N=m(),S=p("select");for(let t=0;t<R.length;t+=1)R[t].c();j=m(),L=p("p"),L.textContent="Optionally select a country for the initial search, allows searching\n            in your country's native language.",v(n,"class","background svelte-bposvh"),v(l,"class","svelte-bposvh"),v(a,"class","svelte-bposvh"),v(k,"class","search svelte-bposvh"),v(k,"type","text"),v(k,"placeholder","🔎 Title"),b(k,"width","30vw"),v(E,"type","submit"),v(E,"class","search svelte-bposvh"),E.value="Search",v(S,"class","search svelte-bposvh"),void 0===e[1]&&q((()=>e[6].call(S))),v(L,"class","svelte-bposvh"),v(c,"class","top svelte-bposvh")},m(t,r){u(t,n,r),u(t,o,r),u(t,c,r),i(c,l),i(c,s),i(c,a),i(c,d),i(c,g),i(g,_),i(_,k),y(k,e[0]),i(_,x),i(_,E),i(g,N),i(g,S);for(let t=0;t<R.length;t+=1)R[t].m(S,null);var f;w(S,e[1]),i(c,j),i(c,L),C||(O=[$(k,"input",e[5]),$(S,"change",e[6]),$(g,"submit",(f=e[3],function(t){return t.preventDefault(),f.call(this,t)}))],C=!0)},p(t,e){if(1&e&&k.value!==t[0]&&y(k,t[0]),16&e){let n;for(P=t[4],n=0;n<P.length;n+=1){const r=nt(t,P,n);R[n]?R[n].p(r,e):(R[n]=st(r),R[n].c(),R[n].m(S,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=P.length}18&e&&w(S,t[1])},i:t,o:t,d(t){t&&f(n),t&&f(o),t&&f(c),h(R,t),C=!1,r(O)}}}function st(e){let n,r,o,c=e[7].country+"";return{c(){n=p("option"),r=d(c),n.__value=o=JSON.stringify(e[7]),n.value=n.__value},m(t,e){u(t,n,e),i(n,r)},p:t,d(t){t&&f(n)}}}function at(e){let n,r;return n=new et({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){U(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function it(t){let e,n,r,o;const c=[ot,rt],l=[];function s(t,e){return t[2]?0:1}return e=s(t),n=l[e]=c[e](t),{c(){n.c(),r=g()},m(t,n){l[e].m(t,n),u(t,r,n),o=!0},p(t,[o]){let a=e;e=s(t),e===a?l[e].p(t,o):(H(),U(l[a],1,1,(()=>{l[a]=null})),J(),n=l[e],n?n.p(t,o):(n=l[e]=c[e](t),n.c()),M(n,1),n.m(r.parentNode,r))},i(t){o||(M(n),o=!0)},o(t){U(n),o=!1},d(t){l[e].d(t),t&&f(r)}}}function ut(t,e,n){let r,o,c=K(),l=!1;return[r,o,l,function(){null!=r?n(2,l=!0):alert("Please input a valid title.")},c,function(){r=this.value,n(0,r)},function(){o=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(1,o),n(4,c)}]}class ft extends F{constructor(t){super(),D(this,t,ut,it,c,{})}}function ht(e){let n;return{c(){n=p("div"),n.innerHTML='<a href="https://colaski.github.io/global-streaming-search/"><h1 class="svelte-katkcs">Global Streaming Search</h1></a>',v(n,"class","svelte-katkcs")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class pt extends F{constructor(t){super(),D(this,t,null,ht,c,{})}}class dt extends Y{constructor(t,e,n,r,o){super(t.title,t.id,t.poster_uri,t.type,t.release_year,t.query_locale),this.short_description=e,this.number_seasons=n,this.backdrop_url=r,this.offers=o}}async function mt(t,e){const n=await K();let r=[];var o=n.map((async e=>{let n=await async function(t,e,n){const r=`https://apis.justwatch.com/content/titles/${n}/${t}/locale/${e}`,o=await fetch(r,{headers:{"X-Requested-With":"fetch"}});if(0==o.ok)throw new Error("Http Error: "+o.status);return o.json()}(t.id,e.full_locale,t.type);r.push({country:e.country,info:n})}));await Promise.all(o);let c=r.filter((e=>e.country===t.query_locale.country));c=c[0].info;let l=c.short_description,s=new RegExp("\\s*([0-9]+)").exec(c.backdrops[0].backdrop_url),a=null!=s?`https://images.justwatch.com/backdrop/${s[0]}/s1920/backdrop.webp`:"NULL",i="seasons"in c?c.seasons:"NULL",u=[];var f=r.map((async t=>{let n=t.country;if("offers"in(t=t.info)){let o=[];var r=t.offers.map((async t=>{t.monitization_types,e.forEach((e=>{t.provider_id==e.id&&o.push({id:e.id,short_name:e.short_name,clear_name:e.clear_name,icon_uri:e.icon_uri,monetization_types:e.monetization_types,url:t.urls.standard_web})}))}));await Promise.all(r),u.push({country:n,offers:o})}}));return await Promise.all(f),new dt(t,l,i,a,u)}class gt{constructor(t,e,n,r,o){this.id=t,this.short_name=e,this.clear_name=n,this.icon_uri=r,this.monetization_types=o}}function $t(t,e,n){const r=t.slice();return r[7]=e[n],r}function vt(t){let e,n,r,o,c,l,s,a,h;e=new pt({});let $={ctx:t,current:null,token:null,hasCatch:!1,pending:St,then:wt,catch:bt,value:4,blocks:[,,,]};return A(t[4],$),{c(){W(e.$$.fragment),n=m(),r=p("h2"),o=d("Results for "),c=p("span"),l=d(t[0]),s=m(),a=g(),$.block.c(),b(c,"color","red"),b(r,"color","white"),b(r,"text-align","center")},m(t,f){X(e,t,f),u(t,n,f),u(t,r,f),i(r,o),i(r,c),i(c,l),u(t,s,f),u(t,a,f),$.block.m(t,$.anchor=f),$.mount=()=>a.parentNode,$.anchor=a,h=!0},p(e,n){t=e,(!h||1&n)&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(l,t[0]),I($,t,n)},i(t){h||(M(e.$$.fragment,t),M($.block),h=!0)},o(t){U(e.$$.fragment,t);for(let t=0;t<3;t+=1){U($.blocks[t])}h=!1},d(t){G(e,t),t&&f(n),t&&f(r),t&&f(s),t&&f(a),$.block.d(t),$.token=null,$=null}}}function yt(t){let e,n;return e=new Vt({props:{page:"Selection",selection:t[2]}}),{c(){W(e.$$.fragment)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};4&n&&(r.selection=t[2]),e.$set(r)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function bt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function wt(e){let n;let r=function(t,e){return t[4].length>0?kt:_t}(e),o=r(e);return{c(){o.c(),n=g()},m(t,e){o.m(t,e),u(t,n,e)},p(t,e){o.p(t,e)},i:t,o:t,d(t){o.d(t),t&&f(n)}}}function _t(e){let n;return{c(){n=p("span"),n.innerHTML="<h1>No results 😭</h1> \n        <h2>please reload the page and try a different title.</h2>",b(n,"color","white"),b(n,"text-align","center")},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function kt(t){let e,n=t[4],r=[];for(let e=0;e<n.length;e+=1)r[e]=Nt($t(t,n,e));return{c(){e=p("div");for(let t=0;t<r.length;t+=1)r[t].c();v(e,"class","results svelte-1rudybt")},m(t,n){u(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null)},p(t,o){if(24&o){let c;for(n=t[4],c=0;c<n.length;c+=1){const l=$t(t,n,c);r[c]?r[c].p(l,o):(r[c]=Nt(l),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=n.length}},d(t){t&&f(e),h(r,t)}}}function xt(e){let n,r;return{c(){n=p("img"),a(n.src,r="./images/noImage.webp")||v(n,"src","./images/noImage.webp"),v(n,"alt","No image found for the "+e[7].type+" "+e[7].title),v(n,"class","svelte-1rudybt")},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function Et(e){let n,r;return{c(){n=p("img"),a(n.src,r=e[7].poster_uri)||v(n,"src",r),v(n,"alt","Poster for the "+e[7].type+" "+e[7].title),v(n,"class","svelte-1rudybt")},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function Nt(t){let e,n,r,o,c,l,s,a,h,g,y,w,_,k,x,E,N,S=t[7].title+"",j=t[7].release_year+"",L=t[7].type+"";let q=function(t,e){return"NULL"!=t[7].poster_uri?Et:xt}(t),C=q(t);function O(){return t[6](t[7])}return{c(){e=p("div"),n=p("div"),C.c(),r=m(),o=p("span"),c=p("h2"),l=d(S),s=m(),a=p("h4"),h=d("("),g=d(j),y=d(")"),w=m(),_=p("h4"),k=d(L),x=m(),v(o,"class","resultinfo svelte-1rudybt"),v(n,"class","result svelte-1rudybt"),b(e,"display","inline-block"),b(e,"margin-left","2rem"),b(e,"margin-right","2rem"),b(e,"margin-bottom","2rem")},m(t,f){u(t,e,f),i(e,n),C.m(n,null),i(n,r),i(n,o),i(o,c),i(c,l),i(o,s),i(o,a),i(a,h),i(a,g),i(a,y),i(o,w),i(o,_),i(_,k),i(e,x),E||(N=$(o,"click",O),E=!0)},p(e,n){t=e,C.p(t,n)},d(t){t&&f(e),C.d(),E=!1,N()}}}function St(e){let n,r;return n=new et({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){U(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function jt(t){let e,n,r,o;const c=[yt,vt],l=[];function s(t,e){return t[1]?0:1}return e=s(t),n=l[e]=c[e](t),{c(){n.c(),r=g()},m(t,n){l[e].m(t,n),u(t,r,n),o=!0},p(t,[o]){let a=e;e=s(t),e===a?l[e].p(t,o):(H(),U(l[a],1,1,(()=>{l[a]=null})),J(),n=l[e],n?n.p(t,o):(n=l[e]=c[e](t),n.c()),M(n,1),n.m(r.parentNode,r))},i(t){o||(M(n),o=!0)},o(t){U(n),o=!1},d(t){l[e].d(t),t&&f(r)}}}function Lt(t,e,n){let{query:r}=e,{locale:o}=e;r=r.replace(",,","");let c,l=async function(t,e){return await Z(t,e)}(r,o),s=!1;function a(t){n(1,s=!0),n(2,c=JSON.stringify(t))}return t.$$set=t=>{"query"in t&&n(0,r=t.query),"locale"in t&&n(5,o=t.locale)},[r,s,c,a,l,o,t=>a(t)]}class qt extends F{constructor(t){super(),D(this,t,Lt,jt,c,{query:0,locale:5})}}function Ct(t,e,n){const r=t.slice();return r[4]=e[n],r}function Ot(t,e,n){const r=t.slice();return r[7]=e[n],r}function Pt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Rt(t){let e,n,r,o,c,l,s,g,$,y,w,_,k,x,E,N,S,j,L,q,C,O=t[3].title+"",P=t[3].release_year+"",R=t[3].short_description+"";e=new pt({});let T=t[3].offers,z=[];for(let e=0;e<T.length;e+=1)z[e]=zt(Ct(t,T,e));return{c(){W(e.$$.fragment),n=m(),r=p("div"),o=p("div"),c=m(),l=p("div"),s=p("div"),g=p("img"),y=m(),w=p("div"),_=p("h1"),k=d(O),x=m(),E=p("h3"),N=d(P),S=m(),j=p("p"),L=d(R),q=m();for(let t=0;t<z.length;t+=1)z[t].c();b(o,"background-color","transparent"),b(o,"height","15rem"),a(g.src,$=t[3].poster_uri)||v(g,"src",$),v(g,"alt","Poster for the "+t[3].type+" "+t[3].title),v(g,"class","svelte-nayd1u"),v(w,"class","text svelte-nayd1u"),b(s,"display","flex"),b(s,"align-items","left"),v(l,"class","box svelte-nayd1u"),v(r,"class","selection svelte-nayd1u"),b(r,"--backdrop-url","url("+t[3].backdrop_url+")")},m(t,a){X(e,t,a),u(t,n,a),u(t,r,a),i(r,o),i(r,c),i(r,l),i(l,s),i(s,g),i(s,y),i(s,w),i(w,_),i(_,k),i(w,x),i(w,E),i(E,N),i(w,S),i(w,j),i(j,L),i(w,q);for(let t=0;t<z.length;t+=1)z[t].m(w,null);C=!0},p(t,e){if(1&e){let n;for(T=t[3].offers,n=0;n<T.length;n+=1){const r=Ct(t,T,n);z[n]?z[n].p(r,e):(z[n]=zt(r),z[n].c(),z[n].m(w,null))}for(;n<z.length;n+=1)z[n].d(1);z.length=T.length}},i(t){C||(M(e.$$.fragment,t),C=!0)},o(t){U(e.$$.fragment,t),C=!1},d(t){G(e,t),t&&f(n),t&&f(r),h(z,t)}}}function Tt(e){let n,r,o,c,l,s,h,g,$,y=e[7].clear_name+"";return{c(){n=p("div"),r=p("span"),o=p("a"),c=p("img"),s=m(),h=p("label"),g=d(y),a(c.src,l=e[7].icon_uri)||v(c,"src",l),v(c,"alt","Icon for "+e[7].clear_name),v(c,"id",e[7].short_name),v(c,"class","svelte-nayd1u"),v(o,"href",e[7].url),v(h,"for",$=e[7].short_name),v(h,"class","svelte-nayd1u"),b(r,"text-align","center"),b(r,"display","inline-block"),b(n,"display","inline-block")},m(t,e){u(t,n,e),i(n,r),i(r,o),i(o,c),i(r,s),i(r,h),i(h,g)},p:t,d(t){t&&f(n)}}}function zt(t){let e,n,r,o,c,l=t[4].country+"",s=t[4].offers,a=[];for(let e=0;e<s.length;e+=1)a[e]=Tt(Ot(t,s,e));return{c(){e=p("div"),n=p("h4"),r=d(l),o=m();for(let t=0;t<a.length;t+=1)a[t].c();c=m(),v(e,"class","offer svelte-nayd1u")},m(t,l){u(t,e,l),i(e,n),i(n,r),i(e,o);for(let t=0;t<a.length;t+=1)a[t].m(e,null);i(e,c)},p(t,n){if(1&n){let r;for(s=t[4].offers,r=0;r<s.length;r+=1){const o=Ot(t,s,r);a[r]?a[r].p(o,n):(a[r]=Tt(o),a[r].c(),a[r].m(e,c))}for(;r<a.length;r+=1)a[r].d(1);a.length=s.length}},d(t){t&&f(e),h(a,t)}}}function Ht(e){let n,r;return n=new et({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){U(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function Jt(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!1,pending:Ht,then:Rt,catch:Pt,value:3,blocks:[,,,]};return A(t[0],r),{c(){e=g(),r.block.c()},m(t,o){u(t,e,o),r.block.m(t,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,n=!0},p(e,[n]){I(r,t=e,n)},i(t){n||(M(r.block),n=!0)},o(t){for(let t=0;t<3;t+=1){U(r.blocks[t])}n=!1},d(t){t&&f(e),r.block.d(t),r.token=null,r=null}}}function Mt(t,e,n){let{providers:r}=e,{selection:o}=e;o=JSON.parse(o);let c=mt(o,r);return t.$$set=t=>{"providers"in t&&n(2,r=t.providers),"selection"in t&&n(1,o=t.selection)},[c,o,r]}class Ut extends F{constructor(t){super(),D(this,t,Mt,Jt,c,{providers:2,selection:1})}}function At(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function It(t){let e,n,r,o;const c=[Gt,Xt,Wt],l=[];function s(t,e){return"search"==t[0]?0:"SearchResults"==t[0]?1:"Selection"==t[0]?2:-1}return~(e=s(t))&&(n=l[e]=c[e](t)),{c(){n&&n.c(),r=g()},m(t,n){~e&&l[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=s(t),e===a?~e&&l[e].p(t,o):(n&&(H(),U(l[a],1,1,(()=>{l[a]=null})),J()),~e?(n=l[e],n?n.p(t,o):(n=l[e]=c[e](t),n.c()),M(n,1),n.m(r.parentNode,r)):n=null)},i(t){o||(M(n),o=!0)},o(t){U(n),o=!1},d(t){~e&&l[e].d(t),t&&f(r)}}}function Wt(t){let e,n;return e=new Ut({props:{providers:t[4],selection:t[3]}}),{c(){W(e.$$.fragment)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};8&n&&(r.selection=t[3]),e.$set(r)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Xt(t){let e,n;return e=new qt({props:{query:t[1]+",",locale:t[2]}}),{c(){W(e.$$.fragment)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.query=t[1]+","),4&n&&(r.locale=t[2]),e.$set(r)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Gt(e){let n,r;return n=new ft({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){U(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function Bt(e){let n,r;return n=new et({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p:t,i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){U(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function Dt(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!1,pending:Bt,then:It,catch:At,value:4,blocks:[,,,]};return A(t[4],r),{c(){e=g(),r.block.c()},m(t,o){u(t,e,o),r.block.m(t,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,n=!0},p(e,[n]){I(r,t=e,n)},i(t){n||(M(r.block),n=!0)},o(t){for(let t=0;t<3;t+=1){U(r.blocks[t])}n=!1},d(t){t&&f(e),r.block.d(t),r.token=null,r=null}}}function Ft(t,e,n){let r=async function(){var t=await Q(),e=[],n=t.map((async t=>{t.providers.forEach((t=>{if(t.monetization_types.includes("flatrate")||t.monetization_types.includes("free")||t.monetization_types.includes("ads")){var n=t.monetization_types,r=new RegExp("\\s*([0-9]+)").exec(t.icon_url);let o=null!=r?`https://www.justwatch.com/images/icon/${r[0]}/s100/icon.webp`:"NULL";e.push(new gt(t.id,t.short_name,t.clear_name,o,n))}}))}));return await Promise.all(n),[...new Map(e.map((t=>[t.id,t]))).values()]}(),{page:o="search"}=e,{search:c}=e,{locale:l}=e,{selection:s}=e;return t.$$set=t=>{"page"in t&&n(0,o=t.page),"search"in t&&n(1,c=t.search),"locale"in t&&n(2,l=t.locale),"selection"in t&&n(3,s=t.selection)},[o,c,l,s,r]}class Vt extends F{constructor(t){super(),D(this,t,Ft,Dt,c,{page:0,search:1,locale:2,selection:3})}}function Kt(e){let n,r,o,c,l,s,a,h;return a=new Vt({}),{c(){n=p("meta"),r=p("html"),o=m(),c=p("main"),l=p("a"),l.innerHTML='<img src="https://colaski.github.io/global-streaming-search/images/github.png" alt="github logo" class="svelte-iwp5ax"/>',s=m(),W(a.$$.fragment),document.title="Streaming Search",v(n,"name","viewport"),v(n,"content","width=device-width, initial-scale=1.0"),v(r,"lang","en"),v(l,"href","https://github.com/Colaski/global-streaming-search")},m(t,e){i(document.head,n),i(document.head,r),u(t,o,e),u(t,c,e),i(c,l),i(c,s),X(a,c,null),h=!0},p:t,i(t){h||(M(a.$$.fragment,t),h=!0)},o(t){U(a.$$.fragment,t),h=!1},d(t){f(n),f(r),t&&f(o),t&&f(c),G(a)}}}return new class extends F{constructor(t){super(),D(this,t,null,Kt,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
