const fontRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontRef.addEventListener("input", textSize);

function textSize(event) {
    
    textRef.style.fontSize = `${event.currentTarget.value}px`;
        
}