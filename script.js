const pwd = document.querySelector('#pwd');
const pwdc = document.querySelector('#pwdc');
const errorMessage = document.querySelector('#error-message');

function checkPasswords() {
    if (pwd.value !== pwdc.value) {
        errorMessage.textContent = "*Passwords do not match.";
        pwd.classList.add('error'); 
        pwdc.classList.add('error'); 
    } else {
        errorMessage.textContent = "";
        pwd.classList.remove('error'); 
        pwdc.classList.remove('error'); 
    }
}

const createAccountButton = document.querySelector('.btn');
createAccountButton.addEventListener('click', checkPasswords);
