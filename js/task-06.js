const validationInput = document.querySelector('input');
validationInput.addEventListener('blur', checkUserName);
function checkUserName() {
    let userName = `${validationInput.value}`;
   if (userName.length > validationInput.dataset.length) {
    validationInput.classList.add(`invalid`);
  } else validationInput.classList.replace(`invalid`, `valid`);
};

