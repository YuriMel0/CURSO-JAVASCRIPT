const produtos = [
    { nome: 'Notebook', preco: '2499', fragil: true}, 
    { nome: 'Ipad', preco: '4499', fragil: true}, 
    { nome: 'Copo de vidro', preco: '12.99', fragil: true}, 
    { nome: 'Copo de plastico', preco: '18.99', fragil: false} 
]

const caro = produto => produto.preco >= 500 
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

console.log(produtos.filter(function(p) {
    return false
}))

// filter: se for true o array resultante recebe o elemento, caso seja false não