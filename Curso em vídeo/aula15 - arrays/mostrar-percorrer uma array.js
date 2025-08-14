let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
console.log(valores[0])

//mostrar/percorrer uma array com for
// for(let i = 0; i <= valores.length;i++){
//     console.log(`A posição ${i} tem o valor ${valores[i]}`)
// }


//mostrar/percorrer uma array com for in (mesma coisa que o de cima, mas um pouco mais simplificado)
for(let i in valores){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}