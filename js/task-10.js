function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  divBoxEl: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  btnCreateBox: document.querySelector('[data-create]'),
  btnDestroyBox: document.querySelector('[data-destroy]'),
};


refs.input.addEventListener('blur', (event) => {
  const { value } = event.target;
  console.log(value);

  refs.btnCreateBox.addEventListener('click', () => {
    createBoxes(value);
      
  });

  refs.btnDestroyBox.addEventListener('click', (event) => {
    refs.divBoxEl.textContent = '';
    
  });
  
 
});




function createBoxes(amount) {
  let element = [];
  let widthBoxEl = 30;
  let heightBoxEl = 30;

  for (let i = 0; i < amount; i += 1) {
    
    const boxEl = document.createElement('div');
    boxEl.style.width += `${widthBoxEl}px`;
    boxEl.style.height += `${heightBoxEl}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.marginBottom = '10px';

    widthBoxEl += 10;
    heightBoxEl += 10;
    
    element.push(boxEl);
    
  };

  refs.divBoxEl.append(...element);

};


// refs.input.addEventListener('change', onChangeInput);
// refs.btnCreateBox.addEventListener('click', onCreateBox);
// refs.btnDestroyBox.addEventListener('click', onDestroyBox);
