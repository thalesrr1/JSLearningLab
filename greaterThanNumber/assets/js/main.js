const form = document.querySelector('.form');

form.addEventListener('submit', function (e) { 
    e.preventDefault();
    const {primaryNum, secondNum} = getValues();

    const setResult = document.querySelector('#resultCard'); ;
    const resultGreather = greaterThan(primaryNum, secondNum);

    const p = createP();
    setResult.innerHTML = '';
    p.innerHTML = resultGreather;
    setResult.appendChild(p);

})

createP = () => {
    const p = document.createElement('p');
    return p;
}

let getValues = () => {
    let primaryNum = document.querySelector("#primaryNum");
    let secondNum = document.querySelector("#secondNum");

    primaryNum = Number(primaryNum.value.trim()),
    secondNum = Number(secondNum.value.trim())

    return {
        primaryNum,
        secondNum
    };
}

greaterThan = (primaryNum, secondNum) => {

    if (primaryNum > secondNum && primaryNum !== '' && secondNum !== '') {
        console.log(`O número ${primaryNum} é maior que ${secondNum}`)
        return `O número ${primaryNum} é maior que ${secondNum}`;
    } 
        console.log(`O número ${primaryNum} não é maior que ${secondNum}`)
        return `O número ${primaryNum} não é maior que ${secondNum}`

}

