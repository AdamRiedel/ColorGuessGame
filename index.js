import {
  generateRandomColor,
  fillRoundColors,
  shuffle,
} from "./src/libs/tools.js";

generateRandomColor;

let searchedColor = null;
searchedColor = generateRandomColor();

const fillColors = fillRoundColors(11);
fillColors.push(searchedColor);

const mixedArray = shuffle(fillColors);

console.log(mixedArray);