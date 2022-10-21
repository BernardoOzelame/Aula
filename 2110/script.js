// MANEIRAS DE CRIAR FUNÇÕES:
// function(){

// }
// 
// OU
// 
// ()=>{}
// => é igual a retorn

// ---------------------------------------------------------------------------------------------------------------

const valores = [2,3,4,5,6,7];

// MAP --> resposta tem o mesmo número de entrada
const novo = valores.map(function(valor,posicao,vetor){
    console.log(valor,posicao,vetor)
    // retorn 'R$ ' + valor.toFixed(2)
    return valor*2
})
console.log(valores, novo)

// const novo = valores.map(v=>v*2)
// console.log(valores, novo)

// ---------------------------------------------------------------------------------------------------------------

// FILTER --> não modifica a saída, mas diminui o tamanho do vetor (pega um subconjunto)
const novo2 = valores.filter(function(valor){
    return valor%2 === 0
})
console.log(valores, novo2)

// const novo2 = valores.filter(valor => valor%2 === 0)
// console.log(valores, novo2)

// ---------------------------------------------------------------------------------------------------------------

// EVERY --> E lógico (V e V e V)
const todosPares = valores.filter(function(valor){
    return valor%2 === 0
})
console.log(valores, todosPares)

// const todosPares = valores.filter(valor => valor%2 === 0)
// console.log(valores, todosPares)

// SOME --> OU lógico (V ou V ou F)
const algumPar = valores.some(valor => valor % 2 === 0)
console.log(valores, algumPar)