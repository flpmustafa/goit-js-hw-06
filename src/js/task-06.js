const textInput  = document.querySelector('#validation-input');
const checkLength = textInput.dataset.length;

textInput.addEventListener('blur', onBlur)

function onBlur(event) {
    if (event.currentTarget.value.length === Number(checkLength)) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    };
};
