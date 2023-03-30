const buttonChangeColor = document.querySelector(".change-color");
const spanGetColor = document.querySelector(".color");
const bodyRef = document.querySelector("body");

buttonChangeColor.addEventListener("click", onButtonChangeColor);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
function onButtonChangeColor() {
  const funcColor = getRandomHexColor(); 
  spanGetColor.textContent = funcColor;
  bodyRef.style.backgroundColor = funcColor;
} 

