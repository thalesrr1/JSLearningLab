const pessoas = [
{nome: 'Thales', idade: 24},
{nome: 'Adriene', idade: 25},
{nome: 'Junior', idade: 22},
{nome: 'Kaua', idade: 6},
{nome: 'Carla', idade: 35},
{nome: 'João', idade: 10}
];

const container = document.querySelector('.container')

for (let i = 0; i < pessoas.length; i++) {
    criaLista(i)
}

function criaLista(i) {
    let {nome, idade} = pessoas[i];
    
    const lista = document.createElement('tr');
    lista.innerHTML =`
        <td> ${nome} </td>
        <td> ${idade} </td>
    `;
    
    container.appendChild(lista);
};