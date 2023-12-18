//Soma dos números de 1 a 10 

function somaTotalDosNumeros(num1, num2){
    //soma todos os numeros de num1 a num2
    var soma = 0;
    for(let i = num1; i <= num2; i++){
        soma += i
    }
    return soma
}
console.log(somaTotalDosNumeros(1, 100))