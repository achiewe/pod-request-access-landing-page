const inputEmail = document.getElementById('input-email');
const submitButton = document.getElementById('request-button');
const errorP = document.getElementById('error-p');
const successP = document.getElementById('success-p');

let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const controlMail = (input) => {
    if(mailRegex.test(input.value)){
        successP.style.display = "flex";
        errorP.style.display = "none";    
    } else {
        errorP.style.display = "flex";
        successP.style.display = "none";
    }
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    controlMail(inputEmail);
})