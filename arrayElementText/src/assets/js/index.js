const elements = [
    {tag: 'p',       text: 'frase 1'},
    {tag: 'div',     text: 'frase 2'},
    {tag: 'footer',  text: 'frase 3'},
    {tag: 'h2',      text: 'frase 4'},
    {tag: 'h1',      text: 'frase 5'},
];
console.log(elements, elements.length);

//
function createElement (Element) {
    const element = document.createElement(Element);
    console.log(element);
    console.log('Criou elemento');
    return element;
}

const container = document.querySelector('.result');

for (let i = 0; i < elements.length; i++) {
    const { tag, text } = elements[i];
    console.log('Dentro do for: '+ tag, text);

    const element = createElement(tag);
    element.innerHTML = text;
    container.appendChild(element);
}

