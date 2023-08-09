
//               0    1    2    3    4    ...
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, dois, tres, ...resto] = numeros;
//         operador    ...rest  (pegar o resto de algo)
//o operador spread tem o intuito de espalhar mas fazem a mesma coisa
console.log(um, dois, tres);

console.log(resto);


//               0    1    2    3    4    ...
const Number = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [one, , three, ,five, ,seven] = Number;
console.log(one, three, five);
