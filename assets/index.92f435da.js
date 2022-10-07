(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const b=e=>{const t=document.querySelectorAll(".item-type");let n={};const s=[...t].filter(o=>o.checked).map(o=>o.name);for(let o in e)n[o]=e[o].filter(a=>s.includes(a.category));return n},c={initState:{},current:{},qty:{},isRunning:!1},P=()=>c.qty,y=()=>c.initState,G=()=>c.isRunning,k=e=>{c.isRunning=e},d=()=>c.current,S=e=>{c.current={...e}},J=e=>{c.initState=e,c.qty.weapon=c.initState.weapon.length,c.qty.helmet=c.initState.helmet.length,c.qty.armor=c.initState.armor.length,c.qty.shoe=c.initState.shoe.length,c.qty.offhand=c.initState.offhand.length,c.qty.cape=c.initState.cape.length},O=()=>{const e=document.querySelector(".options__container"),t=document.getElementById("menu-btn");e.classList.toggle("open__vertical"),t.children[0].classList.toggle("turn")},w=()=>{const e=document.getElementById("notification"),t=d();let n=[];for(let s in t)t[s].length==0&&n.push(s);const i=n.map((s,o)=>n.length>=2&&o===n.length-1?`and <span class="category">${s}</span>`:`<span class="category">${s}</span>`);e.innerHTML=n.length?`Open <span id="link">Filter Options</span> and select at least one ${i.join(", ").split(", and").join(" and")} type!`:"",n.length?(e.style="visibility: visible;",document.getElementById("link").addEventListener("click",O)):e.style="visibility: hidden;"},m=({htmlElement:e,itemDataObj:t})=>{if(t){if(e.title=t.name,e.children[0].classList.add("hidden"),e.classList.remove("hidden"),t.type.length==2){const n=document.querySelector(".offhand-slot");n.children[0].classList.add("hidden"),n.classList.remove("hidden")}}else e.children[0].classList.add("hidden")},h=(e,t,n=250)=>(e.dataset.state&&(n=0),new Promise((i,s)=>{setTimeout(()=>{i({htmlElement:e,itemDataObj:t})},n)}));function M(e){return Math.floor(Math.random()*e)}const f=(e,t,n="")=>{if(e.dataset.state||!t.length)return;const i=t[M(t.length)];e.dataset.type=i.type;const s=`https://render.albiononline.com/v1/item/T${M(5)+4}${n}_${i.image}.png`;if(e.style.backgroundImage=`url(${s})`,i.type==="2H"){const o=document.querySelectorAll(".item-slot")[4];o.style.backgroundImage=`url(${s})`,o.title=e.name}return i};function g(e){let t=e.length,n,i;for(;t;)i=Math.floor(Math.random()*t--),n=e[t],e[t]=e[i],e[i]=n;return e}function A({weapon:e,offhand:t,helmet:n,armor:i,shoe:s,cape:o}){k(!0),p(),R();const a=document.querySelectorAll(".item-slot");document.querySelectorAll(".image-slot").forEach(u=>u.classList.add("hidden")),a.forEach(u=>u.children[0].classList.remove("hidden")),g(n),g(i),g(s),g(e),g(t),g(o),setTimeout(()=>{k(!1),p(),a.forEach(u=>u.children[0].classList.add("hidden"))},750)}const q=()=>A(d()),R=()=>{const e=document.getElementById("generate"),t=document.getElementById("shuffle");e.removeEventListener("click",I),t.removeEventListener("click",q),e.classList.remove("btn--success"),e.classList.add("btn--danger"),t.classList.remove("btn--success"),t.classList.add("btn--danger")},W=({weapon:e,offhand:t,helmet:n,armor:i,shoe:s,cape:o})=>{const a=document.querySelector(".helmet-slot"),L=document.querySelector(".armor-slot"),u=document.querySelector(".shoe-slot"),v=document.querySelector(".main-hand-slot"),E=document.querySelector(".offhand-slot"),T=document.querySelector(".cape-slot"),r=document.querySelectorAll(".item-slot"),B=document.getElementById("generate").children[0];B.classList.add("spin"),k(!0),p(),R(),r.forEach(l=>{l.dataset.state||l.children[0].classList.remove("hidden")});const F=f(a,n,"_HEAD"),N=f(L,i,"_ARMOR"),$=f(u,s,"_SHOES"),x=f(T,o),H=f(v,e),C=v.dataset.type==="1H"?f(E,t,"_OFF"):null;E.style.opacity="1",v.dataset.type=="2H"&&v.dataset.state&&(E.style.opacity="0.4"),h(r[5],x,400).then(l=>(m(l),h(r[0],F))).then(l=>(m(l),h(r[1],N))).then(l=>(m(l),h(r[2],$))).then(l=>(m(l),h(r[3],H))).then(l=>(m(l),B.classList.remove("spin"),r[3].dataset.type==="1H"?(r[4].style.opacity="1",h(r[4],C)):(r[4].style.opacity="0.4",h(r[4],H)))).then(l=>{k(!1),p(),m(l)}).catch(l=>{console.error(l)})},I=()=>W(d()),p=()=>{const e=document.getElementById("generate"),t=document.getElementById("shuffle"),{weapon:n,offhand:i,helmet:s,armor:o,shoe:a,cape:L}=d();n.length&&i.length&&s.length&&o.length&&a.length&&L.length?(e.addEventListener("click",I),t.addEventListener("click",q),G()||(e.classList="btn__theme btn--success",t.classList="btn__theme btn--success")):(e.removeEventListener("click",I),t.removeEventListener("click",q),e.classList="btn__theme btn--danger",t.classList="btn__theme btn--danger")},_=e=>{const t=d()[e.dataset.type].length;P()[e.dataset.type],document.getElementById("generate");const n=document.querySelector(`.options__form[data-type=${e.dataset.type}]`);t?(n.classList="options__form options--success",n.dataset.status="unchecked"):(n.classList="options__form options--danger",n.dataset.status="checked"),p()},z=({target:e})=>{e.dataset.type&&(document.querySelectorAll(`.${e.dataset.type}`).forEach(t=>t.checked=e.dataset.state==="unchecked"),e.dataset.state=e.dataset.state==="checked"?"unchecked":"checked",e.dataset.state==="checked"?e.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"/></svg>
    `:e.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"/><path fill="currentColor" d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8Z"/></svg>
  `,S(b(y())),_(e),w())},Q=function(){const e=document.getElementById("filter-menu__title"),t=e.innerText,n=this.style.backgroundColor;this.style.backgroundColor="#008000",localStorage.setItem("customFilter",JSON.stringify(d())),e.innerText="Saved Filter Options",e.classList.add("heading--confirmed"),setTimeout(()=>{e.innerText=t,this.style.backgroundColor=n,e.classList.remove("heading--confirmed")},2e3)},Y=e=>{const t=document.querySelectorAll(".item-type"),n=document.querySelectorAll(".options__form"),i=[];for(let s in e)e[s].forEach(o=>{i.includes(o.category)||i.push(o.category)});t.forEach(s=>{i.includes(s.name)&&(s.checked=!0)}),n.forEach(s=>_(s))},Z=({target:e})=>{e.classList.contains("item-type")&&(S(b(y())),p(),w(),_(e))},j=e=>{if(console.log(e.dataset),e.dataset.state=="blocked"){const t=d().weapon.filter(n=>n.type=="1H");d().weapon=t,S(d())}else e.dataset.state||S(b(y()))},K=function(){if(!this.dataset.state&&this.style.backgroundImage)if(this.dataset.type==="2H"){this.dataset.state="blocked",this.children[1].style.opacity=1,this.children[1].classList.remove("hidden");const e=document.querySelector(".offhand-slot");e.dataset.state="blocked"}else this.dataset.type&&(this.dataset.state="blocked",this.children[1].style.opacity=1,this.children[1].classList.remove("hidden"));else if(this.dataset.state)if(this.dataset.type==="2H"){const e=document.querySelector(".offhand-slot");delete this.dataset.state,delete e.dataset.state,this.children[1].style.opacity=1,this.children[1].classList.add("hidden")}else this.dataset.type&&(delete this.dataset.state,this.children[1].classList.add("hidden"));j(this)},V=function(){!this.dataset.state&&this.style.backgroundImage&&(this.children[1].style.opacity=.65,this.children[1].classList.remove("hidden"))},D=function(){!this.dataset.state&&this.style.backgroundImage&&this.children[1].classList.add("hidden")},U=document.getElementById("generate"),X=document.getElementById("shuffle"),ee=document.getElementById("menu-btn"),te=document.getElementById("save-config"),ne=document.querySelectorAll(".item-slot"),se=async()=>{const t=await(await fetch("./items.json")).json();J({...t});const n=JSON.parse(localStorage.getItem("customFilter"));S(n||y()),Y(n||y()),A(n||y()),w(),X.addEventListener("click",q),U.addEventListener("click",I),document.getElementById("filter-menu").addEventListener("click",Z);const s=document.querySelectorAll(".btn__filter");ee.addEventListener("click",O),s.forEach(o=>o.addEventListener("click",z)),te.addEventListener("click",Q),ne.forEach(o=>{o.addEventListener("click",K),o.addEventListener("mouseover",V),o.addEventListener("mouseout",D)})};document.addEventListener("DOMContentLoaded",se);
