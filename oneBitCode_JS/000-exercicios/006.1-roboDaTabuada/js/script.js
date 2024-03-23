let tabuada = ""
let index = 0
let valorFinal = ""

for (let num = Number(prompt("Digite um numero e montaremos sua tabuada de 0 a 20")); index <= 20;) {
    tabuada = (num * index)
    valorFinal += `${index} * ${num} = ${tabuada} \n`
    index++
}

    alert(`${valorFinal}`)