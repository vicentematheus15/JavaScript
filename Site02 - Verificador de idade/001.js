function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 12){
            //criança
            img.setAttribute('src', 'fotocrianca-m.png')
        }else if(idade < 24){
            //jovem
            img.setAttribute('src', 'fotojovem-m.png')
        }else if(idade < 60){
            //adulto
            img.setAttribute('src', 'fotoadulto-m.png')
        }else{
            //idoso
            img.setAttribute('src', 'fotoidoso-m.png')
        }
    }else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 12){
            //criança
             img.setAttribute('src', 'fotocrianca-f.png')
        }else if(idade < 24){
            //jovem
            img.setAttribute('src', 'fotojovem-f.png')
        }else if(idade < 60){
            //adulto
            img.setAttribute('src', 'fotoadulto-f.png')
        }else{
            //idoso
            img.setAttribute('src', 'fotoidoso-f.png')
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
