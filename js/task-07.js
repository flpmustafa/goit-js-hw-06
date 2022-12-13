const changeRng = document.querySelector('#font-size-control');
const changeTxt = document.querySelector('#text');

changeRng.addEventListener('input', (event) => {
    changeTxt.style.fontSize = changeRng.value + 'px'; 
});

