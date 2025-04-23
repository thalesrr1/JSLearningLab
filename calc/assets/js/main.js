function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

    clearDisplay() {
      this.display.value = ''
    },

    inicia() {
      this.cliqueBotoes()
    },

    cliqueBotoes() {
      // this -> calculadora
      document.addEventListener('click', e => {
        const el = e.target
        console.log(el)

        if(el.classList.contains('btn-num')) {
          this.btnToDisplay(el.innerText);
        }
        if(el.classList.contains('btn-clear')){
          console.log('cheguei aqui')
          this.clearDisplay()
        }
        
      });
    },

    btnToDisplay(valor) {
      this.display.value += valor;
    }

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
