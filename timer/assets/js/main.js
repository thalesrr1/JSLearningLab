const createSeconds = () => {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const clock = document.getElementById('timer-content')
let seconds = 0;
let timer;

//Função para criar tempo

//Inicia relógio
let initClock = () => {
    timer = setInterval(() => {
        seconds++;
        clock.innerHTML = createSeconds(seconds);
    }, 1000);
}

document.addEventListener('click', function(e){
    e.preventDefault
    const el = e.target;
    console.log(el)

    if(el.classList.contains('init-button')) {
        clock.classList.remove('pause-clock')
        clearInterval(timer)
        initClock();
        console.log('cliquei no iniciar')
    }
    if(el.classList.contains('pause-button')) {
        clock.classList.add('pause-clock')
        clearInterval(timer)
        console.log('cliquei no pausar')
    }
    if(el.classList.contains('reset-button')) {
        clearInterval(timer);
        clock.innerHTML = '00:00:00'
        seconds = 0;
        console.log('cliquei no reset')
    }
})
