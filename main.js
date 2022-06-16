const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm-pass');
const error = document.getElementById('error-pass');

password.addEventListener('change', passvalid);
confirmPass.addEventListener('change', passvalid);


function passvalid() {
    if(password.value === confirmPass.value) {
        error.textContent = ''
        password.classList.remove('error-pass');
        confirmPass.classList.remove('error-pass');
    } else if (password.value !== confirmPass.value) {
        error.textContent = '*Passwords do not match';
        password.classList.add('error-pass');
        confirmPass.classList.add('error-pass');
    }
}
