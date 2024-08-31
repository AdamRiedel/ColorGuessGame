export function generateRandomColor() {
  let hexCode = "#";
  const chars = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    let randIndex = Math.floor(Math.random() * 16);
    hexCode += chars[randIndex];
  }
  return hexCode;
}

export function fillRoundColors(amount) {
  const array = [];
  for (let i = 0; i < amount; i++) {
    let hexcode = generateRandomColor();
    array.push(hexcode);
  }
  return array;
}

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const rndIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[rndIndex]] = [array[rndIndex], array[i]];
  }
  return array;
}