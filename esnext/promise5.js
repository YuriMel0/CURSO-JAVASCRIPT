function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('tempo')
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro menor')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('testando', 0.5)
    .then(valor => console.log(`valor: ${valor}`))
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))