import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';
const savedForm = localStorage.getItem(STORAGE_KEY);

form.addEventListener('input', throttle(function() {
  const formData = {
    email: form.email.value,
    message: form.message.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500));

if (savedForm) {
  const { email, message } = JSON.parse(savedForm);
  emailInput.value = email;
  messageInput.value = message;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const formState = { 
    email: emailInput.value, 
    message: messageInput.value };
  localStorage.removeItem(STORAGE_KEY);
  console.log(formState);
  e.target.reset();
});