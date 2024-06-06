//cria label
function criarLabel (texto, formulario){
    const label = document.createElement('label')
    label.formulario = formulario
    label.innerHTML = texto
    return label
}

//cria input
function criarInput (id, value, name, type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

// pegao o botão adicionar tecnologia
const adicionarTecnologia = document.getElementById('adicionarTecnologia')

//pega o formulário
const fomularioDeDevs = document.getElementById('fomularioDeDevs')

//desenvolvedores
const developers = []

let linhasDeInputs = 0

//adciona tecnologias
adicionarTecnologia.addEventListener('click', function (evento){
    const ListaDetecnologias = document.getElementById('ListaDetecnologias')

    const novaLi = document.createElement('li')
    const colunaInicial = linhasDeInputs
    linhasDeInputs++
    novaLi.id = 'linhasDeInputs' + colunaInicial
    novaLi.className = 'linhasDeInputs'

    const nomeDaTecnologiaLabel = criarLabel('Nome: ', 'tecnologia' + colunaInicial)
    const nomeDaTecnologiaInput = criarInput('tecnologia' + colunaInicial, null, 'tecnologia' )

    //acrescentar filhos
    novaLi.append(
        nomeDaTecnologiaLabel, nomeDaTecnologiaInput
    )

    ListaDetecnologias.appendChild(novaLi)
})