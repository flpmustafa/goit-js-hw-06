const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");
list.style.display = "flex";
list.style.gap ="20px";

let markup ='';
for(let img of images ) {
  markup += `<li class="item"><img class="img" src="${img.url}" alt="${img.alt}"></li>`;
};

list.insertAdjacentHTML("beforeend", markup);

const imgStyles = document.getElementsByTagName('img');
for (let i=0; i<imgStyles.length; i++) imgStyles[i].style.width = "400px";