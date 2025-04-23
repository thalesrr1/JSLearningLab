function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    clearDisplay() {
      this.display.value = ''
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    start() {
      this.clickButtons()
    },

    clickButtons() {
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
        if(el.classList.contains('btn-del')){
          this.deleteOne()
        }

      });
    },

    btnToDisplay(valor) {
      this.display.value += valor;
    }

  };
}

const calculadora = criaCalculadora();
calculadora.start();
