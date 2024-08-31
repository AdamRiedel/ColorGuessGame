import {
  generateRandomColor,
  fillRoundColors,
  shuffle,
} from "./src/libs/tools.js";

const hexcode = document.querySelector("#hexcode");
const colorsContainer = document.querySelector(".colors-container");
const colorboxes = document.querySelectorAll(".colorbox");
let searchedColor = null;
let fillColors = [];
let mixedArray = [];
const startGameBtn = document.querySelector(".toggle-btn");

startGameBtn.addEventListener("click", () => {
  searchedColor = generateRandomColor();
  fillColors = fillRoundColors(11);
  fillColors.push(searchedColor);
  mixedArray = shuffle(fillColors);
  setGame(searchedColor, mixedArray, colorboxes, hexcode);

  colorsContainer.addEventListener("click", (event) => {
    if (event.target.className !== "colorbox") {
      return;
    }
    const { hex } = event.target.dataset;
    const result = checkColors(searchedColor, hex);

    if (!result) {
      console.log("Leider Falsch");
      return;
    }
    console.log(result);
  });
});