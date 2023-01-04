function palindromeSolver(string){
    let solve = ""
    for(let i = string.length - 1; i >= 0; i --){
        solve += string[i]
    }
    console.log(solve)
    if(solve == string){
        console.log("TRUE ✔, it is a palindrome!")
    }
    else{
        console.log("FALSE ❌, it is not a palindrome!")
    }
}
palindromeSolver('arara')
palindromeSolver("00100")
palindromeSolver("vsiniciusv")