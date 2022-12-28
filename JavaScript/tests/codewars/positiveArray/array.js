function countPositivesSumNegatives(input) {
    // your code here
    let positives = 0
    let negatives = 0
    
    for(let pos in input){
      if(input[pos] == 0){
        
      }
      else if (input[pos] > 0){
        positives ++
      }
      else if (input[pos] < 0){
        negatives ++
      }
      else{
        return input
      }
    }
    console.log(`Positive numbers in the array: ${positives}`)
    console.log(`Negative numbers in the array: ${negatives}`)
  }
  let array = [1, 2 -5, 3 , 0, -4, -10, 76, 32, -51, 89, 12, 11, 10, -32]
  countPositivesSumNegatives(array)