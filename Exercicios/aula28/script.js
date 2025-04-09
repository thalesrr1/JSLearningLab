/* const data = new Date();
console.log(data.toString()); */

/*
const data = new Date ('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);    //Acrescenta-se 1 pois a contagem de mês começa em 0. (caso queira o número real do mês)
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());

console.log(data.toString());
*/
function ZeroAEsquerda (num) {
    return num >= 10 ? num : ` 0${num}`
}
function formataData(data) {
    const ano = ZeroAEsquerda(data.getFullYear());
    const mes = ZeroAEsquerda(data.getMonth() + 1);
    const dia = ZeroAEsquerda(data.getDate());
    const horas = ZeroAEsquerda(data.getHours());
    const minutos = ZeroAEsquerda(data.getMinutes());
    const segundos = ZeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);