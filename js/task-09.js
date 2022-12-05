const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const res = document.querySelector('.color');

btn.addEventListener('click', () => {
  let color = getRandomHexColor();

  body.style.backgroundColor = color;
  res.innerText = color;

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
  .toString(16)
      .padStart(6, 0)}`;
};
})
