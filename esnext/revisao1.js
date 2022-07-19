// let e const
{
    var a = 2
    let b = 3
    console.log(b) // escopo de bloco
}
console.log(a) // escopo global

// template string
const produto = 'IPad'
console.log(`${produto} e caro`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'ana', idade: 9}
console.log(i, nome)