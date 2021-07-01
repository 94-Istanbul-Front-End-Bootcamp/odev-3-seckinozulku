let userName = document.getElementById("userName");
let userNameError = document.getElementById("userNameError");

let password = document.getElementById("password");
let passwordError = document.getElementById("passwordError");

let email = document.getElementById("email");
let emailError = document.getElementById("emailError");

let checkbox = document.getElementById("checkbox");
let checkboxError = document.getElementById("checkboxError");

userName.addEventListener('input', checkUserName);
password.addEventListener('input', checkPassword);
email.addEventListener('input', checkEmail);
checkbox.addEventListener('input', checkCheckBox);

function checkUserName() {
    if (!userName.value){
        userNameError.innerHTML = "Lütfen bu alanı doldurun."
    } else{
        userNameError.innerHTML = "";
    }
}

function checkPassword() {
    if (!password.value){
        passwordError.innerHTML = "Lütfen bu alanı doldurun."
    } else if (password.value.length < 8){
        passwordError.innerHTML = "Lütfen 8 karakter üzeri kullanın."
    } else{
        passwordError.innerHTML = "";
    }
}

function checkEmail() {
    if (!email.value){
        emailError.innerHTML = "Lütfen bu alanı doldurun."
    } else if (email.value.indexOf("@") <= 0) {
        emailError.innerHTML = "Lütfen @ kullanın"
    } else{
        emailError.innerHTML = "";
    }
}

function checkCheckBox() {
    if (!checkbox.checked){
        checkboxError.innerHTML = "Lütfen bu alanı işaretleyin."
    } else{
        checkboxError.innerHTML = "";
    }
}

function Submit() {
    checkUserName()
    checkPassword()
    checkEmail()
    checkCheckBox()
}