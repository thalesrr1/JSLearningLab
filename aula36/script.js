//For in -> lê os índices ou chaves do objeto

const frutas = ['Pera', 'Maçã', 'Uva']

for (let index in frutas) {
    console.log(frutas[index]);
}


const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Tavares',
    idade: 30
};


// #1
for (let chave in pessoa) {
    console.log(chave)
}

// #2
console.log(pessoa.nome);

// #3
console.log(pessoa['nome']);

// #4
const chave ='nome';
conhsole.log(pessoa[chave])

// #5

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
};