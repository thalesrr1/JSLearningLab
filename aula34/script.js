// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// i - index

for (let i = 0; i <=5; i++ ) {
    console.log(i)
}

for (let i = 500; i >=350; i -= 10 ) {
    console.log(`Linha ${i}`);
}


//Verificando se o número é par
for (let i = 0; i <=10; i++ ) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par)
}


//             0         1       2
const frutas= ['banana', 'maça', 'pêra', 'uva', 'kiwi', 'goiaba', 'abacate', 'morango', 'laranja']
for (let i = 0; i <= frutas.length; i++) {
    console(`Índice ${i}`, frutas[i])
}
