const sliderRed = document.querySelector(".red");
const sliderGreen = document.querySelector(".green");
const sliderBlue = document.querySelector(".blue");
const colorCode = document.querySelector(".color-code");
const randomBtn = document.querySelector(".random-btn");

document.addEventListener("input", (event) => {
  document.body.style.backgroundColor = `rgb(${sliderRed.value}, ${sliderGreen.value}, ${sliderBlue.value}`;
  colorCode.innerText = document.body.style.backgroundColor;
});

randomBtn.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const color = `rgb(${data.rgb.r}, ${data.rgb.b}, ${data.rgb.g})`;
      colorCode.innerText = color;
      document.body.style.backgroundColor = color;
    });
});
