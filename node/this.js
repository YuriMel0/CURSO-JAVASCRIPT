console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports) // false
    console.log(this == global) // true
}

logThis()

// This dentro de um modulo aponta para module.exports
// This dentro de uma função aponta para o global