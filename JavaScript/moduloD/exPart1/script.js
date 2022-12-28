function clickei(){
    let anotxt = window.document.getElementById('nascimento')
    anoNasc = anotxt.value
    var data = new Date()
    let ano = data.getFullYear
    var qtsAnos = ano - anoNasc
    var a = window.document.getElementById("colok")
    a.innerHTML = ("Você tem "+qtsAnos+" anos de idade.")
    if(qtsAnos >= 0 && qtsAnos <= 16){
        alert("Criança")
    }
    else if(qtsAnos >= 18 && qtsAnos <= 30){
        alert("Adolescente")
    }
    else if(qtsAnos > 30 && qtsAnos < 50){
        alert("Adulto")
    }
    else if(qtsAnos < 150){
        alert("Idoso")
    }
    else{
        alert("Ano de Nascimento inválido.")
    }
}