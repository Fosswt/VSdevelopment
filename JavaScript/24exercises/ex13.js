//Calcular a soma de todos os dígitos de um número inteiro positivo 
var digito = 5136

function calculaDigitos(number){
    if(number <= 0){
        console.log('this function accepts only positive numbers!')
        return 
    }
    else{
        let stringNumber = number.toString()
        let soma = 0
        for(let i = 0; i < stringNumber.length; i++){
            soma += Number(stringNumber[i])
        }
        return soma
    }
}
console.log(calculaDigitos(digito))
console.log(calculaDigitos(555513))