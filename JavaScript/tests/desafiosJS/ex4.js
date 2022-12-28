//função que recebe um array de objetos com atributos: itsme, admin e name
function organiza(object){
    for(let i in object){
        console.log(object[i])
    }
}
let data = [
    {itsMe: true, admin: true, name: "Vinicius"},
    {itsMe: false, admin: false, name: "Joaquim"},
    {itsMe: false, admin: true, name: "EasterEgg"},
    {itsMe: false, admin: true, name: "Bia"},
    {itsMe: true, admin: false, name: "Naruto"}
];
organiza(data)