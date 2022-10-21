// ESTRUTURAS DE REPETIÇÃO
// 
// WHILE
// Essa estrutura tem zero ou mais interações;
// Precisa criar uma variável para controlar as interações;
// As interações terminam quando a condição se tornar falsa
// As interações também podem terminar com o comando break.
//
// SINTAXE:
//
// while(condição){ // A condição DEVE seru uma expressão lógica.
//     comandos   
// }
//
// 1. Faça um script que receba um número inteiro positivo e 
// mostre todos os números inteiros positivos menores que ele. 
//
// 2. Acrescente no exercício anterior para solicitar um número
// enquanto o usuário não informar um número positivo
//
// 3. Caso não exista números positivos menores que o informado
// pelo usuário, deve-se mostrar a mensagem: "Não existem números menores que o informado.".

// let num = 0
// let contador = 1

// while(num < 1){
//     num = parseInt(prompt('ENTRE COM UM NÚMERO POSITIVO!'))
// }
// while(contador < num){
//     console.log(contador)
//     contador++
// }
// if(num === 1){
//     console.log("Não existem números menores que o informado.")
// }

// FOR
// Possui um bloco de inicialização (executado apenas uma vez);
// Os comandos são executados enquanto a condição seja verdadeira;
// O bloco de incremento é executado sempre depois dos comandos.
//
// SINTAXE:
//
// for(inicialzação; condição; incremento){
//   comandos
// }
// let num = 0
// let contador = 1

// for(; num < 1;){
//     num = parseInt(prompt('ENTRE COM UM NÚMERO POSITIVO!'))
// }
// for(; contador < num; contador++){
//     console.log(contador)
// }
// if(num === 1){
//     console.log("Não existem números menores que o informado.")
// }

let num = parseInt(prompt('ENTRE COM UM NÚMERO POSITIVO!'))
let metade = parseInt(n/2)


