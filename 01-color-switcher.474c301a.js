const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let n=null;function o(){return t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",(function(t){n=setInterval(o,1e3),e.setAttribute("disabled",""),r.removeAttribute("disabled")})),r.addEventListener("click",(function(t){clearInterval(n),e.removeAttribute("disabled"),r.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.474c301a.js.map
