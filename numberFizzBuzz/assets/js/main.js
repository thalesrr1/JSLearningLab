//Escrever função recebe um numero
//retorne o seguinte

const fizzBuzz = Num => {
    //Checar se é um numero
    if (typeof Num !== 'number') return 'Is not a Number'
    //Numero é divisivel por 3 e 5 = FizzBuzz
    if (Num % 3 === 0 && Num % 5 === 0) return 'FizzBuzz';
    //Numero é divisivel por 3 = Fizz
    if (Num % 3 === 0) return 'Fizz';
    //Numero é divisivel por 5 = Buzz
    if (Num % 5 === 0) return 'Buzz';
    //Caso contrario retorna o numero
    return Num;
    
}
//use a função com numeros de 0 a 100

let Num = 0;

while (Num <= 100) {
    console.log(fizzBuzz(Num));
    Num++;
}