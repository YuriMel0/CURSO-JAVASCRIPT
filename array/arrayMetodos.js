const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo elemento do array
pilotos.push('Verstappen') // Adiciona um elemento na ultima posição
pilotos.shift() // Remove o primeiro elemento do array
pilotos.unshift('Hamilton') // Adiciona um elemento na primeira posição do array

console.log(pilotos)

// splice pode adicionar ou remover elementos
// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
// Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Retorna um novo array a partir do indice passado como parametro
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // O indice 4 não entra
console.log(algunsPilotos2)