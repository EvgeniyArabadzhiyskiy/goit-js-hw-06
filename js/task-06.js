
const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    
    if (event.currentTarget.value.length === 6)  {
        input.classList.add('valid');
        input.classList.remove('invalid');

    };

    if (event.currentTarget.value.length !== 6) {
        input.classList.add('invalid');
        input.classList.remove('valid'); 
    };

    if (event.currentTarget.value.length === 0)  {
        input.classList.remove('invalid');

    };

};