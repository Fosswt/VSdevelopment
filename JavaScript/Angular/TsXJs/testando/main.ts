let meuNome = "Vinicius Augusto"

function minhaFunc(meuNome){
    console.log(`Olá, meu nome é ${meuNome}!`)
}
minhaFunc(meuNome)
function soma(x,y){
    return x+y
}
var numeros = [1, 2 ,3 ];
numeros.map(function(v){
    return v*2
})
//arrow functions 
var numeros = [1, 2 ,3 ];
numeros.map(v => {
    return v*2
})