//criar uma função que recebe uma letra e uma frase. Ele deve dizer quantas vezes essa letra aparece na frase.
function pegaLetra(letra, frase){
    let contador = 0
    for(let i in frase){
        if(frase[i] == letra){
            contador ++
        }
    }
    if(contador == 0){
        console.log("Letra não encontrada!")
    }
    else{
        console.log(`A letra ${letra} aparece na string ${frase} ${contador} vezes!`)
    }
}
pegaLetra("x", "vinicius")