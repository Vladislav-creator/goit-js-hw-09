const t=document.body,e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let r=null;onBodyColorChange=()=>{e.disabled="true",o.removeAttribute("disabled"),r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)},e.addEventListener("click",onBodyColorChange),o.addEventListener("click",(()=>{e.removeAttribute("disabled"),o.disabled="true",clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.3b5e868d.js.map