const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
let numero = Number(prompt("Digite um número:"));

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}<\p>`;
texto.innetHTML += `<p>${numero} é inteiro: ${numero % 1 === 0}<\p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}<\p>`;
texto.innerHTML += `<p>Arrendondando para baixo: ${Math.floor(numero)}<\p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}<\p>`;
const numfixed = numero.Number.toFixed(2);
texto.innerHTML += `<p>Com duas casas decimais: ${numfixed}<\p>`;