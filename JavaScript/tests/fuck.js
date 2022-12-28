function ordena(array){
    let maior = array[0]
    for(let i = 0; i < array.length; i ++){
        if(array[i] > maior){
            maior = array[i]
        }
    }
    array[0] = maior
    return array
}
let array = [1, 2 ,4 , 6, 9 ,5, 8]
console.log(ordena(array))