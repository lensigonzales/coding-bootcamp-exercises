const sliderRed = document.querySelector(".red");
const sliderGreen = document.querySelector(".green");
const sliderBlue = document.querySelector(".blue");
const colorCode = document.querySelector(".color-code");

document.addEventListener("input", (event) => {
  document.body.style.backgroundColor = `rgb(${sliderRed.value}, ${sliderGreen.value}, ${sliderBlue.value}`;
  colorCode.innerText = document.body.style.backgroundColor;
});
