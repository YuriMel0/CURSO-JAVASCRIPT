// AULA IMPORTANTE PARA BD!!!

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Pega as chaves de um objeto
//[ 'nome', 'idade', 'peso' ]

console.log(Object.values(pessoa)) // Pega os valores de um objeto
//[ 'Rebeca', 2, 13 ]

console.log(Object.entries(pessoa)) // retorna um array de chave valor
//"[ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]"

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

// Object.assing (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // Concatena os atributos de todos os metodos no primeiro, nesse caso 'dest'
Object.freeze(obj)
console.log(obj)