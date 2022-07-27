const potencia = function (base, expoente) {
    let potencia = 1
    for (let i = 0; i < expoente; i++) {
        potencia *= base 
    }
    return potencia
}

//console.log(potencia(4, 2)) => 16
// console.log(potencia(3, 2)) => 9
// console.log(potencia(5, 2)) => 25
// console.log(potencia(6, 2)) => 36

module.exports = { potencia }