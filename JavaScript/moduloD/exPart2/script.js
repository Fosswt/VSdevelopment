function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('manha')
    var data = new Date()
    var hora = data.getHours()
    hora = 10
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = "pexels-gareth-davies-910411.jpg"
        document.body.style.backgroundColor = "lightblue"
    }
    else if(hora >= 12 && hora < 18){
        img.src = "pexels-tirachard-kumtanom-388304.jpg"
        document.body.style.backgroundColor = "lightcoral"
    }
    else{
        img.src = "pexels-pixabay-414144.jpg"
        document.body.style.backgroundColor = "darkblue"
    }
}