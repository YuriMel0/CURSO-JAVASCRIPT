// tagged template - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra strnig'
}

const aluno = 'Lu'
const situacao = 'Aprovado'
console.log(tag `${aluno} esta ${situacao}`)