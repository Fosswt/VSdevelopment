//learning how to use map function in Js
// função map é usado para criar um novo array a partir de um array existente, aplicando uma mesma função a cada um dos elementos do array inicial.

const numbers = [2, 4 ,5 ,7 ,8 ,12, 22]
const doubled = numbers.map(x=>x*2)
console.log(doubled)

const names = ['Vinicius', 'Pedrin', 'Evelina', 'Vitao', 'Krups', 'Edu', 'Cury']
const presentation =  names.map(names => `My name is ${names}`)
console.log(names)
console.log(presentation)

function sayMyName(name){
    return 'Say my name: '+name;
}

console.log(names.map(sayMyName))

const allNumbers = [12, 41, 515, 51, 22, 24, 67, 87, 78, 98, 12, 23, 14, 16, 17, 26,28,29,30,31]
//just remember, odd is ÍMPAR and even is PAR 
const allEvenNumbers = allNumbers.map(x=>{
    if (x % 2 == 0){
        return x
    }
})
const allOddNumbers = allNumbers.map(x=>{
    if (x % 2 != 0){
        return x
    }
})
console.log(`All numbers : ${allNumbers}`)
console.log(`All Even numbers : ${allEvenNumbers}`)
console.log(`All Odd numbers : ${allOddNumbers}`)

const AllNumbersSum = allNumbers.map(x=>{
    
})
