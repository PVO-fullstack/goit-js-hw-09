!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),d=document.querySelector("body");n.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,t=setInterval((function(){return t="#".concat(Math.floor(16777215*Math.random()).toString(16)),void(d.style.backgroundColor=t);var t}),1e3)})),n.addEventListener("click",(function(){n.disabled=!0,e.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.c0e6cf2c.js.map
