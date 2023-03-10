const emailInput = document.getElementById('email');

emailInput.addEventListener('input', function() {
  if (emailInput.validity.valid) {
    // reset the input state if the email is valid
    emailInput.setCustomValidity('');
    emailInput.style.borderBottomColor = '';
    emailInput.placeholder = 'Email';
  } else {
    // display an error message if the email is invalid
    emailInput.setCustomValidity('Please use the correct email format');
    emailInput.style.borderBottomColor = 'red';
    emailInput.placeholder = 'Invalid email format';
  }
});
