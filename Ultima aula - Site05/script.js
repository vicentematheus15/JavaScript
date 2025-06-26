let num = document.getElementById("num")
let lista = document.getElementById("lista")
let res = document.getElementById("res")
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(n) != -1){
        return true
    }else {
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) 
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado a lista;`
        lista.appendChild(item)

        console.log(valores)
    }else{
        alert("Valor inválido ou já encontrado na lista!")
    }
}

function finalizar(){
    res.innerHTML = `Ao todo, temos ${valores.length} cadastrados.`
}
