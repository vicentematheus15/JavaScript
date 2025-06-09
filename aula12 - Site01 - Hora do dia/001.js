function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12){
        //BOM DIA!
        img.src = "fotomanha.png"
        document.body.style.background = "#ffcf66"
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = "fototarde.png"
        document.body.style.background = "#e68b57"
    }else{
        //BOA NOITE!
        img.src = "fotonoite.png"
        document.body.style.background = "#0a0b2e"
    }
}