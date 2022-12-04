const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const res = document.querySelector('.color');

btn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();;
  res.innerText = getRandomHexColor();;

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
  .toString(16)
      .padStart(6, 0)}`;
};
})
