import{f as a,S as u,a as m,b as p,i as f}from"./assets/vendor-61ffd3b9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const y=document.querySelector(".about-box"),E=document.querySelector("#swiper");new a(y,{openOnInit:[0],showMultiple:!0,collapse:!0});new u(E,{direction:"horizontal",loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},centeredSlides:!1,navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!1}});new a(".accordion-container-faq",{duration:400,showMultiple:!0});const v=document.querySelectorAll(".faq-show-hidden-text-button");v.forEach(o=>{o.addEventListener("click",()=>{o.querySelector(".faq-button-icon").classList.toggle("arrow-up")})});const r={inputElements:document.querySelectorAll("input"),inputEmail:document.querySelector(".form-email"),inputComment:document.querySelector(".form-comment"),buttonElement:document.querySelector(".form-button"),formElement:document.querySelector(".form-cooperation"),errorElement:document.querySelector(".email-error")},b=20,h=(o,t)=>{o.value.length>t&&(o.value=o.value.slice(0,t)+"...")};r.inputComment.addEventListener("input",()=>{h(r.inputComment,b)});r.inputEmail.addEventListener("input",()=>{r.inputEmail.value.trim().match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)?(r.inputEmail.style.borderBottomColor="#c6e327",r.errorElement.style.color="#c6e327",r.errorElement.innerHTML="Success!"):(r.errorElement.innerHTML="Invalid email, try again",r.inputEmail.style.borderBottomColor="#ed3b44",r.errorElement.style.color="#ed3b44")});r.inputEmail.addEventListener("blur",()=>{r.errorElement.innerHTML="",r.inputEmail.style.borderBottomColor=""});async function L(o,t){const s="https://portfolio-js.b.goit.study/api/requests",i={email:o,comment:t};try{const e=await m.post(s,i),n=p.create(`
      <div class="modal">
      <div class="modal-close-icon-container">
  <svg class="modal-close-icon" width="22" height="22">
    <use href="./img/sprite.svg#icon-close"></use>
        </svg>
      </div>
        <h2 class="modal-title">${e.data.title}</h2>
        <p class="modal-text">${e.data.message}</p>
      </div>
    `);n.show(),r.formElement.reset(),n.element().querySelector(".modal-close-icon").addEventListener("click",()=>n.close());const l=d=>{d.key==="Escape"&&(n.close(),r.formElement.reset(),document.removeEventListener("keydown",l))};document.addEventListener("keydown",l)}catch{f.show({message:"An error occurred while posting request. Please, try again later.",position:"bottomCenter",backgroundColor:"#ed3b44",messageColor:"#fafafa",theme:"dark",maxWidth:"250px"})}}r.formElement.addEventListener("submit",g);function g(o){o.preventDefault();const t=o.target,s=t.elements.email.value.trim(),i=t.elements.comment.value.trim();L(s,i)}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".open-menu-btn"),t=document.querySelector(".mob-menu-close-btn"),s=document.querySelector(".mob-menu"),i=document.querySelectorAll(".header-menu"),e=document.getElementById("order-project-btn"),n=document.getElementById("order-project-btn-main");o.addEventListener("click",()=>{s.classList.add("is-open")}),t.addEventListener("click",()=>{s.classList.remove("is-open")}),i.forEach(c=>{c.addEventListener("click",()=>{s.classList.remove("is-open")})}),e.addEventListener("click",()=>{document.getElementById("work-together").scrollIntoView({behavior:"smooth"}),s.classList.remove("is-open")}),n.addEventListener("click",()=>{document.getElementById("work-together").scrollIntoView({behavior:"smooth"}),s.classList.remove("is-open")})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".menu-button"),t=document.getElementById("menuList");o.addEventListener("click",function(){t.style.display==="block"?t.style.display="none":t.style.display="block"}),window.addEventListener("click",function(s){!o.contains(s.target)&&!t.contains(s.target)&&(t.style.display="none")})});
//# sourceMappingURL=commonHelpers.js.map
