!function(){var t=document.body,e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),n=null;onBodyColorChange=function(){e.disabled="true",o.removeAttribute("disabled"),n=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)},e.addEventListener("click",onBodyColorChange),o.addEventListener("click",(function(){e.removeAttribute("disabled"),o.disabled="true",clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.079fcfec.js.map
