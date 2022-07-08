class Lancamento {
    constructor(nome = 'Generico',  valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento(...lancamentos) {
        lancamentos.forEach((l) => { 
            this.Lancamento.push(l)
        });
    }

    sumario() {
        let valorConsolidado = 0
        this.Lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaLuz = new Lancamento('luz', -220)

const contas = new cicloFinanceiro(6, 2018)
contas.addLancamento(salario, contaLuz)
console.log(contas.sumario())