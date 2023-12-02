const inputTarefa =  document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');



inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
        limpardados()
    }
})

const limpardados = () => {
    inputTarefa.value = ''
    inputTarefa.focus()
}

const BtnDelete = (li) => {
    const btnapagar = document.createElement('button')
    btnapagar.style.margin = '5px'
    btnapagar.innerHTML = 'Apagar'
    btnapagar.setAttribute('class', 'apagar');
    btnapagar.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(btnapagar)
}

function criaTarefa(texto) {
    let li = document.createElement('li')
    li.innerHTML = texto
   tarefas.appendChild(li);
   BtnDelete(li)
   
}


function salvartarefas() {

    const listatarefas = tarefas.querySelectorAll('li')
    const ListadeTarefas = []

    for (let tarefa of listatarefas){
        let tarefaText = tarefa.innerHTML;
        tarefaText = tarefaText.replace('Apagar', '').trim()
        ListadeTarefas.push(tarefaText)
    }

    const tarefaJSON = JSON.stringify(ListadeTarefas);
    localStorage.setItem('tarefa', tarefaJSON)
}

btnTarefa.addEventListener('click', function(evento){
    if (!inputTarefa.value) return;
     criaTarefa(inputTarefa.value)
     limpardados()

})

document.addEventListener('click', function(evento){
    const element = evento.target
    if (element.classList.contains('apagar')){
        element.parentElement.remove()


    }
})


function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listadeTarefas = JSON.parse(tarefas);
    console.log(listadeTarefas)
}

adicionaTarefasSalvas()