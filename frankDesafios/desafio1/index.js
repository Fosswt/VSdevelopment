// Escreva uma função que devolva a soma de todos os números menores que 10.000 que sejam
// múltiplos de 3 ou 5 e não sejam múltiplos de 2

function devolveSoma(){
    let array = []
    for (let index = 0; index < 10000; index++) {
        if(index % 2 != 0){
            if(index % 3 == 0 || index % 5 == 0){
                array.push(index)
            }        
        }
    }
    return array
}
devolveSoma().forEach(element => {
    console.log(element)

});
console.log("the array has elements multiple 2? ", seeIfHasMultiple(2, devolveSoma())) 

function seeIfHasMultiple(number, array){
    array.forEach(element => {
        if(element % 2 == 0){
            return false
        }
        else{
            return true;
        }
    });
    
}