const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }

  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  };  

  const formEl = event.currentTarget.elements;

  const emailUser = formEl.email.value;
  const passwordUser = formEl.password.value;

  const formData = {
    emailUser,
    passwordUser
  }
  console.log(formData);
  
  event.currentTarget.reset();
  
}