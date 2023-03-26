const buttonChangeColor = document.querySelector(".change-color");
const spanGetColor = document.querySelector(".color");

console.log(buttonChangeColor);
console.dir(buttonChangeColor)
console.log(spanGetColor);
console.dir(spanGetColor)

buttonChangeColor.addEventListener("clck", onButtonChangeColor);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
function onButtonChangeColor() {
  
  getRandomHexColor();  
  spanGetColor.textContent = "getRandomHexColor";
} 

