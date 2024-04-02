//let div = document.getElementById('.modelo-tarefa')
//div.style.display = 'none'

function NovaTarefa(){
    const modeloTarefa = document.querySelector('.modelo-tarefa')
    const novaTarefa = modeloTarefa.cloneNode(true)

    let nome = document.getElementById('ipt-nome')
    let desc = document.getElementById('ipt-descricao')

    let nomeV = nome.value
    let descV = desc.value
    
    if(nomeV.replace(/\s/g,'') == "" || descV.replace(/\s/g,'') == "" ){
        alert("Preencha as informações")
    }
    else{

    nome.value = ''
    desc.value = ''

    const nomeTarefa = novaTarefa.querySelector('.nome-tarefa')
    nomeTarefa.textContent = nomeV
    novaTarefa.style.display = 'block'
    
    const listaTarefas = document.getElementById('lista-tarefas')
    listaTarefas.appendChild(novaTarefa)


    novaTarefa.classList.remove('modelo-tarefa')
    }

}

