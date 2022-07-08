//Object.preventExtensions
const produto = Object.preventExtensions({ //pode alterar os dados criados as não dexia mudar os atributos (adicionar)
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa) //selando o objeto, não permite adicionar nem excluir atributos mas permite modificalos
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado e imutavel
// exemplo em aula sobre objetos constantes