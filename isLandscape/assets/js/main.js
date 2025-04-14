const ePaisagem = (x, y) => x > y ? 'Paisagem' : 'Vertical';

const form = document.querySelector('.form');
const resultCard = document.querySelector('#resultCard');

form.addEventListener('submit', function (e) {

    e.preventDefault();
    const {x, y} = getValues();
    const resultado = ePaisagem(x, y);
    setResult(resultado);
})

const setResult = (resultado) => {
    resultCard.innerHTML = '';
    resultCard.innerHTML = `<p>${resultado}</p>`;
}

getValues = () => {
    let x = document.querySelector('#x').value.trim();
    let y = document.querySelector('#y');

    // x = Number(x.value.trim()),
    y = Number(y.value.trim())
    return {
        x,
        y
    };
}