console.log('DOM');

const navElement = document.querySelector('nav');

const ulElement = document.createElement('ul');
const liElement = document.createElement('li');
const aElement = document.createElement('a');

navElement.appendChild(ulElement);
ulElement.appendChild(liElement);
liElement.appendChild(aElement);

aElement.innerText = 'start';
aElement.setAttribute('href', '/');

const liElement1 = liElement.cloneNode(true);
const liElementA = liElement1.querySelector('a');
liElementA.setAttribute('href', '/gallery');
liElementA.innerText = 'galeria';

ulElement.appendChild(liElement1);

const liElement2 = liElement.cloneNode(true);
const liElementA1 = liElement2.querySelector('a');
liElementA1.setAttribute('href', '/contact');
liElementA1.innerText = 'kontakt';

ulElement.appendChild(liElement2);



// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];