console.log('DOM');

const curr = document.querySelector('.js-curr');

const button = document.createElement('BUTTON');
if(curr) {
    const newButton = curr.parentElement;
    newButton.appendChild(button);
    button.innerText = 'usuń z koszyka'
}
    // end of part one

if(curr) {
    const newClass = curr.parentElement;
    for(const child of newClass.children) {
        child.classList.add('siblings');
    }
}

    // end of part two
