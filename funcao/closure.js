// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variaveis externas a função

// Contexo lexico em ação!

const x = 'Global'

function fora() { // Ela vai pegar o 'Global' mas não é ela que estamos retornando e sim a de dentro
    const x = 'Local'
    function dentro() { // A função procura a variavel mais proxima dela no caso 'Local'
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())