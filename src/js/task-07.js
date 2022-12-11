const changeRng = document.querySelector('#font-size-control');
const changeTxt = document.querySelector('#text');

changeRng.addEventListener('change', (event) => {
    changeTxt.style.fontSize = changeRng.value + 'px'; 
});

