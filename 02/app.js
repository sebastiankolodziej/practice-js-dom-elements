console.log('DOM');

const links = document.querySelectorAll('[data-url]');
console.log(links);

links.forEach(function(element) {
    const contentAtt = element.getAttribute('[data-url]');
    element.setAttribute('href', contentAtt);
});
