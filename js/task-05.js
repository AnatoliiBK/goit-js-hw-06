const inputRef = document.querySelector("#name-input");
let outputRef = document.querySelector("#name-output");



inputRef.addEventListener("input", onInputChange);

function onInputChange (event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value.trim() === "") {
        outputRef.textContent = "Anonimous";
    } else {
        outputRef.textContent = event.currentTarget.value;
    }
    
}

// console.log(outputRef);
