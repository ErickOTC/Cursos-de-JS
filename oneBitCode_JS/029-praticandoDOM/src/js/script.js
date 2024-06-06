//adicionando elementos
function addContato() {
    // seleciona a tag pelo id
    const addElementos = document.getElementById('listaDeContatos')

    // cria uma tag h3
    const h3 = document.createElement('h3')

    //escreve dentro da tag
    h3.innerHTML = 'Contato'

    // cria uma tag ul
    const ul = document.createElement('ul')

    //criando o nome
    const nameLi = document.createElement('li')
    nameLi.innerHTML = 'Nome: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    //criando o telefone
    const phoneLi = document.createElement('li')
    phoneLi.innerHTML = 'Telefone: '
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    //criando o telefone
    const enderecoLi = document.createElement('li')
    enderecoLi.innerHTML = '<label for = "endereco">Endereço: </label>'
    const enderecoInput = document.createElement('input')
    enderecoInput.type = 'text'
    enderecoInput.name = 'address'
    enderecoInput.id = 'endereco'
    enderecoLi.appendChild(enderecoInput)
    ul.appendChild(enderecoLi)
    ul.appendChild(document.createElement('br'))

    //colocando o conteudo dentro da section
    listaDeContatos.append(h3, ul)

    /*
    1- maneira
        listaDeContatos.append(h3, ul)
    
    2- maneira   
        listaDeContatos.appendChild(h3)
        listaDeContatos.appendChild(ul)
    */
}

    //excluindo elementos
function removerContato() {
        const listaDeContatos = document.getElementById('listaDeContatos')
        const titulos = document.getElementsByTagName('h3')
        const contatos = document.getElementsByTagName('ul')

        listaDeContatos.removeChild(titulos[titulos.length - 1])
        listaDeContatos.removeChild(contatos[contatos.length - 1])
}