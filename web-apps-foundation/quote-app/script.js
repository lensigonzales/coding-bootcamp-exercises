"use strict";

const getBtn = document.querySelector(".getquote-btn");
const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");

getBtn.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      quoteEl.innerText = data.quote;
      authorEl.innerText = data.author;
    });
});
