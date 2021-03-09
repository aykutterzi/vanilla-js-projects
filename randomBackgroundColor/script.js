const bodyElement = document.querySelector("body");

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1));

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".colorChanger").addEventListener("click", function (e) {
  bodyElement.style.backgroundColor = randomColor();
});
