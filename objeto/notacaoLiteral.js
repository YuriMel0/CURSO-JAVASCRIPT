const a = 1
const b = 2
const c = 3

// Primeiro exemplo
const obj1 = {a: a, b: b, c:c}
// Segundo exemplo
const obj2 = {a, b, c}
console.log(obj1, obj2)

// Terceiro exemplo
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

// Quarto exemplo
const obj4 = {[nomeAttr]: valorAttr}

// Quinto exemplo
const obj5 = {
    funcao1: function () {
        // ...
    },
    funcao2() {  // versão mais nova no JavaScript
        //...
    }
}