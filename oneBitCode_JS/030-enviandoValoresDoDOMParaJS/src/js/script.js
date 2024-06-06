function register(element) {
    console.log(element)
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    console.log(username)
    console.log(password)
    console.log(passwordConfirmation)

    if (password === passwordConfirmation) {
        alert(`Usuário ${username}, registrado!`)
    }else{
        alert('As senhas são diferentes!')
    }
}