// Tipo do array
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// Busca por indice
aptovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

// Adcionando elemento por indice e função
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Yuri'
console.log(aprovados)

// Ordenando o array
aprovados.sort()
console.log(aprovados)

// Deletando um elemento por indice
delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
// Deletando e adicionando um elemento
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)