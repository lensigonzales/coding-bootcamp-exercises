"use strict";
//change input type to text
//change button label to "Hide Password"

const inputField = document.querySelector(".input-pwd");
const btn = document.querySelector(".toggle-btn");

btn.addEventListener("click", (event) => {
  if (inputField.type === "password") {
    inputField.type = "text";
    btn.innerText = "Hide Password";
  } else {
    inputField.type = "password";
    btn.innerText = "Show Password";
  }
});
