// Capturar evento de submit do usuário
// Capture user submit event
const form = document.querySelector('#form-bmi');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);
    
    if (!weight) {
        setResult('Peso inválido', false)
        return;
    }
    if (!height) {
        setResult('Altura inválida', false)
        return;
    }
    
    const bmi = getBMI(weight, height);
    const bmiStatus = getBmiStatus(bmi);
    const msg = `Seu IMC é ${BMI} (${bmiStatus})`;
    
    setResult(msg, true)
});

//Processamento de Dados: calculo do IMC
//Data Processing: BMI calculation
getBMI = (weight, height) => {
    const bmi = weight / height ** 2;
    return bmi.toFixed(2);
};

getBmiStatus = (bmi) => {
    const status = ['Abaixo do peso', 'Peso normal', 'Sobrepeso','Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3' ]

    if (bmi >= 39.9) return status[5];
    if (bmi >= 34.9) return status[4];
    if (bmi >= 29.9) return status[3];
    if (bmi >= 24.9) return status[2];
    if (bmi >= 18.5) return status[1];
    if (bmi < 18.5) return status[0];
};

// Criador de paragrafo
// Paragraph creator
createP = () => {
    const p = document.createElement('p')
    return p
    
}

// Saída de dados
// Data output
setResult = (msg, validValue) => {
    const result = document.querySelector('.answer');
    result.innerHTML = '';
    const p = createP();
    
    p.innerHTML = msg;
    result.appendChild(p);
};