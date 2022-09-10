(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const h=()=>`
    <div class="header-main">
      <div class="header-logo">
        <h1>
          <a href="/">
            100tifi.co
          </a>
        </h1>
      </div>
      <div class="header-nav">
        <a href="#/about/">
          About
        </a>
      </div>
    </div>
  `,i="https://rickandmortyapi.com/api/character/",c=async r=>{const e=r?`${i}${r}`:i;try{return await(await fetch(e)).json()}catch(n){console.log("Fetch Error",n)}},u=async()=>`
    <div class="characters">
      ${(await c()).results.map(n=>`
        <article class="characters-item">
          <a href="#/${n.id}/">
            <img src="${n.image}" alt="${n.name}" >
            <h2>${n.name}</h2>
          </a>
        </article>
      `).join("")}
    </div>
  `,l=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",p=async()=>{const r=l(),e=await c(r);return`
    <div class="characters-inner">
      <article class="character-card">
        <h2>${e.name}</h2>
        <img src="${e.image}" alt="${e.name}">
      </article>
      <article class="characters-card">
        <h3>Episodios: <span>${e.episode.length}</span></h3>
        <h3>Status: <span>${e.status}</span></h3>
        <h3>Specie: <span>${e.specie}</span></h3>
        <h3>Gender: <span>${e.gender}</span></h3>
        <h3>Origin: <span>${e.origin.name}</span></h3>
        <h3>Last Location: <span>${e.location.name}</span></h3>
      </article>
    </div>
  `},m=()=>`
    <div class="error">
      <h2>Error 404</h2>
    </div>
  `,f=r=>r.length<=3?r==="/"?r:"/:id":`/${r}`,v={"/":u,"/:id":p,"/contact":"Contact"},d=async()=>{var a;const r=document.getElementById("header"),e=document.getElementById("content");r.innerHTML=await h();let n=l(),s=await f(n),t=(a=v[s])!=null?a:m;e.innerHTML=await t()};window.addEventListener("load",d);window.addEventListener("hashchange",d);
