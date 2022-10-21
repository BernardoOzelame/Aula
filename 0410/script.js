// VARIÁVEIS: 
// var | let | const 
//
// var: pode ser acessada em qualquer lugar do script; escopo global
// let: vai existir somente onde foi definida(criada); escopo local
// const: o conteúdo não sofrerá nenhuma modificação/ alteração
//
// --------------------------------------------------------------------
//
// TIPOS DE VARIÁVEIS:
// int | float | string | boolean | null | undefined | array | object
// int: inteiro
// float: números com vírgula (utiliza-se .)
// string: texto (utiliza-se ' ' | " " | ` `)
// boolean: true | false
// null: tem valor NULO atribuído
// undefined: não tem valor atribuído
// array: vetor
// object: objeto

var nome
nome = 'Bernardo'

if(true){
    let nome = 'Outro'
    console.log(nome)
}

console.log(nome)

let primeiroNome, ultimoNome
primeiroNome = "Bernardo"
ultimoNome = "Spoltti"

let nomeCompleto = primeiroNome + ' ' + ultimoNome
//TEMPLATE STRING:
// concatenação: unir duas ou + string's
let nomeCompleto2 = `${primeiroNome} ${ultimoNome}`
let caracteres  = `A palavra ${primeiroNome} tem ${primeiroNome.length} caracteres.`

// Exemplos de atribuição de variáveis
let produto = "Arroz"
let quantidade = 2
let preco = 4.59
let temEstoque = true

// Expressões aritméticas: soma, subtração, multiplicação, divisão, etc.
// Exemplos de expressões aritméticas:
var x = 3 + 4 *(4 + 5) / 2
var x = 3 + 4 * 9 / 2
var x = 3 + 36 / 2
var x = 3 + 18
var x = 21

// Expressões lógicas: o resultado SEMPRE será um valor LÓGICO.
// Os operandos de uma expressão lógica podem ser números (operadores relacionais) ou valores lógicos (operadores lógicos).