const svgIcons={close:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'};let lightboxContainer,mklbItems=document.getElementsByClassName("mklbItem");for(let e=0;e<mklbItems.length;e++){let t=mklbItems[e];t.addEventListener("click",(()=>_mklbOpen(t)))}function _mklbOpen(e){lightboxContainer=document.createElement("div"),lightboxContainer.id="mkLightboxContainer";let t=document.createElement("div");t.id="overlay",lightboxContainer.appendChild(t),"gallery"in e.dataset?_mklbAddGallery(e):"videoSrc"in e.dataset?lightboxContainer.appendChild(_mklbAddVideo(e)):"youtubeId"in e.dataset?lightboxContainer.appendChild(_mklbAddYoutubeVideo(e)):lightboxContainer.appendChild(_mklbAddImage(e));let n=document.createElement("div");n.id="closeIconContainer",n.innerHTML=svgIcons.close,lightboxContainer.appendChild(n),n.addEventListener("click",_closeLightbox),document.body.appendChild(lightboxContainer),t.addEventListener("click",_closeLightbox)}function _mklbAddImage(e){let t=document.createElement("img");return t.id="mklbImage",t.src="src"in e.dataset?e.dataset.src:e.src,t}function _mklbAddVideo(e){let t=document.createElement("video");t.setAttribute("autoplay",!0),t.setAttribute("controls",!0);let n=document.createElement("source");return n.src=e.dataset.videoSrc,n.type="video/mp4",t.appendChild(n),t}function _mklbAddYoutubeVideo(e){let t=document.createElement("iframe");return t.id="yt-video",t.setAttribute("frameborder","0"),t.setAttribute("allow","autoplay; encrypted-media"),t.setAttribute("allowfullscreen",""),t.src="https://www.youtube-nocookie.com/embed/"+e.dataset.youtubeId,t}function _mklbAddGallery(e){let t=[],n=0,l=document.createElement("div");l.id="mklbInner";for(let i=0;i<mklbItems.length;i++)if("gallery"in mklbItems[i].dataset){t.push(mklbItems[i]),mklbItems[i]===e&&(n=i);let d=document.createElement("section");d.className="imageContainer",d.appendChild(_mklbAddImage(mklbItems[i])),l.appendChild(d)}l.style.marginLeft=-100*(n-1)+"vw",lightboxContainer.appendChild(l);let i=document.createElement("div");i.id="prev",i.innerHTML=svgIcons.prev;let d=document.createElement("div");d.id="prevContainer",d.appendChild(i),lightboxContainer.appendChild(d),d.addEventListener("click",(()=>_mklbSlide(!0)));let o=document.createElement("div");o.id="next",o.setAttribute("data-next",n<=t.length?n+1:1),o.innerHTML=svgIcons.next;let a=document.createElement("div");a.id="nextContainer",a.appendChild(o),lightboxContainer.appendChild(a),a.addEventListener("click",(()=>_mklbSlide(!1)))}function _closeLightbox(){document.getElementById("mkLightboxContainer").remove()}function _mklbSlide(e){let t=document.getElementById("mklbInner"),n=document.getElementsByClassName("imageContainer").length,l=t.style.marginLeft;l=parseInt(l.slice(0,l.length-2)),t.style.marginLeft=e&&0===l?-100*(n-1)+"vw":e?l+100+"vw":l===-100*(n-1)?"0vw":l-100+"vw"}