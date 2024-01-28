window.onload = function(){

const MIN_EMAIL_LENGTH = 5;
const MIN_PASSWORD_LENGTH = 8;

let form = document.getElementById('form');
let emailInput = document.ElementById('email-input');
let passwordInput = document.ElementById('password-input');

form.addEventListener('submit', function(e){
e.preventDefault();

if(validateForm()){
window.alert('poprawnie wysłany formularz.')
}
});

function validateForm(){
let validEmail = true;
let validPassword = true;

    if(emailInput.value.length < MIN_EMAIL_LENGTH){
    validEmail = false;
    }
    if(passwordInput.value.length < MIN_PASSWORD_LENGTH){
    validPassword =false
    }


    return validEmail && validPassword;
}
};