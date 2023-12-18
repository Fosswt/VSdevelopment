let array = [12, 31, 312, 313, 134, 312, 22, 44, 55, 66, 77, 88, 99, 21, 22, 331, 341, 516,637, 846]
let soma = 0
for(let i = 0; i < array.length; i ++){
    soma = soma + array[i]
}
console.log(soma)
let soma2 = array[0]
for(let i = 1; i < array.length; i ++){
    soma2 = soma2 + array[i]
}
console.log(soma2)

//alteramos a complexidade do algoritmo de f(n) = n para f(n) = n - 1 