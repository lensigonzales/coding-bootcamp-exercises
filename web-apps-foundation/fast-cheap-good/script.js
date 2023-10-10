"use strict";

const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");
const checkboxes = Array.from(document.querySelectorAll(".checkbox"));

let lastCheckbox;

document.addEventListener("change", (event) => {
  const checkedInputs = checkboxes.filter((input) => input.checked === true);

  if (checkedInputs.length === 2) {
    lastCheckbox = event.target;
  } else if (checkedInputs.length >= 3) {
    lastCheckbox.checked = false;
  }
});
