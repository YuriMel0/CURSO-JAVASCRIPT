let comparaComThis = function (param) { //Função normal
    console.log(this === param)
}

comparaComThis(global) // This apontando para o global não para referencia da função

const  obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // Não aponta para o global
comparaComThisArrow(module.exports) // Aponta para o modulo corrente

/* O this dentro de uma função normal pode variar para onde aponta (global) dependendo da chamada
   em uma função arrow ele fica restrito a ela, aponta para o modulo corrente*/