const buttonChangeColor = document.querySelector(".change-color");
const spanGetColor = document.querySelector(".color");
const bodyRef = document.querySelector("body")

// console.log(buttonChangeColor);
// console.dir(buttonChangeColor);
// console.log(spanGetColor);
// console.dir(spanGetColor);

// console.log(bodyRef);
// console.dir(bodyRef)

buttonChangeColor.addEventListener("click", onButtonChangeColor);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
function onButtonChangeColor() {  
  spanGetColor.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = getRandomHexColor();
} 

