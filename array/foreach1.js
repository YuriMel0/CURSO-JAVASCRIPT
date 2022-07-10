const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function (nome, indice) { // Percorre o array, para cada elemento ele chama a função e faz a impressão
    console.log(`${indice + 1}: ${nome}`)
})

// Segundo metodo para fazer isso
aprovados.forEach(nome => console.log(nome))

// Criando uma função auxiliar
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)