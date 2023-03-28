const button = document.querySelector('#btn');
const emailInput = document.querySelector('#email');
const errorMsg = document.querySelector('#error');
const form = document.querySelector('#form');

const hasBeenTypedIn = (e) => {
  emailInput.classList.add('text-black');
};

const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

const loseFocusHandler = (e) => {
  e.preventDefault();
  let inputText = emailInput.value;
  console.log(inputText);
  if (inputText.length === 0) {
    errorMsg.textContent = '"Whoops! It looks like you forgot to add your email"';
    emailInput.classList.add('error-border');
    return;
  }
  if (validateEmail(inputText) == false) {
    errorMsg.textContent = '"Please provide a valid email address"';
    emailInput.classList.add('error-border');
    return;
  }
  if (validateEmail(inputText) == true) {
    errorMsg.textContent = '';
    emailInput.value = '';
    emailInput.classList.remove('error-border');
  }
};

const submitHandler = (e) => {
  let email = emailInput;
  console.log(email);
  if (emailInput == '') {
  }
};

console.log(emailInput.value);

form.addEventListener('submit', loseFocusHandler);
emailInput.addEventListener('input', hasBeenTypedIn);
