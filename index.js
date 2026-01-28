import{a as q,S,i as l}from"./assets/vendor-6XDwGOUg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const w="54028889-2cc77c36b1263169d392db777",p=async(s,r)=>(await q({method:"get",baseURL:"https://pixabay.com/",url:"api/",params:{image_type:"photo",orientation:"horizontal",safesearch:!0,key:w,q:s,per_page:15,page:r}})).data,m=new S(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionDelay:250}),y=document.querySelector(".gallery"),g=s=>{const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:v,downloads:L})=>`<li class="gallery-item">
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
              <p class="bottom-txt">${n}</p>
            </div>
            <div class="stats-item">
              <span class="top-txt">Comments</span>
              <p class="bottom-txt">${v}</p>
            </div>
            <div class="stats-item">
              <span class="top-txt">Downloads</span>
              <p class="bottom-txt">${L}</p>
            </div>
          </div>
        </li>`).join("");y.insertAdjacentHTML("beforeend",r),m.refresh()},x=()=>{y.innerHTML="",m.refresh()},h=document.querySelector(".loader"),f=()=>{h.style.display="inline-block"},u=()=>{h.style.display="none"},b=document.querySelector(".js-more-btn"),M=()=>{b.style.display="inline-block"},$=()=>{b.style.display="none"},c=document.querySelector(".form");u();let i=1,d=null;const P=document.querySelector(".js-more-btn"),B=async s=>{i+=1,f();try{const r=await p(d,i);g(r.hits);const e=document.querySelector(".gallery-item").getBoundingClientRect().height;if(window.scrollBy({top:e*2,behavior:"smooth"}),i*15>=r.totalHits)throw new Error("")}catch{l.error({title:"Error",position:"topRight",message:"We're sorry, but you've reached the end of search results."}),$()}finally{u()}},R=s=>{s.preventDefault();let r=document.querySelector(".js-search-field").value.trim();if(r===""){c.reset();return}d=r,x(),i=1,f(),p(d,i).then(o=>{if(o.hits.length===0){l.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(o.hits),M()}).catch(o=>{l.error({message:"Server error or connection lost"})}).finally(()=>{u(),c.reset()})};c.addEventListener("submit",R);P.addEventListener("click",B);
//# sourceMappingURL=index.js.map
