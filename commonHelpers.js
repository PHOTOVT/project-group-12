import{f as u,a as m,b as d,i as f}from"./assets/vendor-84226dc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();new u(".accordion-container-faq",{duration:400,showMultiple:!0});const p=document.querySelectorAll(".faq-show-hidden-text-button");p.forEach(o=>{o.addEventListener("click",()=>{o.querySelector(".faq-button-icon").classList.toggle("arrow-up")})});const i={inputElements:document.querySelectorAll("input"),inputEmail:document.querySelector(".form-email"),inputComment:document.querySelector(".form-comment"),buttonElement:document.querySelector(".form-button"),formElement:document.querySelector(".form-cooperation")},h=25,y=(o,r)=>{o.value.length>r&&(o.value=o.value.slice(0,r)+"...")};i.inputElements.forEach(o=>{o.addEventListener("input",()=>y(o,h))});async function g(o,r){const n="https://portfolio-js.b.goit.study/api/requests",s={email:o,comment:r};try{const e=await m.post(n,s),t=d.create(`
      <div class="modal">
      <div class="modal-close-icon-container">
  <svg class="modal-close-icon" width="22" height="22">
    <use href="../img/sprite.svg#icon-close"></use>
        </svg>
      </div>
        <h2 class="modal-title">${e.data.title}</h2>
        <p class="modal-text">${e.data.message}</p>
      </div>
    `);t.show(),i.formElement.reset(),t.element().querySelector(".modal-close-icon").addEventListener("click",()=>t.close());const a=l=>{l.key==="Escape"&&(t.close(),i.formElement.reset(),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a)}catch{f.show({message:"An error occurred while posting request. Please, try again later.",position:"bottomCenter",backgroundColor:"#ed3b44",messageColor:"#fafafa",theme:"dark",maxWidth:"250px"})}}i.formElement.addEventListener("submit",v);function v(o){o.preventDefault();const r=o.target,n=r.elements.email.value.trim(),s=r.elements.comment.value.trim();g(n,s)}
//# sourceMappingURL=commonHelpers.js.map