!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i"),i={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),submitBtn:document.querySelector("button"),input:document.querySelectorAll("input")};function u(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)})).then((function(e){var t=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}i.form.addEventListener("submit",(function(e){e.preventDefault();for(var t=parseInt(i.delay.value),n=1,o=0;o<i.amount.value;o+=1)o>0&&(t+=parseInt(i.step.value),n+=1),u(n,t);e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.864a25a0.js.map
