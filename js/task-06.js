const inputValid = document.querySelector("#validation-input");
const styleRef = document.querySelector("style");

console.log(inputValid);
console.log(styleRef);


// console.log(inputValid.getAttribute("id"))

function blurFunc (event) {
    

    if (event.currentTarget.value.trim().length === Number(inputValid.dataset.length)) {

        inputValid.classList.add("valid");
        inputValid.classList.remove("invalid");

    } else {
            
        inputValid.classList.add("invalid");
        inputValid.classList.remove("valid");
        
    }  
    
}

inputValid.addEventListener("blur", blurFunc);