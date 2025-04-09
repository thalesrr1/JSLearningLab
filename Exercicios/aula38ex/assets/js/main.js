const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p')

//Na constante estilosBody tem computado todos os estilos(css) contidos no body
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;


for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
}