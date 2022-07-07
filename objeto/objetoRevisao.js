// coleção dinamica de pares chave / valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220
console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    propietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 49
    }],
    calcularValorSeguro: function () {
        // . . .
    }
}

carro.propietario.endereco.numero = 1000
carro['propietario']['endereco']['logradouro'] = 'Avenida gigante'
console.log(carro)

delete carro.condutores
delete carro.propietario.endereco
delete carro.calcularValorSeguro
console.log(carro)