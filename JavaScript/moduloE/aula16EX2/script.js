console.log("Hello World!")
function clickei(){
    let result = document.getElementById("colok")
    let numeroValue = Number(document.getElementById("numero").value)
    let numero = document.getElementById("numero")
    console.log("OIII")
    if(numero.value.length == 0){
        result.innerHTML = "Por favor, digite um número!"
    }
    else{
        for (i = 0; i <= 10; i++){
            result.innerHTML += `${numeroValue} X ${i} = ${numeroValue*i}`
            result.innerHTML += "<br>"
        }
        result.innerHTML += typeof(numero)
        result.innerHTML += typeof(numeroValue)
        result.innerHTML += numeroValue
    }
}
function zerei(){
    let result = document.getElementById("colok")
    result.innerHTML = null
}