function fatorial(numero){
    let fat = 1;
    for(i = numero; i > 1; i--){
        fat = fat * i
    }
    console.log(`${numero}! = ${fat}`)
}
fatorial(6)