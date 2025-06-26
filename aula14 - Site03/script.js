function contar() {
    let numInicio = document.getElementById("numInicial").value;  
    let numFinal = document.getElementById("numFinal").value;
    let passo = document.getElementById("passo").value;
    let resultado = document.getElementById("resultado");

    if(numInicio == "" || numFinal == "" || passo == ""){
        alert("É necesário digitar o número iniciaL, final e o passo para realizar a contagem");
        resultado.innerHTML = `Impossível contar!`;
        return
    }
    let i = Number(numInicio)
    let f = Number(numFinal)
    let p = Number(passo)

    if(i < f){
        //contagem crescente
        for(let c = i; c <= f; c += p ){
            resultado.innerHTML += `👉${c}`;
        }
    }else{
        //contagem regressiva
        for(let c = i; c >= f; c -= p){
            resultado.innerHTML += `👉${c}`
        }
    }
    resultado.innerHTML +=`🏁`
}


function apagar() {
    document.getElementById("resultado").innerHTML = `Preparando a contagem`;
    document.getElementById("numInicial").value = ""; 
    document.getElementById("numFinal").value = "";
    document.getElementById("passo").value = "";
}