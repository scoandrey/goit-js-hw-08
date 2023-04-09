import throttle from 'lodash.throttle';
const formData = {};
const STORAGE_KEY = "feedback-form-state";
const refs = {
form: document.querySelector('.feedback-form'),
// textarea: document.querySelector('.textarea'),
// emailInput: document.querySelector('.emailInput'),
};
populateTextarea();
refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// refs.emailInput.addEventListener('input', throttle(onEmailInput, 500));
// refs.textarea.addEventListener('input', onTextareaInput);
refs.form.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
formData[e.target.name] = e.target.value;
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// JSON.parse(localStorage.getItem(STORAGE_KEY))
}

function onFormSubmit(e) {
e.preventDefault();
e.target.reset();
localStorage.removeItem(STORAGE_KEY);
console.log(formData);
};

function populateTextarea() {
    const savedText = localStorage.getItem(STORAGE_KEY);
    if (savedText){
    refs.form.value = savedText;   
    // console.log(savedText);
    }
}
// populateTextarea()
// function onTextareaInput(e) {   
// const message = e.target.value;
// localStorage.setItem(STORAGE_KEY, message);
// };

// function outputText() {
// const savedText = localStorage.getItem("feedback-form-state");
// if(savedText) {
// refs.textarea.value = savedText;
// }};

// function onEmailInput(e) {
// const email = e.target.value;
// localStorage.setItem("feedback-form", email)
// };

// function outputEmail() {
// const savedText = localStorage.getItem("feedback-form");
// if(savedText) {
// refs.emailInput.value = savedText;
// }};

// outputText();
// outputEmail();

