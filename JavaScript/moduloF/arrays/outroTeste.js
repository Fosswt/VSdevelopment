let array = [1,6,23,776,5,33,9,534,76,11,21,99,323,31]
console.log(array)
console.log(array.sort())
console.log(array)
//for simplificado para percorrer os arrays: 
for(let pos in array){
    console.log(array[pos])
}
console.log("--------------");

//agora fazendo a mesma coisa, só que com laço for NORMAL
for(i = 0; i < array.length; i++){
    console.log(array[i])
}
console.log("--------------")
console.log(array.indexOf(33))
