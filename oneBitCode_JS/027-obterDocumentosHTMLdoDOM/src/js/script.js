
/*
* Obtendo elementos HTML do DOM
    * Obter vários elementos em uma HTMLCollection
        * document.getElementByTagName()
        * document.getElementByClassName()

    * Obter vários elementos em uma NodeList
        * document.getElementByName()
        * document.querySelectorAll()

    * Obtendo um único elemento
        * document.getElementById()
        * document.querySelector()
*/

function show() {
    // Obtendo um único elemento
    console.log("Obtendo um único elemento")

    const listaDeContatos = document.getElementById('lista-de-contatos')
    console.log(listaDeContatos)

    const primeiroContato = document.querySelector('#lista-de-contatos > li > label')
    console.log(primeiroContato)


    // Obter vários elementos em uma HTMLCollection
    console.log("Obter vários elementos em uma HTMLCollection")

    const listaDeElementos = document.getElementsByTagName('li')
    console.log(listaDeElementos)

    const contatosDeEntrada = document.getElementsByClassName('Contato-de-entrada')
    console.log(contatosDeEntrada)

    // Obter vários elementos em uma NodeList
    console.log("Obter vários elementos em uma NodeList")

    const contatos = document.querySelectorAll('.Contato-de-entrada')
    console.log(contatos)

    const label = document.querySelectorAll('#lista-de-contatos > li > label')
    console.log(label)

    const contato01 = document.getElementsByName('contato01')
    console.log(contato01)

    const contato02 = document.getElementsByName('contato02')
    console.log(contato02)
    
    const contato03 = document.getElementsByName('contato03')
    console.log(contato03)

}

