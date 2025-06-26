let num = document.getElementById("num").value
let n = Number(num)
let lista = document.getElementById("lista").value
let res = document.getElementById("res").value
valores = []

function isNumero(n){
    if(n < 1 || n > 100 || n == "")
        return false
}

function inLista(n, valores){
    if(valores.indexOf(n) != -1)
        return false
}

function adicionar(){ 
    if(isNumero(n) && inLista(n, valores) == false)
        alert("Digite um número válido para adicionar!")
}

