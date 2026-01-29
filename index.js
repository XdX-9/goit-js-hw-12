import{a as w,S as x,i as l}from"./assets/vendor-6XDwGOUg.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const M="54028889-2cc77c36b1263169d392db777",m=async(r,s)=>(await w({method:"get",baseURL:"https://pixabay.com/",url:"api/",params:{image_type:"photo",orientation:"horizontal",safesearch:!0,key:M,q:r,per_page:15,page:s}})).data,y=new x(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionDelay:250}),f=document.querySelector(".gallery"),g=r=>{const s=r.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:q,downloads:S})=>`<li class="gallery-item">
        <a class="gallery-link" href="${a}">
            <img
            src="${o}" 
            alt="${e}"
            title="${e}"
            class="gallery-img">
        </a>
            <div class="stats">
            <div class="stats-item">
              <span class="top-txt">Likes</span>
              <p class="bottom-txt">${t}</p>
            </div>
            <div class="stats-item">
              <span class="top-txt">Views</span>
              <p class="bottom-txt">${i}</p>
            </div>
            <div class="stats-item">
              <span class="top-txt">Comments</span>
              <p class="bottom-txt">${q}</p>
            </div>
            <div class="stats-item">
              <span class="top-txt">Downloads</span>
              <p class="bottom-txt">${S}</p>
            </div>
          </div>
        </li>`).join("");f.insertAdjacentHTML("beforeend",s),y.refresh()},$=()=>{f.innerHTML="",y.refresh()},h=document.querySelector(".loader"),b=()=>{h.style.display="inline-block"},p=()=>{h.style.display="none"},v=document.querySelector(".js-more-btn"),L=()=>{v.style.display="inline-block"},c=()=>{v.style.display="none"},d=document.querySelector(".form");p();let n=1,u=null;const P=document.querySelector(".js-more-btn"),R=async r=>{n+=1,b(),c();try{const s=await m(u,n);g(s.hits);const o=document.querySelector(".gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}n*15>=s.totalHits?(l.info({title:"Error",position:"topRight",message:"We're sorry, but you've reached the end of search results."}),c()):L()}catch{l.error({message:"Server error or connection lost"})}finally{p()}},B=async r=>{r.preventDefault();let s=document.querySelector(".js-search-field").value.trim();if(s===""){d.reset();return}u=s,$(),c(),n=1,b();try{const o=await m(u,n);if(o.hits.length===0){l.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(o.hits),o.totalHits>15&&L()}catch{l.error({message:"Server error or connection lost"})}finally{p(),d.reset()}};d.addEventListener("submit",B);P.addEventListener("click",R);
//# sourceMappingURL=index.js.map
