function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Phocophone 2', 1500.49))
console.log(criarProduto('Iphone X', 2999.49))
console.log(criarProduto('Redmi 8', 1300.49))