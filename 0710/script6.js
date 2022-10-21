// Faça um script que receba um número real e informe a resposta baseado na seguinte função:
//        { 1, se x menor ou igual a 1
// f(x) = { 2, se x maior que 1 e menor ou igual a 2
//        { x², se x maior que 2 e menor ou igual a 3
//        { x³, se x maior que 3

const x = parseFloat(prompt('Entre com um número!'))

if(x <= 1){
    alert('Resposta: f(x) = 1')
}
else if(x <= 2){
    alert('Resposta: f(x) = 2')
}
else if(x <= 3){
    alert('Resposta: f(x) = ' + x*x)
}
else{
    alert('Resposta: f(x) = ' + x*x*x)
}