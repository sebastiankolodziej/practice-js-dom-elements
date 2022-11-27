console.log('DOM');

const curr = document.querySelector('.js-curr');

const button = document.createElement('button');
const newParentElement = curr.parentElement;
const newAttr = curr.parentElement.nextElementSibling;
    
if(curr) {
    newParentElement.appendChild(button);
    button.innerText = 'usuń z koszyka';
}
    // end of part one

if(curr) {
    for(const child of newParentElement.children) {
        if(child !== curr){
            if(child.classList.add('siblings'));
    }};
}

    // end of part two

if(curr) {
    if(newAttr) {
        newAttr.setAttribute('title', 'nextElementSibling');
    };
}

    // end of part three

const pElement = document.createElement('p');
// pElement.innerText = 'tekst';

if(curr) {
    const pElement1 = newAttr.nextElementSibling;;
    const btn = pElement1.lastElementChild;
    if(pElement1) {
        pElement1.insertBefore(pElement, btn);
    };
}

    // end of part four

const cloneElement = curr.parentElement.parentElement;
if(curr) {
    const cloneParent1 = newParentElement.cloneNode(true);
    cloneElement.insertBefore(cloneParent1, newParentElement);
}
// end of part five