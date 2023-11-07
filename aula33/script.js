const pessoa = {
    nome: 'Thales',
    sobrenome:'Tavares',
    idade: 30,
    endereco: {
        rua: 'Av JK',
        numero:  320
    }
};


// Atribuição via desestruturação
//posso redeclarar o nome da variavel utilizando por ex nome : n
// podemos especificar um valor padrao a variavel nome = ''
const {nome, sobrenome } = pessoa;
console.log(nome, sobrenome);

const { endereco: {rua, numero}, endereco} = pessoa;
console.log(rua, numero, endereco);