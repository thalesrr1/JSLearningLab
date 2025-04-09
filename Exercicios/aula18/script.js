/* const pessoa1 = {
nome = 'Maria',
sobrenome = 'paiva',
idade = 55
};

const pessoa2 = {
nome = 'Thales',
sobrenome = 'Tavares',
idade = 24,
}; 
console.log(pessoa1.nome);
*/

/* function criaPessoa (nome, sobrenome, idade) {
    return {nome,sobrenome,idade};
}
const pessoa1 = criaPessoa('Thales', 'Tavares', 24);
const pessoa2 = criaPessoa('Adriene', 'Paiva', 25);

console.log(pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade)
 */

const pessoa1 = {
    nome: 'Thales',
    sobrenome: 'Tavares',
    idade: 24,
    
    fala() {
    console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
    console.log(`A minha idade atual é ${this.idade}`);
    },
    
    incrementaIdade() {
    this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();