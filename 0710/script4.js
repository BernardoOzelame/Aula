// 4) Faça um script que receba o salário de um funcionário e o valor da parcela que ele deseja conseguir.
//    Informe se ele tem esse valor disponível. Regra: o valor da parcela não pode ultrapassar 25% do seu salário.

const salario = parseFloat(prompt('Digite o salário!'))
const parcela = parseFloat(prompt('Valor da parcela!'))

if(salario * 0.25 >= parcela){
    alert('Valor válido!')
}
else{
    alert('Valor inválido!')
}