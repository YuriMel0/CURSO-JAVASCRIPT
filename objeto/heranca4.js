function MeuObjeto () { }
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anonimo' 
MeuObjeto.prototype.falar = function () { 
    console.log(`Bom dia meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'yuri'
obj2.falar()

const obj3 = { }
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

// Resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // referencia nula pois é a ultima 



/*conceito de prototipo: que é usado para criar a ideia de herança em Js, vai percorrendo o prototipo pela arvore
  conceito de prototype: e um atributo da função, toda função tem esse atributo
  conceito de __proto__: é como um objeto refecencia seu prototipo, podemos usar pra comparar entre os objetos*/

// quando criamos um objeto a partir de uma função o prototipo dele aponta pra função .prototype