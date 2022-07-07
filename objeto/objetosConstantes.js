// pessoa -> endereço de memoria -> {. . .}
const pessoa = { nome: 'João' } 
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- endereço diferente -> {. . .} 
// pessoa = { nome: 'Ana'}

// congela o objeto, não e possivel mais manipular os dados
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa)