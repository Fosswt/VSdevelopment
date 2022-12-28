//fazendo função de achar o maior número, menor e a média em javascript PURO
//primeiro vamos criar um array aleatório:
let arrayNumeros = [1,4,5,7,9,11,16,18,21,20,8]
//para achar o maior: 
function achaMaior(lista){
    let maiorNum = lista[0]
    let menorNum = lista[0]
    let soma = 0
    let quantidadeNum = lista.length
    for (let pos in lista){
        soma += lista[pos]
        if(lista[pos] > maiorNum){
            maiorNum = lista[pos]
        }
        if(lista[pos] < menorNum){
            menorNum = lista[pos]
        }
    }
    let mediaNum = soma / quantidadeNum
    console.log(`A quantidade de elementos nesse array é de: ${quantidadeNum} elementos\nO maior número nesse array é: ${maiorNum}\nO menor é: ${menorNum}\nA soma dos números no array é: ${soma}\nFinalmente, a média dos valores do array é: ${mediaNum}`)
}
achaMaior(arrayNumeros)
console.log(arrayNumeros.length)