//condição múltipla
/*
Dias semana
Domingo = 0
Segunda = 1
Terça = 2
Quarta = 3
Quinta = 4
Sexta = 5 
Sabado = 6
*/
function diaSemana(nome){
    var agora = new Date()
    var diaSem = agora.getDay()
    switch (diaSem) {
        case 0:
            console.log("Seja bem vindo(a), "+nome+". Hoje é Domingo!")
            break;
        case 1:
            console.log("Seja bem vindo(a), "+nome+". Hoje é Segunda-Feira!")
            break;
        case 2:
            console.log("Seja bem vindo(a), "+nome+". Hoje é Terça-Feira!")
            break;         
        case 3:
            console.log("Seja bem vindo(a), "+nome+". Hoje é Quarta-Feira!")
            break; 
        case 4:
            console.log("Seja bem vindo(a), "+nome+". Hoje é Quinta-Feira!")
            break; 
        case 5: 
            console.log("Seja bem vindo(a), "+nome+". Hoje é Sexta-Feira!")
                break; 
        case 6: 
            console.log("Seja bem vindo(a), "+nome+". Hoje é Sábado!")
                break;     
        default:
            break;
    }    
}
diaSemana("johannes")