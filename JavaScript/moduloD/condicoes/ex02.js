function greeting(hora){
    console.log(`Agora são exatamente ${hora} horas.`)
    var agora = new Date()
    var ahora = agora.getHours()
    console.log("(Hora exata do relógio do sistema: "+ahora+")")
    if (hora > 5 && hora < 13){
        console.log("Bom dia!")
    }
    else if (hora >= 13 && hora <= 18){
        console.log("Boa tarde!")
    }
    else if(hora >= 19 && hora < 24){
        console.log("Boa noite!")
    }
    else if (hora <= 5){
        console.log("Boa madruga!")
    }
}
greeting(6)