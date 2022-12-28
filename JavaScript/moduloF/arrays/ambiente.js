let num = [1,6,2,8,4,9,6,4,8,2,1,0]
console.log(`O Array tem exatamente ${num.length} posições.`)
console.log(`O quinto elemento do array é: `+num[4])
console.log(num)
console.log(`Este mesmo array, utilizando a função sort() fica: ${num.sort()}`)
console.log(num)
console.log("Agora vou adicionar um elemento no array")
num.push(6)
console.log(num)
num.pop() // remove um elemento na ultima posição do array.
console.log("imprimindo cada elemento do array, um por um utilizando o laço for: ")
for(i = 0; i < num.length; i++){
    console.log("-----------------------")
    console.log(`Posição ${i}: ${num[i]}`)
}
console.log("--------------------------")
console.log("Fazendo a mesma coisa, porém com laço WHILE")
let var1 = 0
while(var1 < num.length){
    console.log("-----------------------")
    console.log(`Posição ${var1}: ${num[var1]}`)
    var1 ++
}
console.log(num)
let arrayOrdenado = num.sort()
console.log(arrayOrdenado)