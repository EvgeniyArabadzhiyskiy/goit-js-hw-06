
const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    
    if (event.currentTarget.value.length === Number(input.dataset.length))  {
        input.classList.add('valid');
        input.classList.remove('invalid');

    };

    if (event.currentTarget.value.length !== Number(input.dataset.length)) {
        input.classList.add('invalid');
        input.classList.remove('valid'); 
    };

    if (event.currentTarget.value.length === 0)  {
        input.classList.remove('invalid');

    };

};