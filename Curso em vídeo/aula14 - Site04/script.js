function calcularTabuada(){
    let num = document.getElementById("num")
    let tabuada = document.getElementById("tabuada")

    if(num.value == ""){
        alert("Digite um número válido para calcular a sua tabuada")
    }else {
        let n = Number(num.value)
        tabuada.innerHTML = ''
            for(let c = 1; c <= 10; c++){
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n * c}`
                tabuada.appendChild(item)
        }
    }
}