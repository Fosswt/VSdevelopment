let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 111, 112, -124, -424, 122]
function findGreater(array){
    let greater = array[0];
    for(let pos in array){
        if(array[pos] > greater){
            greater = array[pos]
        }
    }
    console.log(`The greater element in the array is: ${greater}`)
}
function findSmaller(array){
    let smaller = array[0];
    for(let pos in array){
        if(array[pos] < smaller){
            smaller = array[pos]
        }
    }
    console.log(`The greater element in the array is: ${smaller}`)
}
findGreater(array)
findSmaller(array)