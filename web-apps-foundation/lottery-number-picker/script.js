"use strict";

const btnReset = document.querySelector(".reset-btn");
const btnPick = document.querySelector(".pick-btn");
const numberEl = document.querySelector(".number");
const numberContainer = document.querySelector(".number-container");

btnPick.addEventListener("click", () => {
  if (numberContainer.childNodes.length < 6) {
    const number = document.createElement("div");
    numberContainer.appendChild(number);
    number.classList.add("number");
    number.appendChild(
      document.createTextNode(Math.floor(Math.random() * 50 + 1))
    );
  }
});

btnReset.addEventListener("click", () => {
  if (numberContainer.childNodes.length > 0) {
    numberContainer.replaceChildren();
  }
});
