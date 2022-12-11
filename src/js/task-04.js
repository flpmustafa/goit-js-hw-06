
const addButton = document.querySelector('[data-action="increment"]');
let counterValue = document.querySelector('#value');
counterValue.textContent = 0;
console.dir(counterValue);

addButton.addEventListener("click", addNum);

function addNum () {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}; 

const remButton = document.querySelector('[data-action="decrement"]');
console.dir(remButton);

remButton.addEventListener("click", remNum);

function remNum () {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}; 
