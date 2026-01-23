import{a as f,S as g,i as l}from"./assets/vendor-DH1mbVV4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="54028889-2cc77c36b1263169d392db777",b=o=>f({method:"get",baseURL:"https://pixabay.com/",url:"api/",params:{image_type:"photo",orientation:"horizontal",safesearch:!0,key:h,q:o}}).then(r=>r.data),c=new g(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionDelay:250}),p=document.querySelector(".gallery"),v=o=>{const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:m,downloads:y})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
            <img
            src="${s}" 
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
              <p class="bottom-txt">${a}</p>
            </div>
            <div class="stats-item">
              <span class="top-txt">Comments</span>
              <p class="bottom-txt">${m}</p>
            </div>
            <div class="stats-item">
              <span class="top-txt">Downloads</span>
              <p class="bottom-txt">${y}</p>
            </div>
          </div>
        </li>`).join("");p.innerHTML=r,c.refresh()},L=()=>{p.innerHTML="",c.refresh()},d=document.querySelector(".loader"),x=()=>{d.style.display="inline-block"},u=()=>{d.style.display="none"},n=document.querySelector(".form");u();const S=o=>{o.preventDefault();let r=document.querySelector(".js-search-field").value.trim();if(r===""){n.reset();return}L(),x(),b(r).then(s=>{if(s.hits.length===0){l.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}v(s.hits)}).catch(s=>{l.error({message:"Server error or connection lost"})}).finally(()=>{u(),n.reset()})};n.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
