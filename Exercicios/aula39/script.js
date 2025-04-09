function random(min, max) {
const r = Math.random() * (max - min) + min;
return r
}

const min = 1;
const max = 50;
let rand = random(min, max);

//"while" se a condição ja iniciar como falsa, o bloco de código não é executado
while (rand !== 10) {
// função random(min, max)
    rand = random(min, max);
}


//"do while" primeiro executa o bloco de código antes de checar a condição pela primeira vez
do {
    rand = random (min, max)
    console.log(rand);
} while(rand !== 10);