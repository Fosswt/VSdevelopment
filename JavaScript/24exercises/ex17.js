//Retornar a maior string de um array 

array = ['Sao Paulo', 'Rio de Janeiro', 'Amazonas', 'Pernambuco', 'Santa Catarina', 'Rio Grande do Norte', 'Sergipe']
function retornaMaiorString(array){
    let maior = array[0]
    for(let i = 0; i < array.length; i ++){
        if(array[i].length > maior.length){
            maior = array[i]
        }
    }
    console.log(`a maior palavra nesse array é <${maior}>, com ${maior.length} letras!`)
}

retornaMaiorString(array)