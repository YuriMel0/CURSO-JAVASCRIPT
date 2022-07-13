const contadorA = require('./instanciaUnica') // A e B fazem uso da mesma instancia então tudo que for modificado em A vai ser modificado em B
const contadorB = require('./instanciaUnica')

const contandorC = require('./instanciaNova')() // usa o padrao factory para criar uma nova instancia para cada require sem alterar o outro 
const contandorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log(contadorA.valor, contadorB.valor)

contandorC.inc()
contandorC.inc()

console.log(contandorC.valor, contandorD.valor)
