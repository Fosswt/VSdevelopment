function isPalindrome(string){
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
isPalindrome('arara')
isPalindrome("00100")
isPalindrome("vsiniciusv")