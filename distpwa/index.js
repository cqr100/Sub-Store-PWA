!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const e={};setTimeout((()=>{(function(r,t,n){if(!t||0===t.length)return r();const o=document.getElementsByTagName("link");return Promise.all(t.map((r=>{if((r=function(e){return"/"+e}(r))in e)return;e[r]=!0;const t=r.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(n)for(let e=o.length-1;e>=0;e--){const n=o[e];if(n.href===r&&(!t||"stylesheet"===n.rel))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",(()=>t(new Error(`Unable to preload CSS for ${r}`))))})):void 0}))).then((()=>r()))})((()=>import("./main.js")),["main.js","main.css"]).then((({initializeApp:e})=>{e()}))}),9);
