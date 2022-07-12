const operacoes = function(num1, num2) {
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
    console.log(`${num1} - ${num2} = ${num1 - num2}`)
    console.log(`${num1} x ${num2} = ${num1 * num2}`)
    console.log(`${num1} / ${num2} = ${num1 / num2}`)
}

operacoes(1, 2)
// OUTPUT: [3, -1, 2, 0.5] Funcionando!
operacoes(5, 5)
// OUTPUT: [10, 0, 25, 1] Funcionando!