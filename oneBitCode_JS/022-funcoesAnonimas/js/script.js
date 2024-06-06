//funçoes anônimas
//função normal
function somar(a, b) {
    return a + b
}

let operacao = somar;
console.log(operacao(4, 5));
//---------------   ---------------//

//função anônima
operacao = function (a, b) {
    return a - b
}

console.log(operacao(36,12));
//---------------ex01---------------//

//perigo das funções anônimas

olaMundo();
//oiMundo();

function olaMundo() {
    console.log("olá, Mundo!")
}

const oiMundo = function() {
    console.log("oi, Mundo!")
}

olaMundo();
oiMundo();
//---------------   ---------------//