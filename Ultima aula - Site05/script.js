let num = document.getElementById("num")
let lista = document.getElementById("lista")
let res = document.getElementById("res")
let valores = []

function isNumero(n){
    //se o valor numerico do numero for entre 1 e 100, retorna true. Qualquer outro valor indesejado retorna false
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    //o metodo indexOf, busca na lista "l" pelo valor "n" e retorna o índice em que achou esse valor. se não achar o valor na array, retorna -1.
    //nessa linha, se o valor retornado for diferente de -1, significa que o item ja existe na array e retorna true na função. caos contrario, retorna false
    if(l.indexOf(n) != -1){
        return true
    }else {
        return false
    }
}


function adicionar(){
    //se a funçao isNumero(pra saber se é um numero válido)for verdadeira E a função inLista(pra saber se o numero ja foi adicionado na lista) for falsa (a "!" no inLista inverte)
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) //adiciona o valor numerico de num na array valores
        let item = document.createElement('option') //cria um elemento option para aparecer no select e uma variavel iem que recebe o option criado
        item.text = `O valor ${num.value} foi adicionado;` //o texto do item que foi criado é mostrado no select
        lista.appendChild(item) //adiciona na "lista" (variavel que foi criada no js pra receber o ID do select) o item criado
        res.innerHTML = ""

    }else{
        alert("Valor inválido ou já encontrado na lista!")
    }
    num.value = "" //apaga do input o número que foi adicionado
    num.focus() //após adicionar, é como se ja tivesse clicado novamente no input para adicionar um novo valor
}

function finalizar(){
    if(valores.length == 0){
        alert("Adicione valores antes de finalizar!")
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let c = 0; c <= valores.length; c++){
            soma += Number(valores[c])
    
            if(valores[c] > maior)
                maior = valores[c]
    
            if(valores[c] < menor)
                menor = valores[c]
            
        }
        media = soma / total
        
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores adicionados, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
