const myform = document.getElementById('myform');
const name = document.getElementById('name');
const subject = document.getElementById('subject');
const email = document.getElementById('email');
const msg = document.getElementById('msg');

myform.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    // get the values from the inputs
    const nameValue = name.value.trim();
    const subjectValue = subject.value.trim();
    const emailValue = email.value.trim();
    const msgValue = msg.value.trim();
    
    if(nameValue === ''){
        //show error
        //add error class
        setErrorFor(name, 'Name can not be blank');
    } else {
        //add success class
        setSuccessFor(name);
    } 

    if(subjectValue === ''){
        setErrorFor(subject, 'Subject can not be blank');
    } else {
        setSuccessFor(subject);
    } 

    if(emailValue === ''){
        setErrorFor(email, 'Email can not be blank');
    } else if(!isEmail(emailValue) === ''){
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    } 

    if(msgValue === ''){
        setErrorFor(msg, 'Message section can not be blank');
    } else {
        setSuccessFor(msg);
    }

}

/* start for input */
function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

     // add success class
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
/* end for input */

/* start for textarea */
function setErrorFor(textarea, message) {
    const formControl = textarea.parentElement; // .form-control
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(textarea) {
    const formControl = textarea.parentElement;
    formControl.className = 'form-control success';
}
/* end for textarea */