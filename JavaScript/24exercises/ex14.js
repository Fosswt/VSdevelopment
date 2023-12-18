//Imprimir os 10 primeiros números da sequência de Fibonacci sem usar recursividade 

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function fibonacci(idx){
    let num1 = 0;
    let num2 = 1;
    let soma = 0
    let array = []
    for(let i = 0; i < idx; i++){
        array.push(soma)
        soma = num1 + num2;
        num1 = num2;
        num2 = soma
    }
    return array
}

console.log(fibonacci(10))