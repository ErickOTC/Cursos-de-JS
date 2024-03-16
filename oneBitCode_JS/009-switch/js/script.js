const resultado = (prompt('Digite uma opção:\n1-\n2-\n3-'));

// vemos dois jeitos de transformar string em number
const resultadoNum01 = Number(resultado)
const resultadoNum02 = parseFloat(resultado);

switch (resultadoNum01) {
    case 1:
        alert("O resultado é 'a'")
        break;
    case 2:
        alert("O resultado é 'b'")
        break;
    case 3:
        alert("O resultado é 'c'")
        break;
    default:
        alert("Finalizando")
}

alert(`A const resultado tem o tipo: ${typeof(resultado)}`)
alert(`A const resultadoNum01 tem o tipo: ${typeof(resultadoNum01)}`)
alert(`A const resultadoNum02 tem o tipo: ${typeof(resultadoNum02)}`)