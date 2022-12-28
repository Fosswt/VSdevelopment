
function clickei(num){    
    var a = document.getElementById("result")
    if(a.innerHTML == "0"){
        a.innerHTML = null
    }
    a.innerHTML += num
}
function ac(){
    var a = document.getElementById("result")
    a.innerHTML = 0
}
function somar(){
    var a = document.getElementById("result").innerText
    let num1 = Number(a) //num1 foi salvo na memória
    document.getElementById("result").innerText += "+"
    a.innerText = num1
    if(a.charAt(a.length-1) == "+"){
        document.getElementById("result").innerText = a
    }
}
function subtrair(){
    var a = document.getElementById("result").innerText
    let num1 = Number(a) //num1 foi salvo na memória
    document.getElementById("result").innerText += "-"
    a.innerText = num1
    if(a.charAt(a.length-1) == "-"){
        document.getElementById("result").innerText = a
    }

}
function dividir(){
    var a = document.getElementById("result").innerText
    let num1 = Number(a) //num1 foi salvo na memória
    document.getElementById("result").innerText += "/"
    a.innerText = num1
    if(a.charAt(a.length-1) == "/"){
        document.getElementById("result").innerText = a
    }
}

function multi(){
    var a = document.getElementById("result").innerText
    let num1 = Number(a) //num1 foi salvo na memória
    document.getElementById("result").innerText += "*"
    a.innerText = num1
    if(a.charAt(a.length-1) == "*"){
        document.getElementById("result").innerText = a
    }

}

function confirma(){
    document.getElementById("result").innerHTML = eval(document.getElementById("result").innerHTML)
}
function porcentagem(){
    var a = document.getElementById("result").innerText
    let num1 = Number(a)
    document.getElementById("result").innerText = num1/100
}
function maisMenos(){
    var a = document.getElementById("result").innerText
    let num1 = Number(a)
    document.getElementById("result").innerText = -num1
}
function ponto(){
    var a = document.getElementById("result").innerText
    document.getElementById("result").innerText += "."
    if(a.charAt(a.length-1) == "."){
        document.getElementById("result").innerText = a
    }
}