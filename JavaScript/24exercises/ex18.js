//Criar uma função que junte dois arrays e retorno o resultado como um novo array 

let arrayTeste = [-123, 123, 41, -442, -2, 3, 5, 6, -2, 1, -54, -23, 5, 65, -98, -129, -56, -64, 50]

let array = [12, 31, 312, 313, 134, 312, 22, 44, 55, 66, 77, 88, 99, 21, 22, 331, 341, 516,637, 846]

function juntaArrays(array1, array2){
    let newArray = []
    for(let i = 0; i < array1.length; i ++){
        newArray.push(array1[i])
    }
    for(let i = 0; i < array2.length; i ++){
        newArray.push(array2[i])
    }
    return newArray
}

console.log(juntaArrays(arrayTeste, array))