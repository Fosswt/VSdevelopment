let meuArray = [1, 2, 3, 4, 5]
//usamos o let i OF array para iterar sobre um array, e o let i IN object para iterar sobre um objeto.
function media(array){
    let soma = 0
    for(let i of array){
        soma += i
    }
    let result = soma / array.length
    alert('a média do array é '+result)
    
}

function mediaDinamica(){
    let roda = true
    let arrayNums = [0]
    alert('Insira numeros na tela para calcular sua média (insira 0 para retornar a média)')
    while(roda){
        let num = prompt('manda o numero ae cria')
        if(num == 0){
            roda = false
            alert('programa cancelado com sucesso.')
                let soma = 0
                arrayNums.pop()
                
                for(let i = 0; i < arrayNums.length; i++){
                    soma += arrayNums[i]
                }
                console.log(arrayNums)
                let media = soma / arrayNums.length
                console.log('tamanho do array: '+ arrayNums.length)
                console.log('soma total do array: '+soma)
                console.log('output: soma / array')
                alert('a média total foi de: '+media)
        }
        else{
            arrayNums.push(num)
            console.log(arrayNums)
        }
    }
}