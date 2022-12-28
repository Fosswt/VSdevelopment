//uma função que receba um objeto (de atributo nome, sobrenome e idade) e delete alguem deles, caso esteja vazio (null)
function faxina(objeto){
    for(let i in objeto){
        if(objeto[i] == "" || objeto[i] == null){
            console.log('fuck you dude')
            delete objeto[i]
        }
    }
    return objeto
}

let myObject = {
    "name": "vinicius",
    "surname": "",
    "age": 19
}

console.log(faxina(myObject))
console.log("-------------")

