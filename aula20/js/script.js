
// function meuEscopo() {
//     const form = document.querySelector('.form');

//     form.onsubmit = function (event)  {
//         console.log(event);
//         console.log("enviado");
//         alert('Formulário enviado')
//     };
// };
// meuEscopo();


function meuEscopo() {
    const form = document.querySelector('.form');
    const resulCard = document.querySelector('#resultCard');
    const nome = form.querySelector('#name');
    const sobrenome = form.querySelector('#lastName');
    const peso = form.querySelector('#weight');
    const altura = form.querySelector('#height');

    const pessoas = []; 
    
    function criaCardPessoas(pessoa) {
        return `
            <p>Nome: ${nome.value}</p> 
            <p>Sobrenome: ${sobrenome.value}</p>
            <p>Peso: ${peso.value}</p>
            <p>Altura: ${altura.value}</p>
        `
    }

    function limpaCampos() {
        nome.value = '';
        sobrenome.value = '';
        peso.value = '';
        altura.value = '';
    }

    function recebeEventoForm(event) {
        event.preventDefault(); // Evita que a página recarregue

        const pessoa = {
            nome: nome.value.trim(),
            sobrenome: sobrenome.value.trim(),
            peso: peso.value.trim(),
            altura: altura.value.trim()
        }

        pessoas.push(pessoa);

        resulCard.innerHTML += criaCardPessoas(pessoa);
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();