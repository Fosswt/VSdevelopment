function convert$(reais){
    let dolar = reais / 5.19
    return dolar
}

let data = {
    name: "vini",
    age: 19,
    degree: "computer science",
    savings: "Around $"+convert$(1500) 
}
console.log(data)
let arrayNums = [1, 2, 3, 4, 5, 6,7,8,9,11,12,17,19,29,35]
function pegaMaior(array){ //function that takes the highest number and returns it
    let maior = array[0]
    for(let pos in array){
        if(array[pos] > maior){
            maior = array[pos]
        }
    }
    return maior
}
console.log(pegaMaior(arrayNums))
//creating a function that returns the average 
function mediaArray(array){
    let soma = 0
    for(let pos in array){
        soma += array[pos]
    }
    let media = soma/array.length
    console.log("A soma de todos os valores dá: "+soma)
    console.log("A média é igual a: "+media)
}
mediaArray(arrayNums)
//creating a function that returns the lowest value
function retornaMenor(array){
    let menor = array[0]
    for(let pos in array){
        if(array[pos] < menor){
            menor = array[pos]
        }
    }
    return menor
}
console.log(retornaMenor(arrayNums))
function fatorial(num){
    let fat = 1
    for(i = num; i > 1; i--){
        fat = fat*i
    }
    console.log(fat) 
}
fatorial(5)

