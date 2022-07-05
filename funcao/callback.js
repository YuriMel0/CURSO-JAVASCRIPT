const fabricantes = ['Mercedes', 'Audi', 'BMW', 'Chevrolet', 'Volskswagen', 'Aston Martin', 'Jaguar']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
