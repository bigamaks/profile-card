const form = document.querySelector('#contact-form');
const fullName = document.querySelector('#contact-name')
const email = document.querySelector('#contact-email')
const subject = document.querySelector('#contact-subject')
const message = document.querySelector('#contact-message')

const fullNameError = document.querySelector('#test-contact-error-name')
const emailError = document.querySelector('#test-contact-error-email');
const subjectError = document.querySelector('#test-contact-error-subject');
const messageError = document.querySelector('#test-contact-error-message');


const successMessage = document.querySelector('#test-contact-success');

form.addEventListener('submit', function(e){
  e.preventDefault()

  fullNameError.textContent = '';
  emailError.textContent = '';
  subjectError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  let isValid = true;

   if(fullName.value.trim() === ''){
      fullNameError.textContent = 'Please Enter your name'
      fullNameError.style.display = 'block';
      isValid = false
    } 

    if(email.value.trim() === ''){
      emailError.textContent = 'Please Enter your email'
      emailError.style.display = 'block';
      isValid = false
    } else if(!/\S+@\S+\.\S+/.test(email.value.trim())){
      emailError.textContent = 'Please Enter a correct email'
      emailError.style.display = 'block';
      isValid = false
    }

    if(subject.value.trim().length < 10){
     subjectError.textContent = 'Message must be at least 10 characters long'
     subjectError.style.display = 'block'
     isValid = false
    }

    if(message.value.trim() === ''){
        messageError.textContent = 'Please write a message'
        messageError.style.display = 'block'
        isValid = false
    }

    if(isValid){
        successMessage.textContent = '✅ Your message has been sent successfully!'
        successMessage.style.color = 'green'
        successMessage.style.display = 'block'
        form.reset()
    }
})