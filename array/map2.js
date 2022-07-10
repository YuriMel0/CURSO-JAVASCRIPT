const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.99}',
    '{"nome": "Kit de lapis", "preco": 7.99}'

]

// Retornar um array apenas com preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

// O desafio foi pegar um conjuto de dados no formato json, converter para objetos e pegar o preco de cada objeto