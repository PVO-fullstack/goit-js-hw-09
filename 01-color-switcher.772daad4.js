const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,timerId=setInterval((()=>{return t=`#${Math.floor(16777215*Math.random()).toString(16)}`,void(d.style.backgroundColor=t);var t}),1e3)})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.772daad4.js.map
