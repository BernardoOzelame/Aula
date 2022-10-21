// ESTRUTURAS CONDICIONAIS:
// Uma estrutura condicional é utilizada quando um comando ou um bloco de comandos
// dependem de determinada condição para ser executado.
//
// Essa condição DEVE SER sempre uma expressão lógica com operadores relacionais e/ou lógicos.
//
// Sintaxe
// if(condição){

// }

const n = 2;
if(n % 2 === 0){
    console.log('É par')
}else{
    console.log('É ímpar')
}

const resultado = 3 > 5
if(resultado){
    console.log('3 é menor que 5')
}else{
    console.log('3 é maior que 5')
}

// OPERADORES LÓGICOS:
// && --> todos os operandos precisam ser verdadeiros;
// || --> pelo menos um operando precisa ser verdadeiro;
// ! (negação) --> inverte o valor do operando.

let x = 15
if(x % 2 === 0){
    console.log(`A metade de ${x} é um número inteiro.`)
}

const precoOriginal = parseFloat(prompt('Digite o preço original do produto:'))
const precoAtual = parseFloat(prompt('Digite o preço atual do produto:'))

if(precoAtual <= (precoOriginal * 0.9)){
    alert('O desconto é bom!')
}else{
    alert('O desconto não é bom!')
}