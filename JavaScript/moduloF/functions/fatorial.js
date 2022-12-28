function fatorial(num){
    let fat = 1
    for(i = num; i > 1; i--){
        fat = fat*i
    }
    console.log(`${num}! = ${fat}`);
}
fatorial(9)
function calculaFatorial(numero){   
    let fa = 1
    for(c = numero; c > 1; c--){
        fa *= c
    }
    console.log(`${numero}! = ${fa}`);
}
calculaFatorial(5)
//usando recursividade
function fatorialRecursivo(numero){
    if(numero == 1){
        return 1
    }
    else{
        return numero * fatorialRecursivo(numero-1)
    }
}
//de forma recursiva: 5! = 5 x 4!
//n! = n x (n-1)!
console.log(fatorialRecursivo(5))