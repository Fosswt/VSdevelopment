console.log("Hello World!")
function clickei() {
    let varInicio = Number(document.getElementById("inicio").value)
    let varFim = Number(document.getElementById("fim").value)
    let varPasso = Number(document.getElementById("passo").value)

    let resp = document.getElementById("colok")
    resp.innerHTML = "Contando: "
    if(varInicio == null || varFim == null || varPasso == null){
        resp.innerHTML = "Impossível contar. Por favor, preencha todos os campos!"
    }
    else if(varFim < varInicio){
        resp.innerHTML = "Impossível contar. Por favor, preencha todos os campos corretamente!"
    }
    else{
        for(varInicio; varInicio <= varFim; varInicio += varPasso){
            resp.innerHTML += varInicio + "👉"
        }
        resp.innerHTML += "🚩"
    }
    
}
function zerei(){
    let varInicio = (document.getElementById("inicio"))
    let varFim = (document.getElementById("fim"))
    let varPasso = (document.getElementById("passo"))

    varInicio.innerText = ""
    varFim.innerText = ""
    varPasso.innerText = ""
}