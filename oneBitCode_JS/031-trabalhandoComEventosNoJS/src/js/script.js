//adicionar eventos
function register(ev) {
    console.log(ev)

    const sectionElement = ev.currentTarget.parentNode.children

    const username = sectionElement.username.value
    const password = sectionElement.password.value
    const passwordConfirmation = sectionElement.passwordConfirmation.value

    console.log(username)
    console.log(password)
    console.log(passwordConfirmation)

    if (password === passwordConfirmation) {
        alert(`Usuário ${username}, registrado!`)
    }else{
        alert('As senhas são diferentes!')
    }
}

const botao = document.getElementById('botaoRegistrar')

botao.addEventListener('click', register)

//remover elementos
function removerLIsta() {
    botao.removeEventListener('click', register)
    alert(`Evento removido`)
}

botao.addEventListener('mouseover', function (ev){
    console.log(ev.currentTarget)
})

/*
const botaoRegistrar = document.getElementById('botaoRegistrar')

botaoRegistrar.addEventListener('click', function (){
    alert('Botão clicado!')
})]
*/