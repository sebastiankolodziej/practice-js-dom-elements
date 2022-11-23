console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
};

const buttonElement = document.querySelector('.parent-for-button');
const button = document.createElement('button');
buttonElement.appendChild(button);
for(const buttonKey in buttonSettings.attr) {
    const buttonValue = buttonSettings.attr[buttonKey];
    button[buttonKey] = buttonValue;
}

for(const buttonKey in buttonSettings.css) {
    const value = buttonSettings.css[buttonKey];
    button.style[buttonKey] = value;
}

button.innerText = buttonSettings.text;