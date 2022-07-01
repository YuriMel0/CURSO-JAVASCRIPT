function tratarError(erro) {
    throw new Error('mensagem de erro');
    // throw 10
    // throw 'mensagem qualquer'
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e){
        tratarErrorElancar(e);
    } finally {
        console.log('final');;
    }
}

const obj = {name: 'Yuri'};
imprimirNomeGritando(obj);