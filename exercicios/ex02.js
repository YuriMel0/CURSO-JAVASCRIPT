const formaTriangulo = function (lado1 = 1, lado2 = 1, lado3 = 1) {
    // Nesse exemplo não deve ser considerado a codição de existencia de um triangulo!
    if (lado1 === lado2 && lado2 === lado3) {
        return 'Triangulo Equilátero'
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        return 'Triangulo Isóceles'
    } else {
        return 'Triangulo Escaleno'
    }
}

console.log(formaTriangulo(1, 2, 3))
// Escaleno
console.log(formaTriangulo(2, 2, 3))
// Isóceles
console.log(formaTriangulo(3, 3, 3))
// Equilátero