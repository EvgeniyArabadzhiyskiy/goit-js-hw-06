
const refs = {
    inputName: document.querySelector("#name-input"),
    nameLabel: document.querySelector("#name-output"),
};

refs.inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
        refs.nameLabel.textContent = 'Anonymous';
    };
};