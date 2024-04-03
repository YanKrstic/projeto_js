//let div = document.getElementById('.modelo-tarefa')
//div.style.display = 'none'

function NovaTarefa(){
    const modeloTarefa = document.querySelector('.modelo-tarefa')
    const novaTarefa = modeloTarefa.cloneNode(true)

    let nome = document.getElementById('ipt-nome')
    let desc = document.getElementById('ipt-descricao')

    let nomeV = nome.value
    let descV = desc.value
    
    if(nomeV.replace(/\s/g,'') == ""){
        alert("De um nome a tarefa")
    }
    else{
    
    nome.value = ''
    desc.value = ''

    const nomeTarefa = novaTarefa.querySelector('.nome-tarefa')
    const descricaoTarefa = novaTarefa.querySelector('.descricao-tarefa')
    nomeTarefa.textContent = nomeV
    descricaoTarefa.textContent = descV
    
    descricaoTarefa.style.display = 'none'
    novaTarefa.style.display = 'block'
    
    if(descV.replace(/\s/g,'') == ""){
        let butao_desc = novaTarefa.querySelector('.desc')
        butao_desc.style.display = "none"
    }

    const listaTarefas = document.getElementById('lista-tarefas')
    listaTarefas.appendChild(novaTarefa)
    
    novaTarefa.classList.remove('modelo-tarefa')
    }

}
function RemoverTarefa(botao){

    let tarefa = botao.parentNode
    tarefa.remove()
}

function Desc(botao){

    let tarefa = botao.parentNode
    let txt = tarefa.querySelector('.descricao-tarefa')
    if (txt.style.display === 'none') {
        
        txt.style.display = 'block'
        
    }else {
        
        txt.style.display = 'none'
    }
}



