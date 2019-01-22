"use strict";
const modal = document.querySelector(".experiment-js");
const btn = document.querySelectorAll("btn-fix");

btn.forEach(el => {
  el.addEventListener("click", () => modal.classList.toggle(".slaider-ctrl-next"));
});