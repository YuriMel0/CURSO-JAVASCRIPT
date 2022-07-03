let dobro = function (a) { //Sintax padrão
    return 2 * a
}

dobro = (a) => { // Sintax arrow
    return 2 * a
}

dobro = a => 2 * a // Sintax arrow reduzida
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Ola' 
ola = _ => 'Ola' // Possui um parametro mas ele é ignorado
console.log(ola())