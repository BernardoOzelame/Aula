// 3) Faça um script que receba 2 números e informe se o primeiro é múltiplo do segundo
const num1 = parseInt(prompt('Entre com um número!'))
const num2 = parseInt(prompt('Entre com outro número!'))

if(num1 % num2 === 0){
    alert('É múltiplo!')
}
else{
    alert('Não é múltiplo!')
}