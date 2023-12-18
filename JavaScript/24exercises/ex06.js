//Calculado o fatorial de 10 

function fatorial(number){
    let fat = 1
    for(let i = 1; i < number; i++){
        fat *= i
    }
    return fat
}

console.log(fatorial(10))