/*
*spread = espalhar
    *quebra um array
*/

//concatenação de objetos
    const jogador1 = {nome: 'Erick', energia: 100, vidas: 3, magia: 150}
    const jogador2 = {nome: 'Lucas', energia: 100, vidas: 5, velocidade: 80}
    const jogador3 = {...jogador1, ...jogador2}

    console.log(jogador3)

//functions
    const soma = (v1, v2, v3)=>{
        return v1 + v2 + v3
    }

    //errado
    let valores1 = [1, 5, 4]
    console.log(soma(valores1))

    //certo
    let valores2 = [1, 5, 4, 10]
    console.log(soma(...valores2))

    //equivalente

    console.log(soma(1, 5, 4))

//html collection
    const objs1 = document.getElementsByTagName('div')
    console.log(objs1)

//array spread
    const objs2 = [...document.getElementsByTagName('div')]
    console.log(objs2)

    objs2.forEach(element => {
        console.log(element)
        element.innerHTML = 'Erick'
    });
