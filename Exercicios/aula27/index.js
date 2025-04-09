// Operador ternário
// JavaScript Operators Reference
// (condicao) ? 'Valorpara verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 500;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário vip' : 'Usuário normal';



const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)
