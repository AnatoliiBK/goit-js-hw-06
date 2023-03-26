let counterValue = document.querySelector("#value");

counterValue = 0;

const decrementBtn = document.querySelector("[data-action = decrement]");
const incrementBtn = document.querySelector("[data-action = increment]");

decrementBtn.addEventListener("click", () => {
    const counterDec = counterValue -= 1; 
    console.log(value);
    return value.textContent = counterDec;
     
});
incrementBtn.addEventListener("click", () => {
     const counterInc = counterValue += 1;
     console.log(value);
     return value.textContent = counterInc;
});



console.log(value)
// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(counterValue)
// console.log(decrementBtn.dataset.action)
// console.log(incrementBtn.dataset.action)
// console.log(counterValue)