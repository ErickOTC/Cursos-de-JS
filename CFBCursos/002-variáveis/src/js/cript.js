'use strict'

//escopo
if (true) {
//consigo usar dentro e fora
var nomeVar = 'Erick T.'

//não consigo usar fora do if
let nomeLet = 'Erick Teodoro'
const nomeConst = 'Erick Teodoro Oliveira Cruz'

console.log(`Var dentro do if ${nomeVar}`)
console.log(`Let dentro do if ${nomeLet}`)
console.log(`Const dentro do if ${nomeConst}`)
}

console.log(`Var fora do if ${nomeVar}`)
//console.log(`Let fora do if ${nomeLet}`) //erro
//console.log(`Const fora do if ${nomeConst}`) //erro

function teste () {
    if (true) {
        //consigo usar dentro e fora
        var nome = 'Erick'

        console.log(`Var dentro do if e da function ${nome}`)
        }
        console.log(`Var fora do if e dentro da function${nome}`)
}

teste ()

//console.log(`Var dentro do if ${nome}`) //erro

// constante, não pode ser alterada
if (true) {
    const username = 'Erick'
    //username = 'Erick Teodoro' //erro
}