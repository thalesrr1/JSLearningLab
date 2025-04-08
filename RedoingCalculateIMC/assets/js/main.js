const form = document.querySelector('.form');

// Função para calcular o IMC
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Pega os valores do peso e altura
    const { weight, height } = getValues();
    console.log(`Peso: ${weight} Altura: ${height}`);

    if(!isValid(weight, height)) return;
    
    const bmi = (weight / (height * height)).toFixed(2)
    const obesityLevel = setObesityLevel(bmi);

    const msg = `Seu IMC é ${bmi} <br> (${obesityLevel}).`;

    setResult(msg, true);
});

// Função para criar um elemento <p>
createP = () => {
    const p = document.createElement('p');
    return p;
}

//função para pegar os valores do peso e altura
getValues = () => {
    const weightInput = document.querySelector('#weight');
    const heightInput = document.querySelector('#height');

    const weight = Number(weightInput.value.trim());
    const height = Number(heightInput.value.trim());

    return {
        weight,
        height
    };
}

//função para verificar se os valores são validos
isValid = (weight, height) => {
    if (!weight || weight <= 0) {
        setResult('Peso inválido', false);
        return;
    }
    if (!height || height <= 0) {
        setResult('Altura inválida', false);
        return;
    }
    return true
}

//função para definir o nível de obesidade
setObesityLevel = (bmi) =>{
    const obesityLevels = [
        { min: 0, max: 18.5, level: 'Abaixo do peso' },
        { min: 18.5, max: 24.9, level: 'Peso normal' },
        { min: 25, max: 29.9, level: 'Sobrepeso' },
        { min: 30, max: 34.9, level: 'Obesidade grau 1' },
        { min: 35, max: 39.9, level: 'Obesidade grau 2' },
        { min: 40, max: Infinity, level: 'Obesidade grau 3' }
    ];

    for (const obesity of obesityLevels) {
        if (bmi >= obesity.min && bmi < obesity.max) {
            return obesity.level;
        }
    }
}

// Função para definir o resultado
setResult = (msg, isValid) => {
    const resultCard = document.querySelector('#resultCard');

    resultCard.innerHTML = '';
    const p = createP();
    if (isValid) {
        p.classList.add('result-message');
    } else {
        p.classList.add('error-message');
    }
    p.innerHTML = msg;
    resultCard.appendChild(p);
}