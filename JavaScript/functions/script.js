// testing some arrow functions 

console.log('testando kk');

var mundial = 'palmeiras'

//funções anônimas, basicamente funções normais só que sem nome. elas são 
//frequentemente usadas quando precisamos passar uma função por argumento para outra função

const soma = function(a, b){
    return a + b
}
console.log(soma(3, 6))

//é a mesma coisa que fazer isso aqui: 
function ssoma(a, b){
    return a + b
}
console.log(ssoma(3, 6))

//ambos ficaram com 4 linhas de código 

//arrow functions fornecem uma sintaxe mais concisa para criar funções. elas são 
//úteis para criar funções pequenas e geralmente são usadas em contextos onde a palavra
//'function' pode ser omitida

const soma1 = (a, b) =>  mundial + (a + b);
console.log(soma1(3, 6))

// as arrow functions têm algumas diferenças importantes em relação às funções tradicionais.
// incluindo o comportamento do valor THIS. elas não têm seu próprio 'this'
// e capturam o this do contexto circundante (onde foram criadas)

/*
Você pode escolher usar funções anônimas ou arrow functions com base na
legibilidade e nos requisitos do seu código. Arrow functions são frequentemente
preferidas quando você precisa de funções simples que retornam um valor único.
Funções anônimas podem ser mais flexíveis em cenários mais complexos.
*/
