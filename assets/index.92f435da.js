(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=s(n);fetch(n.href,c)}})();function A({target:e}){const t=document.getElementById("notification");e.title&&navigator.clipboard.writeText(e.title).then(()=>{e.style.transition="250ms",e.style.transform="scale(1.2)",t.style="visibility: visible;",t.innerText="Item name copied to Clipboard!",setTimeout(()=>{e.style.transition="250ms",e.style.transform="scale(1)"},250),setTimeout(()=>{t.innerText="",t.style="visibility: hidden;"},1500)})}const O=e=>{const t=document.querySelectorAll(".item-type");let s={};const n=[...t].filter(c=>c.checked).map(c=>c.name);for(let c in e)s[c]=e[c].filter(i=>n.includes(i.category));return s};let H={},a={},m={};const C=()=>m,S=()=>a,h=()=>H,E=e=>{H={...e}},N=e=>{a=e,m.weapon=a.weapon.length,m.helmet=a.helmet.length,m.armor=a.armor.length,m.shoe=a.shoe.length,m.offhand=a.offhand.length,m.cape=a.cape.length},x=()=>{const e=document.querySelector(".options__container"),t=document.getElementById("menu-btn");e.classList.toggle("open__vertical"),t.children[0].classList.toggle("turn")},q=()=>{const e=document.getElementById("notification"),t=h();let s=[];for(let n in t)t[n].length==0&&s.push(n);const o=s.map((n,c)=>s.length>=2&&c===s.length-1?`and <span class="category">${n}</span>`:`<span class="category">${n}</span>`);e.innerHTML=s.length?`Open <span id="link">Filter Options</span> and select at least one ${o.join(", ").split(", and").join(" and")} type!`:"",s.length?(e.style="visibility: visible;",document.getElementById("link").addEventListener("click",x)):e.style="visibility: hidden;"},w=()=>{const e=document.getElementById("generate"),{weapon:t,offhand:s,helmet:o,armor:n,shoe:c,cape:i}=h();t.length&&s.length&&o.length&&n.length&&c.length&&i.length?e.classList="btn__theme btn--success":e.classList="btn__theme btn--danger"},k=e=>{const t=h()[e.dataset.type].length,s=C()[e.dataset.type];document.getElementById("generate");const o=document.querySelector(`.options__form[data-type=${e.dataset.type}]`);t?t==s?(o.classList="options__form options--success",o.dataset.status="unchecked"):(o.classList="options__form options--warn",o.dataset.status="unchecked"):(o.classList="options__form options--danger",o.dataset.status="checked"),w()},$=({target:e})=>{e.dataset.type&&(document.querySelectorAll(`.${e.dataset.type}`).forEach(t=>t.checked=e.dataset.state==="unchecked"),e.dataset.state=e.dataset.state==="checked"?"unchecked":"checked",e.dataset.state==="checked"?e.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"/></svg>
    `:e.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"/><path fill="currentColor" d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8Z"/></svg>
  `,E(O(S())),k(e),q())},R=function(){const e=document.getElementById("filter-menu__title"),t=e.innerText,s=this.style.backgroundColor;this.style.backgroundColor="#008000",localStorage.setItem("customFilter",JSON.stringify(h())),e.innerText="Saved Filter Options",e.classList.add("heading--confirmed"),setTimeout(()=>{e.innerText=t,this.style.backgroundColor=s,e.classList.remove("heading--confirmed")},2e3)};function g(e){let t=e.length,s,o;for(;t;)o=Math.floor(Math.random()*t--),s=e[t],e[t]=e[o],e[o]=s;return e}function M({weapon:e,offhand:t,helmet:s,armor:o,shoe:n,cape:c}){const i=document.querySelectorAll(".item-slot"),I=document.querySelectorAll(".image-slot"),_=document.getElementById("generate"),f=document.getElementById("shuffle");f.classList.remove("btn--success"),f.classList.add("btn--danger"),_.classList.remove("btn--success"),_.classList.add("btn--danger"),I.forEach(d=>d.classList.add("hidden")),i.forEach(d=>d.children[0].classList.remove("hidden")),g(s),g(o),g(n),g(e),g(t),g(c),setTimeout(()=>{w(),f.classList.add("btn--success"),f.classList.remove("btn--danger"),i.forEach(d=>d.children[0].classList.add("hidden"))},700)}const P=e=>{const t=document.querySelectorAll(".item-type"),s=document.querySelectorAll(".options__form"),o=[];for(let n in e)e[n].forEach(c=>{o.includes(c.category)||o.push(c.category)});t.forEach(n=>{o.includes(n.name)&&(n.checked=!0)}),s.forEach(n=>k(n))},p=({htmlElement:e,itemDataObj:t})=>{const s=e.children[1];if(t){if(s.title=t.name,e.children[0].classList.add("hidden"),s.classList.remove("hidden"),t.type.length==2){const o=document.querySelector(".offhand-slot"),n=document.querySelector(".offhand-slot__image");o.children[0].classList.add("hidden"),n.classList.remove("hidden")}}else e.children[0].classList.add("hidden")},u=(e,t,s=300)=>new Promise((o,n)=>{setTimeout(()=>{o({htmlElement:e,itemDataObj:t})},s)});function T(e){return Math.floor(Math.random()*e)}const y=(e,t,s="")=>{if(e.removeAttribute("src"),e.style.opacity=1,!t.length)return;const o=t[T(t.length)],n=`https://render.albiononline.com/v1/item/T${T(5)+4}${s}_${o.image}.png`;if(e.setAttribute("src",n),o.type==="2H"){const c=document.querySelectorAll(".item-slot")[4].children[1];c.setAttribute("src",e.src),c.style.opacity=.4,c.title=e.name}return o},J=document.querySelector(".helmet-slot__image"),G=document.querySelector(".armor-slot__image"),Q=document.querySelector(".shoe-slot__image"),z=document.querySelector(".main-hand-slot__image"),Y=document.querySelector(".offhand-slot__image"),Z=document.querySelector(".cape-slot__image"),r=document.querySelectorAll(".item-slot"),b=document.getElementById("generate"),L=document.getElementById("shuffle"),j=({weapon:e,offhand:t,helmet:s,armor:o,shoe:n,cape:c})=>{const i=b.children[0];i.classList.add("spin"),b.classList.remove("btn--success"),b.classList.add("btn--danger"),L.disabled=!0,L.classList.add("btn--danger"),r.forEach(l=>l.children[0].classList.remove("hidden"));const I=y(J,s,"_HEAD"),_=y(G,o,"_ARMOR"),f=y(Q,n,"_SHOES"),d=y(Z,c),v=y(z,e),B=(v==null?void 0:v.type)==="1H"?y(Y,t,"_OFF"):null;u(r[5],d,600).then(l=>(p(l),u(r[0],I))).then(l=>(p(l),u(r[1],_))).then(l=>(p(l),u(r[2],f))).then(l=>(p(l),u(r[3],v))).then(l=>(p(l),i.classList.remove("spin"),B?u(r[4],B):u(r[4],v))).then(l=>{p(l),w(),L.classList.remove("btn--danger"),L.classList.add("btn--success"),L.disabled=!1}).catch(l=>{console.error(l)})},K=()=>{const{weapon:e,offhand:t,helmet:s,armor:o,shoe:n,cape:c}=h();e.length&&t.length&&s.length&&o.length&&n.length&&c.length&&j(h())},V=document.getElementById("generate"),D=document.getElementById("shuffle"),U=document.getElementById("menu-btn"),X=document.getElementById("save-config"),W=async()=>{const t=await(await fetch("./items.json")).json();N({...t});const s=JSON.parse(localStorage.getItem("customFilter"));E(s||S()),P(s||S()),M(s||S()),q();const o=()=>M(h());D.addEventListener("click",o),V.addEventListener("click",K),document.getElementById("filter-menu").addEventListener("click",({target:i})=>{i.classList.contains("item-type")&&(E(O(S())),q(),k(i))});const c=document.querySelectorAll(".btn__filter");U.addEventListener("click",x),c.forEach(i=>i.addEventListener("click",$)),X.addEventListener("click",R)};document.addEventListener("DOMContentLoaded",W);const F=document.querySelector(".build-container");F.addEventListener("click",A);F.addEventListener("touchstart",A);
