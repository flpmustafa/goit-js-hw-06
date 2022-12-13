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

let Email = `${email.value}`; 
let Password = `${email.value}`

let obj = {Email, Password};

console.dir(obj);

  //console.log(`Email: ${email.value}, Password: ${email.value}`);
  event.currentTarget.reset(); };