// learning how to use filter function in JS
// O método filter() recebe cada elemento do array e aplica uma instrução condicional a ele. Se essa condição for verdadeira, o elemento é colocado no array de resultado. Se for falsa, o elemento não é colocado lá.
// A sintaxe para filter é semelhante a de map, exceto pelo fato de a função de callback retornar apenas true para manter o elemento ou false para descartá-lo. Na função de callback, apenas o elemento é necessário.
const numbers = [12, 41, 515, 51, 22, 24, 67, 87, 78, 98, 12, 23, 14, 16, 17, 26,28,29,30,31]
const evens = numbers.filter(number => number % 2 == 0)
const odds = numbers.filter(number => number % 2 != 0)
console.log(`All numbers: ${numbers}`)
console.log(`All even numbers: ${evens}`)
console.log(`All odd numbers: ${odds}`)

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
const studentsGradesAbove90 = students.filter(x => x.grade >= 90)
const worstStudents = students.filter(x => x.grade < 85)
const worstGrade = Math.min(students.grade)
console.log(studentsGradesAbove90)
console.log(worstStudents)
console.log(worstGrade)

let arrayTreino = [29, 18, 3 ,16,5 ,6 , 7,8 ,2 ,11, 12, 26,13 ,14,15]
function achaMenor(array){
    let menor = array[0]
    for(i in array){
        if(array[i] < menor)
        menor = array[i]
    }
    return menor
}

function achaMaior(array){
    let maior = array[0]
    for(i in array){
        if(array[i] > maior){
            maior = array[i]
            
        }
    }
    return maior
}
// [29, 18, 3 ,16,5 ,6 , 7,8 ,2 ,11, 12, 26,13 ,14,15]
function ordenaAsc(array){
    for(let j = 0; j < array.length; j++){
        let menor = array[j]
        for(i = j; i < array.length; i++){
            if(array[i] < menor){
                let menorzin = menor
                menor = array[i]
                array[i] = menorzin
            }
        }
        array[j] = menor
    }
    return array
}

function ordenaDesc(array){
    for(let i = 0; i < array.length; i++){
        let maior = array[i]
        for(j = i; j < array.length; j++){
            if(array[j] > maior){
                let menorzin = maior
                maior = array[j]
                array[j] = menorzin
            }
        }
        array[j] = maior
    }
    return array
}


console.log(achaMenor(arrayTreino))
console.log(achaMaior(arrayTreino))
console.log(ordenaAsc(arrayTreino))
console.log(ordenaDesc(arrayTreino))
//wtfffffffffffffffffffffffffffffffffffffffff

