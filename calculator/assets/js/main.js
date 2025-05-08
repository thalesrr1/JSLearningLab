function createCalculator() {
  return {
    display: document.querySelector('.display'),
    
    start() {
      this.clickButtons();
      this.pressEnter();
    },

    pressEnter() {
      document.addEventListener('keyup', e => {
        console.log(e.key);
        if( e.key === 'Enter') this.makeCount()
      });
    },

    clearDisplay() {
      this.display.value = ''
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    makeCount() {
      let count =  this.display.value

      try{
        count = eval(count);

        if(!count){
          alert('Conta inválida');
          return;
        }

        this.display.value = count;
        
      } catch(e) {
        alert('Conta inválida')
        return;
      }
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
        if (el.classList.contains('btn-eq')) {
          this.makeCount()
        }

      });
    },

    btnToDisplay(valor) {
      this.display.value += valor;
    }

  };
}

const calculadora = createCalculator();
calculadora.start();
