// toFixed()
// replace()

const formataNumero = function (numero) {
    let numeroNovo = numero.toFixed(2).replace('.', ',')
    return `R$ ${numeroNovo}`
}

console.log(formataNumero(0.30000000000000000000004))