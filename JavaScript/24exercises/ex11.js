//Criar uma função que receba como parâmetro um array de números e retorne um array 
//contendo somente números positivos.

let arrayTeste = [-123, 123, 41, -442, -2, 3, 5, 6, -2, 1, -54, -23, 5, 65, -98, -129, -56, -64, 50]

function excluiNegativos(array){
    return array.filter(x => x > 0) //apenas uma linha de código!
}

function dumbExcluiNegativos(array){
    let positiveArray = []
    for(let i = 0; i < array.length; i ++){
        if(array[i] > 0){
            positiveArray.push(array[i])
        }
    }
    return positiveArray
}

console.log(excluiNegativos(arrayTeste))
console.log(dumbExcluiNegativos(arrayTeste))