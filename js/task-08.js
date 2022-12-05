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

  const formData = new FormData(event.currentTarget);
  
  console.log(formData); 

  formData.forEach((value, key) => {
    console.log(`${key}:`, value);
  });
  
  event.currentTarget.reset();
}