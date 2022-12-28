console.log("Hello World!")
let arrayNums = []
function clickei() {
    let num = Number(document.getElementById("inicio").value)
    let result = document.getElementById("colok")
    //fazer verificação se já existe um elemento igual
    if(arrayNums.includes(num)){
        alert("Número já existe no array, insira outro.")
    }
    else{
        arrayNums.push(num)
    }
    console.log(arrayNums)
    result.innerHTML = arrayNums
}
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}
function calculei(){
    let calculo = document.getElementById("result")
    let soma = 0
    for(let i in arrayNums){
        soma += arrayNums[i]
    }
    calculo.innerHTML = `No total, temos ${arrayNums.length} elementos no array.`
    calculo.innerHTML += "<br>"
    calculo.innerHTML += "O maior número informado foi: "+ getMaxOfArray(arrayNums)
    calculo.innerHTML += "<br>"
    calculo.innerHTML += "O menor número informado foi: "+ getMinOfArray(arrayNums)
    calculo.innerHTML += "<br>"
    calculo.innerHTML += "Somando todos os valores, temos: "+ soma

}