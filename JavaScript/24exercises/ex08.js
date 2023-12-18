//Calcular a soma dos números impares maiores que 10 e menores que 30 

function calculaSomaDosImparesEntre(num1, num2){

    var soma = 0
    for(let i = num1 + 1; i < num2; i++){
        if(i % 2 != 0){
            soma += i
        }
    }
    return soma;
}

console.log(calculaSomaDosImparesEntre(10, 30))