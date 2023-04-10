import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.text');
const messageInput = document.querySelector('.email');
const STORAGE_KEY = "feedback-form-state";
const formData = {
  email: emailInput.value,
  message: messageInput.value,
};
const savedForm = throttle(localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)), 500);

emailInput.addEventListener('input', savedForm);
messageInput.addEventListener('input', savedForm);

const fillFormFromStorage = function () {
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  emailInput.value = formData.email;
  messageInput.value = formData.message;
};

fillFormFromStorage();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
});


