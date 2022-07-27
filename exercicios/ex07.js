const baskara = function (a, b, c) {
    let delta = ((b ** 2) - 4 * (a * c))
    if (delta < 0) {
        return console.log('O delta é negativo')
    } else {
        let raiz1 = ((-1 * b) + Math.sqrt(delta)) / (2 * a)
        let raiz2 = ((-1 * b) - Math.sqrt(delta)) / (2 * a)
        let raizes = [raiz1, raiz2]
        return raizes
    }
}

console.log(baskara(4, 2, -6))