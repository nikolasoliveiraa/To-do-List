const button = document.querySelector(".btn-task")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector(".list-task")

let MinhaListaDeItens = []


function AdicionarNovaTask() {
    MinhaListaDeItens.push(input.value)

    input.value = ""

    mostrarTask()

}

function mostrarTask() {

    let novaLi = ""

    MinhaListaDeItens.forEach((i, index) => {

        novaLi = novaLi + `
        <li class="task">
            <img src="./img/correto.png" alt="check">
            <p>${i}</p>
            <img src="./img/excluir.png" alt="trash" onclick="deletarItem(${index})">
        </li>`

    })

    listaCompleta.innerHTML = novaLi

}

function deletarItem(index){
    MinhaListaDeItens.splice(index, 1)

    mostrarTask()
}

button.addEventListener("click", AdicionarNovaTask)