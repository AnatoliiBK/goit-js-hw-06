const formLog = document.querySelector(".login-form");

formLog.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;
    
    let formOK = {
    
    }
    if (email.value !== "" && password.value !== "") {
            formOK = {
            email: email.value,
            password: password.value
        }
        console.log(formOK);
        formLog.reset();
    } else {
        alert("Всі поля повинні бути заповнені.")
    }
    
}