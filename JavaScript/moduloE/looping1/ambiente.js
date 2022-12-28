console.log("Tudo bem?")
console.log("Tudo bem?")
console.log("Tudo bem?")
console.log("Tudo bem?")
console.log("Tudo bem?")
console.log("Tudo bem?")
function linhas(){
    console.log("-----------")
}
linhas()
for (i = 1; i <= 6; i++){
    console.log("Tudo bem?") //mt mais facil slk menor
}
linhas()
var c = 1
while (c <= 6){
    console.log("Tudo bem?")
    c++
}
linhas()
// let b = 0
// while (b < 100){
//     let c = b + 1
//     while(c < 10){
//         console.log("oii")
//         b++
//         c++
//     }
//     console.log("ACABOU")
//     b++
// }
let number = 0  //basicamente estrutura de repetição com teste lógico no final, ao invés de teste no início (while normal)
do {
    console.log("dowhile = " + number)
    number++
} while (number <= 10);
