const h1 = document.querySelector('.container h1');
let date = new Date();
console.log(date);

function getWeekDayName(weekDay) {
    const weekDays = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ];
    return weekDays[weekDay];
}

function getMonthName(getMonthName) {
    const monthNames = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];
    return monthNames[getMonthName];
}

function zeroLeft(num) {
    return num >= 10 ? num : `0${num}`;
}

criadata = date => {
    const weekDay = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log(getWeekDayName(weekDay));

    return `
    ${getWeekDayName(weekDay)}, 
    ${date.getDate()} de ${getMonthName(month)} de ${year} 
    ${zeroLeft(hour)}:${zeroLeft(minutes)}:${zeroLeft(seconds)}
    `;
}

h1.innerHTML = criadata(date);