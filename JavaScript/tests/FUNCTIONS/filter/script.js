const frutinhas = [
    { name: "banana", cor: "amarela"},
    { name: "maça", cor: "vermelha"},
    { name: "Abacaxi", cor: "amarela"},
    { name: "kiwi", cor: "marrom"},
  ]

  const cores = [
    {name:"amarela", rgb:"x"},
    {name:"vermelha", rgb:"y"},
    {name:"marrom", rgb:"z"},
    {name:"branco", rgb:"#ffffff"},
    {name:"preto", rgb:"#000000"}
  ]

  //frutinhas na posição 0 é amarela?
  const ehAmarela = frutinhas[0].cor=='amarela'
  console.log("frutinha0 é amaeral? " + (ehAmarela ? 'Sim': 'Não'))


  //filter raiz
  let filtrados = [];
  for(let cor of cores){
    for(let fruta of frutinhas){
      if(fruta.cor == cor.name){
        filtrados.push(cor)
        break;
      }
    }
  }
  console.log(filtrados);


  //filter: pega uma lista e retorna somente o que for verdadeiro
  let _filtrados = cores.filter((cor) => frutinhas.some(fruta => fruta.cor == cor.name))
  console.log(_filtrados)

  const soAmarelas = frutinhas.filter(x => x.cor == 'amarela')
  console.log(soAmarelas)

  //função some retona um booleano dependendo da condição criada dentro do método. Executa a função callback uma vez para cada elemento dentro do array até achar um onde o callback retorne true.

let arrayFrutas = ['mamao', 'goiaba', 'banana', 'maça', 'laranja', 'pera', 'melancia']
console.log(arrayFrutas.some(elem => elem == 'melao'))
function verificaSeTem(array, fruta){
    let tem = array.some(elem => elem == fruta)
    if(tem){
        console.log('Temos '+fruta+'!!!')
    }
    else{
        console.log('Não temos nenhuma fruta com o nome '+fruta+'.')
    }
}
verificaSeTem(arrayFrutas, 'mamao')
verificaSeTem(arrayFrutas, 'toranja')

//entendendo arrow functions:
//primeiro fazendo do jeito normal: 
function isBiggerThan10(element){
    return element > 10;
}
console.log([2, 5, 8, 1, 4].some(isBiggerThan10));
console.log([12, 5, 8, 1, 4].some(isBiggerThan10));

//tstando novamente mas agora com arrow function: 
console.log([2, 5, 8, 1, 4].some(x => x > 10))
console.log([12, 5, 8, 1, 4].some(x => x > 10))
console.log([12, 5, 8, 1, 4].filter(x => x > 10))

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];
for(let i = 0; i < nomes.length; i ++){
    console.log('Nome: '+nomes[i])
}
console.log('==========================')
nomes.forEach(x => console.log('Name: '+x))
console.log('==========================')
nomes.map(x => console.log('Nome: '+x))
//podemos ver que essas funções acima fazem a mesma coisa.

//implementando o forEach =>
function nossoForEach(arr, funcao){
    for(let i = 0; i < arr.length; i ++){
        funcao(arr[i], i)
    }
}
nossoForEach(['nome', 'nome2'], function(nome, indice) {
    console.log(nome, indice)
})

//sempre que formos fazer um loop for, vale mais a pena usar o forEach, pois ele elimina a carga mental de ter que lidar com as variáveis de controle e por consequência pode ajudar a deixar o código mais fácil de ler, levando em conta que essa é uma forma super usada no mundo JS.

//vimos que o map e o foreach parecem fazer a mesma coisa, porém a diferença vem quando analisamos o retorno do que sai delas.

//enquanto o foreach foi feito para ser uma alternativa ao loop for, o map foi feito para fazermos operações de transformação no array.
//for example, quero printar na tela o array de nomes mas todos em letra maiuscula, sem alterar o array original.
const nomesMaiusculo = nomes.map(x => x.toUpperCase())
console.log(nomesMaiusculo)
let arrayNums = [62,	 17,	 97,	 35,	 50,	 67,	 36,	 55,	 51,	 97,
69,	 32,	 51,	 55,	 50,	 59,	 50,	 59,	  9,	 48,
    57,	 52,	 32,	 59,	 42,	 55,	 44,	 73,	 35,	 61,
    66,	 51,	 41,	 94,	  5,	 26,	 56,	 79,	 80,	 23,
    29,	 74,	 36,	 21,	  2,	 26,	 11,	 52,	 76,	 34]
//bora achar todos os numeros pares desse array de 50 numeros aleatorios
let pares = arrayNums.filter(x=> x % 2 == 0)
let ímpares = arrayNums.filter(x=> x % 2 != 0)
console.log(pares)
console.log(`Temos exatamente ${pares.length} numeros pares no array com 50 numeros, ou seja, ${(pares.length/arrayNums.length)*100}% do array é par!}`)
console.log(`Temos exatamente ${ímpares.length} numeros ímpares no array com 50 numeros, ou seja, ${(ímpares.length/arrayNums.length)*100}% do array é ímpar!}`)

//agora vamos criar alguns objetos com base no TPM

let configs = []


//   private servers_req = this.rb.create.get({
//     resource: this.SERVER_URL,
//     events:{
//       error: (err) => this.notify.error(err || SERVERS_LIST_ERR, TITLE_ERROR),
//       data: (res: Server[]) => {
//         this.servers = res.filter(server => this.softwares.some(software => server.ID == software.Server_ID))
//       }
//     }
//   })

