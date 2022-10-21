const vetor = [3,4,1,2,5]
console.log(vetor)
console.log("Tamanho do vetor: ", vetor.length)

// Exercícios:
// 0. Faça um script que mostre todos os valores do vetor, um de cada vez.

for(let i = 0; i<vetor.length; i++){
    console.log(vetor[i])
}

// 1. Faça um script que crie um novo vetor igual ao dobro do primeiro. Ex: [2,3,5] => [4,6,10] 

const novo = []
for(let i = 0; i<vetor.length;i++){
    novo[i] = vetor[i]*2
    console.log(novo)
}

// 2. Faça um script que crie um novo vetor somente com os números pares que estão no primeiro.

const pares = []
for(let i = 0, j = 0; i<vetor.length;i++){
    if(vetor[i]%2 === 0){
        pares[j] = vetor[i]
        j++
    }
}

// 3. Faça um script que verifique se todos os elementos de um vetor são pares ou não.
let todosPares = false
let quantidade = 0
for(let i = 0, j = 0; i<vetor.length;i++){
    if(vetor[i]%2 === 0){
        quantidade++
    }
}
if(quantidade === vetor.length){
    todosPares = true
}else{
    todosPares = false
}

// 4. Faça um script que verifique se pelo menos um elemento do vetor é par ou não.

let temPar = false
for(let i = 0; i < vetor.length; i++){
    if(vetor[i]%2 === 0){
        temPar = true
        break
    }
}

// 5. Faça um script que calcule a soma dos números do vetor.

let soma = 0
for(let i = 0; i<vetor.length; i++){
    soma += vetor[i]
}
