const registerform = document.querySelector('.login-form');
registerform.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
   alert("You have not entered all the data, fill in all the fields!");
  };

  console.log(`Email: ${email.value}, Password: ${email.value}`);
  event.currentTarget.reset(); };