const buttonCC = document.querySelector(".change-color");
const spanCC = document.querySelector(".color");
console.log(buttonCC);
console.log(spanCC);

buttonCC.addEventListener("clck", getRandomHexColor);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

function backgrColor() {
  
  console.log(getRandomHexColor.value)
  
} 

backgrColor()