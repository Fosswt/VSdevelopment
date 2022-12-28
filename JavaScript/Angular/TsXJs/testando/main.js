var meuNome = "Vinicius Augusto";
function minhaFunc(meuNome) {
    console.log("Ol\u00E1, meu nome \u00E9 ".concat(meuNome, "!"));
}
minhaFunc(meuNome);
function soma(x, y) {
    return x + y;
}
var numeros = [1, 2, 3];
numeros.map(function (v) {
    valor =  v * 2;
    console.log(valor)
});
