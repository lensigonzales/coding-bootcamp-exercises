"use strict";

const body = document.querySelector("body");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  body.classList.toggle("bg-color-dark");
  btn.classList.toggle("btn-dark-style");
  document.title =
    document.title === "Good Morning" ? "Good Night" : "Good Morning";
});
/*  The color change of the background should be animated
 Change the site title to "Good Night" when the light is switched off
 Change the site title to "Good Morning" when the light is switched on */
