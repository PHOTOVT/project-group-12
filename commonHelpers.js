import{f as m,a as u,i as d}from"./assets/vendor-2df86744.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();new m(".accordion-container-faq",{duration:400,showMultiple:!0});const f=document.querySelectorAll(".faq-show-hidden-text-button");f.forEach(t=>{t.addEventListener("click",()=>{t.querySelector(".faq-button-icon").classList.toggle("arrow-up")})});const s={inputElements:document.querySelectorAll("input"),inputEmail:document.querySelector(".form-email"),inputComment:document.querySelector(".form-comment"),buttonElement:document.querySelector(".form-button")},p=30;s.inputEmail.value.trim();s.inputComment.value.trim();const h=(t,r)=>{t.value.length>r&&(t.value=t.value.slice(0,r-3)+"...")};s.inputElements.forEach(t=>{t.addEventListener("input",()=>h(t,p))});const c=(t,r)=>{const n=JSON.stringify(r);localStorage.setItem(t,n)},l=t=>{const r=localStorage.getItem(t);try{return JSON.parse(r)}catch{return r}};async function v(t,r){const n="https://portfolio-js.b.goit.study/api",i={email:t.value,comment:r.value,headers:{"Content-Type":"application/json"}};try{const e=await u.post(n,i);if(e.ok)return basicLightbox.create(`
    <div class="modal">
    <h2 class="modal-title">Thank you for your interest in cooperation!</h2>
        <p class="modal-text">
        The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.
        </p>
    </div>
`).show(),form.reset(),e}catch{d.show({message:"An error occurred while posting your data. Please, try again later.",position:"bottomCenter",backgroundColor:"#ED3B44",messageColor:"#ffffff",theme:"dark",maxWidth:"350px"}),formElement.addEventListener("input",o=>{const a={email:s.inputEmail.value.trim(),comment:s.inputComment.value.trim()};c("email",a.email.value),c("comment",a.comment.value)}),form.addEventListener("submit",o=>{o.preventDefault(),post.email=form.elements.email.value,post.comment=form.elements.message.value,console.log(post),form.reset(),localStorage.removeItem("email"),localStorage.removeItem("comment")}),document.addEventListener("DOMContentLoaded",()=>{l("email"),l("comment"),form.elements.email.value=post.email,form.elements.comment.value=post.comment})}}s.buttonElement.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
