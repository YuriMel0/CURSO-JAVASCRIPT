const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa) // bind tirando o This do global e apontando para o obj pessoa e sua funcao
falarDePessoa()

/*bind: faz o This apontar para o objeto pessoa e sua respectiva função,
  por padrão ele aponta para o global */