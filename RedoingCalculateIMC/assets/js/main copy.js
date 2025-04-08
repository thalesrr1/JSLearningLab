function parseNumberBr(value) {
    const cleanValue = value.replace(/\./g, '').replace(',', '.');
    const parsed = parseFloat(cleanValue);
    return isNaN(parsed) ? null : parsed;
}

// Função para obter o peso e altura do formulário
getWeight = () => {
    const weightInput = document.querySelector('#weight');
    const weight = weightInput.value.trim();
    const parsedWeight = parseNumberBr(weight);
    return parsedWeight;
}

getHeight = () => {
    const heightInput = document.querySelector('#height');
    const height = heightInput.value.trim();
    const parsedHeight = parseNumberBr(height);
    return parsedHeight;
}

// Função para calcular o IMC
calculateBMI = () => {
    const weight = getWeight();
    const height = getHeight();
    console.log(`Peso: ${typeof weight} Altura: ${typeof height}`);

    if (weight === null || height === null) {
        alert("Por favor, insira valores numéricos válidos!");
        return null;
    }

    if (weight <= 0 || height <= 0) {
        alert("Peso e altura devem ser positivos!");
        return null;
    }

    return (weight / (height * height)).toFixed(2);
}

// Função para criar um PARAGRAFO
function createParagraph() {
    const p = document.createElement('p');
    return p;
}

// Função para exibir o resultado do IMC
function setResult() {
    const form = document.querySelector('.form');
    const resultCard = document.querySelector('#resultCard');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const bmi = calculateBMI();

        resultCard.innerHTML = ''; // Limpa o conteúdo anterior
        const p = createParagraph();
        
        p.innerHTML = `Seu IMC é: ${bmi}`;
        resultCard.appendChild(p);
    });

}
setResult();