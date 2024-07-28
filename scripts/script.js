const button = document.querySelector(".btn-task")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector(".list-task")

let MinhaListaDeItens = []


function AdicionarNovaTask() {
    MinhaListaDeItens.push({
        tarefa: input.value,
        concluido: false

    })

    input.value = ""

    mostrarTask()

}

function mostrarTask() {

    let novaLi = ""

    MinhaListaDeItens.forEach((i, index) => {

        novaLi = novaLi + `
        <li class="task ${i.concluido && "done"}">
            <img src="./img/correto.png" alt="check" onclick="concluirTarefa(${index})">
            <p>${i.tarefa}</p>
            <img src="./img/excluir.png" alt="trash" onclick="deletarItem(${index})">
        </li>`

    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem("lista", JSON.stringify(MinhaListaDeItens))

}

function deletarItem(index){
    MinhaListaDeItens.splice(index, 1)

    mostrarTask()
}

function concluirTarefa(index){
    MinhaListaDeItens[index].concluido = !MinhaListaDeItens[index].concluido

    mostrarTask()

}

function recarregarTask(){

    const taskDoLocal = localStorage.getItem("lista")

    if(taskDoLocal){
    MinhaListaDeItens = JSON.parse(taskDoLocal)
}

    mostrarTask()

}

recarregarTask()
button.addEventListener("click", AdicionarNovaTask)