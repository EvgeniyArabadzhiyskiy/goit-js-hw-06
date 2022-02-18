
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  btnChangeColor: document.querySelector('.change-color'),
  labelColorName: document.querySelector('.color'),
};

refs.btnChangeColor.addEventListener('click', onChengeBodyColor);

function onChengeBodyColor(event) {
  refs.labelColorName.textContent = getRandomHexColor();
  document.body.style.backgroundColor = refs.labelColorName.textContent;

};