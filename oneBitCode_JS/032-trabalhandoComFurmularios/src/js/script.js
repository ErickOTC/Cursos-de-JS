//pega informação do formulário com id
const formulario = document.getElementById('formulario')

//cria um evento
formulario.addEventListener('submit', function (event){
    //inpedir que a pagina atualize
    event.preventDefault()

    //pegando informação com query selector
    //nome
    const nome = document.querySelector('input[name = "nome"]').value

    //endereço
    const address = document.querySelector('input[name = "endereco"]').value

    //pão
    const tipoDePao = document.querySelector('select[name = "tipoDePao"]').value

    //hamburguer
    const principal = document.querySelector('input[name = "Principal"]').value

    //observação
    const observacao = document.querySelector('textarea[name = "observacao"]').value

    let queijo = ''
    document.querySelectorAll('input[name ="queijo"]:Checked').forEach(function (item){
        queijo += '\n' + ' - ' + item.value
    })

    let salada = ''
    document.querySelectorAll('input[name ="salada"]:Checked').forEach(function (item){
        salada += '\n' + ' - ' + item.value
    })

    let molhos = ''
    document.querySelectorAll('input[name = "molho"]:Checked').forEach(function (item){
        molhos += '\n' + ' - ' + item.value
    })

    let acompanhamento = ''
    document.querySelectorAll('input[name ="acompanhamento"]:Checked').forEach(function (item){
        acompanhamento += '\n' + ' - ' + item.value
    })

    console.log({
        nome,
        address,
        tipoDePao,
        principal,
        queijo,
        acompanhamento,
        salada,
        molhos,
        observacao
    })

    alert(
        `Pedido Realizado!\n
        Nome do cliente: ${nome}\n
        Endereço de entrega: ${address}\n
        Tipo de pão: ${tipoDePao}\n
        Hamburguer: ${principal}\n
        Queijos: ${queijo}\n
        Acompanhamentos: ${acompanhamento}\n
        Salada: ${salada}\n
        Molho: ${molhos}\n
        \nObservações: ${molhos}\n`
    )
})