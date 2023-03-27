let counterValue = document.querySelector("#value");

counterValue = 0;

const decrementBtn = document.querySelector("[data-action = decrement]");
const incrementBtn = document.querySelector("[data-action = increment]");

decrementBtn.addEventListener("click", () => {
    const counterDec = counterValue -= 1; 
    
    return value.textContent = counterDec;
     
});
incrementBtn.addEventListener("click", () => {
     const counterInc = counterValue += 1;
     
     return value.textContent = counterInc;
});



