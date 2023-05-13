// Calling;
var form = document.querySelector('#form');
var uname = document.querySelector('#uname');
var email = document.querySelector('#email');
var pwd = document.querySelector('#pwd');
var pwdIcon = document.querySelector('#pwd-i');
var cPwdIcon = document.querySelector('#c-pwd-i');
var cPwd = document.querySelector('#c-pwd');
// Error Function;
function errorFunc(input, msg) {
    let formControl = input.parentElement;
    formControl.className = 'form-control error';
    let small = formControl.querySelector('small');
    small.innerText = msg;
};
// Success Function;
function successFunc(input) {
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
};
// Length Check Function;
function lengthCheckFunc(input, min, max) {
    let formControl = input.parentElement;
    let label = formControl.querySelector('label').innerText;
    if (input.value.length < min) {
        errorFunc(input, `${label} must be at least ${min} characters.`);
    } else if (input.value.length > max) {
        errorFunc(input, `${label} must be less than ${max} characters.`);
    } else {
        successFunc(input);
    };
};
// Email Check Function;
function emailCheckFunc(input) {
    let regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regularExpression.test(input.value.trim())) {
        successFunc(input);
    } else {
        errorFunc(input, `Email is not valid.`);
    }
};
// Password Match Function;
function pwdMatch(input, input2) {
    if (input.value !== input2.value) {
        errorFunc(input2, `Passwords do not match`);
    }
};
// Input Required Function;
function requiredFunc(inputArr) {
    inputArr.forEach(input => {
        let formControl = input.parentElement;
        let label = formControl.querySelector('label').innerText;
        if (input.value.trim() === '') {
            errorFunc(input, `${label} is required.`);
        } else {
            successFunc(input);
        }
    });
};
// Event Listener;
form.addEventListener('submit', e => {
    e.preventDefault();
    requiredFunc([uname, email, pwd, cPwd]);
    lengthCheckFunc(uname, 3, 20);
    lengthCheckFunc(pwd, 6, 30);
    emailCheckFunc(email);
    pwdMatch(pwd, cPwd);
});
// Toggle Password;
pwdIcon.addEventListener('click', function () {
    let type = pwd.getAttribute('type') === 'password' ? 'text' : 'password';
    pwd.setAttribute('type', type);
    // Changing Icon;
    pwdIcon.classList.toggle("fa-eye");
});
cPwdIcon.addEventListener('click', function () {
    let type2 = cPwd.getAttribute('type') === 'password' ? 'text' : 'password';
    cPwd.setAttribute('type', type2);
    // Changing Icon;
    cPwdIcon.classList.toggle("fa-eye");
});