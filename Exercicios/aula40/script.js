// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
//A variavel corPadrao sempre terá um valor, sendo ele o corUsuário, caso o usuario tenha alterado o valor padrao null
//Caso o usuário não tenha escolhido um valor a cor padrão é 'Preto'

console.log (nivelUsuario, corPadrao);
/*
if (pontuacaoUsuario >= 1000) {
console.log('Usuário VIP');
} else {
console.log('Usuário normal');
}
*/