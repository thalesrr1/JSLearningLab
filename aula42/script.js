//Atribuição via desestruturação (arrays)


//               0    1    2    3    4    5    6    7    8    9      << índices
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const [um, dois, tres, , cinco, , sete, ...resto] = numeros;
// Pulamos valores acrescentando espaços vazios
// O operador '...' se usado no sentido de pegar o resto de alguma coisa, chamamos de ... rest
// se utilizado no sentido de espalhar alguma coisa, chamamos de ... spread
console.log(um, dois, tres, cinco);
console.log(resto);


/* Sobre um array dentro de um array */


//índice                0          1          2
//                   0  1  2    0  1  2    0  1  2  
const contadores = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//para acessar o valor 6 por exemplo, preciso acessar o índice 1 da lista(array) contadores, e o indice 2 da lista 1.
console.log(contadores[1][2]);