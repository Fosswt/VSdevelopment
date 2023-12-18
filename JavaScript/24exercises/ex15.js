//Criar uma função que retorno um valor booleano informando se o número enviado como 
//parâmetro é um número primo. 

function isPrimo(number){
    if(number % 2 != 0){
        return true
    }
    return false;
}
console.log(isPrimo(7))