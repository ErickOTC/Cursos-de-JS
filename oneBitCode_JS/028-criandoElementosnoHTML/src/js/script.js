/*
* passo a passo
    1- criar o elemento
        * document.createElement()

    2- adicionar conteúdo ao elemento
        * nemElement.innerHTML = "Olá, Mundo!"

    3- adicionar o elemento como um novo nó no DOM
        * element.appendChild(nemElement)
*/

function addTexto() {
    // seleciona a ul
    const ul = document.getElementById('entrada')

    //cria uma li dentro da ul
    const novaLi = document.createElement('li')
    novaLi.className = 'lista-de-itens'
    // novaLi.id = 'item01' 
    novaLi.innerText = 'Nova entrada: '

    //adiciona tags com o js
        //novaLi.innerHTML = '<div>Olá</div>'
    
    //1- criar o elemento
    const novaEntrada = document.createElement('input')
    novaEntrada.Type = 'text' // tipo de texto
    novaEntrada.name = 'entrada' // colocando um name

    //2- adicionar conteúdo ao elemento
    novaLi.appendChild(novaEntrada)
    ul.appendChild(novaLi)

}
