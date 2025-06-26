let num = document.getElementById("num").value
function adicionar(){
    
    if(num == "" || num > 100 || num < 1){
        alert("Digite um número válido para adicionar!")
    }else{
        let arrayNum = Number([num])
        console.log(arrayNum)
        arrayNum.push(num)
    }

}