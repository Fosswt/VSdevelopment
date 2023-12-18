//Localizar o maior valor dentro de um array de números
let array = [12, 31, 312, 313, 134, 312, -123, 123, 41, -442, -2, 3, 5, 6, -2, 1, -54, -23, 5, 65, -98, -129, -56, -64, 50, 22, 44, 55, 66, 77, 88, 99, 21, 22, 331, 341, 516,637, 846]

function localizaMaior(array){
    let maior = array[0]
    for(let i = 0; i < array.length; i ++){
        if(array[i] > maior){
            maior = array[i]
        }
    }       
    return maior
}

function localizaMenor(array){
    let menor = array[0]
    for(let i = 0; i < array.length; i ++){
        if(array[i] < menor){
            menor = array[i]
        }
    }       
    return menor
}

console.log(localizaMaior(array))
console.log(localizaMenor(array))