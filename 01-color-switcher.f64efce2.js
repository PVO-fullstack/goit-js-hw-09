!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,a=setInterval((function(){return t="#".concat(Math.floor(16777215*Math.random()).toString(16)),void(n.style.backgroundColor=t);var t}),1e3)})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(a)}));var a=null}();
//# sourceMappingURL=01-color-switcher.f64efce2.js.map