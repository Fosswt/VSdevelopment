//Calcular a soma dos numeros de um array 
let arrayTeste = [12, 31, 312, 313, 134, 312, 22, 44, 55, 66, 77, 88, 99, 21, 22, 331, 341, 516,637, 846]

function somaItens(array){
    let soma = 0
    for(let i = 0; i < array.length; i ++){
        soma += array[i]
    }
    return soma
}

console.log(somaItens(arrayTeste))