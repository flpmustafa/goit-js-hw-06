const btn = document.querySelector('.change-color');

btn.addEventListener('click', () => {
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  document.querySelector('.color').textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
