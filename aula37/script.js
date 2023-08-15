const nome = 'Thales Tavares';

/* 
for (let i = 0; i < nome.lenght; i++) {
    console.log(nome[i]);
}

for (let i in nome) {
    console.log(nome[i]);
}
*/

// Funciona com strings e com arrays
for (let valor of nome) {
    console.log(valor);
}

/* 
For clássico  - Geralmente com iteráveis (array ou string)
For in - Retorna índice ou chave (string,array ou objetos)
For of - Retorna o valor em si (iteráveis, arrays ou strings)
*/