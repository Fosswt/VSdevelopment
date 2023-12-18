// bubble sort
//primeiro vou fazer um algoritmo de ordenação da minha cabeça e depois compará-lo com outros já existentes

let array = [541, 31, 12, 13, 134, 312, 22, 44, 55, 66, 1, 88, 99, 21, 2, 331, 341, 51, 637, 555]

function ordenaArray(array){
    for(let j = 0; j < array.length; j++){
        let menor = array[j]
        let idx = 0
        for(let i = j; i < array.length; i ++){
            if(array[i] < menor){
                menor = array[i]
                idx = i
            }
        }
        array[idx] = array[j]
        array[j] = menor
    }
    console.log(array)
}

ordenaArray(array)