const cria = (tam = 10) => {
    const r = []
    while(tam > 0){
        r.push({
            estoque: parseInt(Math.random()*20),
            valor: parseInt(Math.random()*10000)/100
        })
        tam--
    }
    return r
}
const produtos = cria(10)
console.log(produtos)

// 1. Faça um script que retorne os produtos sem estoque
const semEstoque = produtos.filter(es => es.estoque === 0)
console.log(semEstoque)

// 2. Faça um script que retorne os produtos com mais de 15 produtos em estoque
const maisQue5 = produtos.filter(a => a.estoque > 5)
console.log(maisQue5)

// 3. Faça um script que verifique se tem algum produto sem estoque
const AlgumSemEstoque = produtos.some(s => s.estoque === 0)
console.log(AlgumSemEstoque)

// 3. Faça um script que verifique se tem todos os produtos possum pelo menos 2 em estoque
const peloMenos2 = produtos.every(p => p.estoque >= 2)
console.log(peloMenos2)

// 4. Faça um script que diga quanto de valor tem cada produto
const quantoValor = produtos.map(v => (v.estoque*v.valor).toFixed(2))
console.log(quantoValor)

// 5. Calcule o desconto de 30% nos produtos em estoque igual a 19
const resposta = produtos.filter(r => r.estoque === 19).map(p => (p.valor*0.7).toFixed(2))
console.log(resposta)