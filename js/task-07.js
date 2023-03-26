const fontRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
console.log(fontRef);
console.dir(fontRef);
console.log(textRef)
console.dir(textRef);

// textRef.style.fontSize = "16px"
// console.log(textRef.style.fontSize)

fontRef.addEventListener("input", textSize);

function textSize(event) {
    // textRef.textContent = event.currentTarget.value;
    textRef.style.fontSize = event.currentTarget.valuue;
    console.dir(event.currentTarget.valuue);
    
}