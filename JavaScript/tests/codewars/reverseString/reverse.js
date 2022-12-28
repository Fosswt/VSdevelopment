function reverseString(str) {
    let arrayStr = []
    let invertedArray = []
    for(let i = 0; i < str.length; i++){
        arrayStr += str.charAt(i)
        console.log(arrayStr[i])
    }
    console.log("-------------")
    for(let c = str.length - 1; c >= 0; c--){
        invertedArray += arrayStr[c]       
    }
    let normalString = arrayStr.toString()
    let invertedString = invertedArray.toString()
    console.log(`The normal string is: ${normalString}!`)
    console.log(`The inverted string is: ${invertedString}!`)
}
reverseString("vinicius")
//easy way to do that
function revertString(str){
    let finalString = ""
    for (let i = str.length - 1; i >= 0; i--){
        finalString += str[i]
    }  
    console.log(finalString)
}
revertString("jonasbrothers")