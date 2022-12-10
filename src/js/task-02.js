const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

let markup ='';
for(let ingredient of ingredients ) {
  markup += `<li class="item">${ingredient}</li>`;
};

list.insertAdjacentHTML("beforeend", markup);