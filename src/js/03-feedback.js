// import throttle from 'lodash.throttle';

const refs = {
form: document.querySelector('.feedback-form'),
textarea: document.querySelector('.textarea'),
emailInput: document.querySelector('.emailInput'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);
refs.emailInput.addEventListener('input', onEmailInput);

function onFormSubmit(e) {
e.preventDefault();
e.target.reset();
localStorage.removeItem("feedback-form-state");
localStorage.removeItem("feedback-form");
};

function onTextareaInput(e) {   
const message = e.target.value;
localStorage.setItem("feedback-form-state", message);
};

function outputText() {
const savedText = localStorage.getItem("feedback-form-state");
if(savedText) {
refs.textarea.value = savedText;
}};

function onEmailInput(e) {
const email = e.target.value;
localStorage.setItem("feedback-form", email)
};

function outputEmail() {
const savedText = localStorage.getItem("feedback-form");
if(savedText) {
refs.emailInput.value = savedText;
}};

outputText();
outputEmail();