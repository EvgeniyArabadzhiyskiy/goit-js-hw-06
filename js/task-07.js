
const inputFontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputFontSizeEl.addEventListener('input' , onInputChange)

function onInputChange(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
    console.log(textEl.style.fontSize);
    
}
