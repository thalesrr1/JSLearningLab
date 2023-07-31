function meuEscopo () { 
    const form = document.querySelector('.registroPessoa');
    const recebeResultado = document.querySelector('.resultado');
    alert(1)

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
        });
        
        console.log(pessoas);
        
        recebeResultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
    
    
    form.addEventListener('submit', recebeEventoForm);
};
meuEscopo()