const inputItem = document.getElementById("input-item")
const listaDeCompras = document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById("adicionar-item")
let contador = 0

//cria evento de adicionar um item na lista de compras
botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault()
// se o valor do input for negativo, aparece um alert
    if (inputItem.value === ""){
        alert("Por favor, insira um item!")
        return
    }
//cria uma lista e também uma div com a mesma classe que estava estilizando a lista
    const itemDaLista = document.createElement("li")
    const containerItemDaLista = document.createElement("div")
    containerItemDaLista.classList.add("lista-item-container")
//cria uma variavel para receber o input que é digitado ao criar um novo item
// o input é do tipo checkbox e tem um contador para saber se está marcado ou não
    const inputCheckbox = document.createElement("input")
    inputCheckbox.type = "checkbox"
    inputCheckbox.id = `checkbox ${contador++}`
//o paragrafo criado recebe o valor que foi escrito no input
    const nomeItem = document.createElement("p")
    nomeItem.innerText = inputItem.value
//coloca o input(checkbox) e o p como filhos da div
    containerItemDaLista.appendChild(inputCheckbox)
    containerItemDaLista.appendChild(nomeItem)
//colocar a div coo filha da li e a li como filha da div "lista-de-compras" do html
    itemDaLista.appendChild(containerItemDaLista) 
    listaDeCompras.appendChild(itemDaLista)

//cria uma variável para armazenar o dia da semana atual no formato "segunda-feira, terça-feira..." etc.
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"})

    const data = new Date().toLocaleDateString("pt-BR")

    const DataCompleta = `${diaDaSemana} (${data})`
})