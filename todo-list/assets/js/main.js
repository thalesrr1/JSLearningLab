// 2. Selecionar os elementos necessários do DOM:
const taskInput = document.querySelector('.input-tarefa')
const taskButton = document.querySelector('.btn-tarefa')
const taskList  = document.querySelector('.tarefas')

const createTaskItem  = () => document.createElement('li')

//Cri as tarefas na lista
const taskCreate = (textInput) => {
  const li = createTaskItem ();
  li.innerText = textInput;
  taskList .appendChild(li);
  taskInput.value = '';
  taskInput.focus();
  createButtonDel(li)
  saveTask()
}

//Salva as tarefas
const saveTask = () => {
  const liTasks = taskList.querySelectorAll('li');
  const tasksList = []

  //Obter valor 
  //Inserir uma task na taskList Array
  for (let task of liTasks) {
    let taskText = task.innerText;
    taskText = taskText.replace('❌', '').trim();
    tasksList.push(taskText);
  }

  //Cria um json
  //converte o array em string
  //insere string no json
  const tasksJson = JSON.stringify(tasksList)
  localStorage.setItem('tasks', tasksJson)
}

//Adiciona as tarefas salvas ao carregar pagina
const addSaveTasks = () => {
  const tasks = localStorage.getItem('tasks');
  
  // Se não houver tarefas salvas, retorna early
  if (!tasks) return;
  
  try {
    // Converter para array e verificar se é válido
    const tasksList = JSON.parse(tasks);
    
    // Verifica se é um array e tem itens
    if (!Array.isArray(tasksList)) return;
    
    for (let task of tasksList) {
      if (task && typeof task === 'string') {  // Verifica se é uma string válida
        taskCreate(task);  // Usa a função existente para criar cada tarefa
      }
    }
  } catch (error) {
    console.error('Erro ao carregar tarefas:', error);
    // Em caso de erro, limpa o localStorage
    localStorage.removeItem('tasks');
  }
}

//Cria o botão de deletar
const createButtonDel = (li) => {
  li.innerText += ' '
  const buttonDel = document.createElement('button')
  buttonDel.innerText= '❌'
  buttonDel.setAttribute('class', 'delete-item-list')
  buttonDel.setAttribute('title', 'Apagar está tarefa')
  li.appendChild(buttonDel)
  
}

addSaveTasks()
//Escutadores de evento
taskButton.addEventListener('click', () => {
  if(!taskInput.value) return;
  taskCreate(taskInput.value)
})

taskInput.addEventListener('keypress', (e) => {
  if(e.keyCode !== 13 || !taskInput.value) return;
    taskCreate(taskInput.value)
})

document.addEventListener('click', (e) => {
  const el = e.target;
  if(el.classList.contains('delete-item-list')){
    el.parentElement.remove()
    saveTask()
  }
})

//saveTask() utilizado ao adicionar ou remover
//Atualizando o array nos dois momentos