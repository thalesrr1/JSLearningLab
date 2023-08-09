const elementos = [
{tag: 'p', texto: 'Um paragrafo'},
{tag: 'div', texto: 'Uma div'},
{tag: 'section', texto: 'Uma section'},
{tag: 'h1', texto: 'Título 1'},
{tag: 'h2', texto: 'Título 2'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    criaTag(i)
}

function criaTag(i) {
    let { tag, texto } = elementos[i];
    const TagCreate = document.createElement(tag);
    TagCreate.innerHTML = texto;
    div.appendChild(TagCreate);
};

container.appendChild(div)