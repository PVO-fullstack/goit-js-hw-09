var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const i=document.querySelector(".form"),u=document.querySelector(".form > button"),l=i.querySelector('[name="delay"]'),a=i.querySelector('[name = "step"]'),d=i.querySelector('[name = "amount"]');let c,s,f;function p(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}u.addEventListener("click",(function(e){e.preventDefault(),function(){for(let e=1;e<=s;e+=1){p(e,Number(c)+(e-1)*Number(f)).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}}()})),d.addEventListener("input",(function(e){s=e.target.value})),l.addEventListener("input",(function(e){c=e.target.value})),a.addEventListener("input",(function(e){f=e.target.value}));
//# sourceMappingURL=03-promises.b28ae107.js.map
