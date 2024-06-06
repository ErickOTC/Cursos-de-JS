function addPlayer() {
    //pega o valor em texto dentro da id (.value)
    const position = document.getElementById('position').value
    const name = document.getElementById('nome').value
    const number = document.getElementById('numero').value

    console.log({position, name, number})

    const confirmation = confirm(`Escalar o jogador: ${name}, na posição: ${position} e com o número: ${number}?`)

    if (confirmation) {
        //obtendo a informação da ul
        const teamList = document.getElementById('teamList')
        //criando uma li
        const playerItem = document.createElement('li')
        playerItem.id = `jogador-${number}`
        playerItem.innerHTML = `${position}: ${name} (${number})`
        teamList.appendChild(playerItem)

        document.getElementById('position').value = ''
        document.getElementById('nome').value = ''
        document.getElementById('numero').value = ''
    }
}

function removePlayer() {
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById(`jogador-${number}`)

    const confirmation = confirm(`Remover o jogador ${playerToRemove.innerText}?`)

    if (confirmation) {
        document.getElementById('teamList').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''
    }
}