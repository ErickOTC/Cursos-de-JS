function menu() {
    return Number(prompt(`1-Calcular Circulo\n2-Calcular Quadrado\n3-Calcular Triângulo\n4-Calcular Retângulo\n5-Calcular Losangulo\n6-Calcular Trapézio\n7-Sair`));
}

function circuferenciaDoCirculo() {
    const raio = Number(prompt("Informe o valor do raio do circulo"));
    return 2*3.14*raio;
}

function areaDoQuadrado() {
    const lado = Number(prompt("Informe o valor do lado do quadrado"));
    return lado*lado;
}

function areaDoTriangulo() {
    const base = Number(prompt("Informe o valor da base do triângulo"));
    const altura = Number(prompt("Informe o valor da altura do triângulo"));
    return (base*altura)/2;
}

function areaDoRetangulo() {
    const base = Number(prompt("Informe o valor da base do retângulo"));
    const altura = Number(prompt("Informe o valor da altura do retângulo"));
    return base*altura;
}

function areaDoLosango() {
    const diagonalmaior = Number(prompt("Informe o valor da diagonal maior do losango"));
    const diagonalmenor = Number(prompt("Informe o valor da diagonal menor do losango"));
    return (diagonalmaior*diagonalmenor)/2;
}

function areaDoTrapezio() {
    const baseMaior = Number(prompt("Informe o valor da base maior do trapézio "));
    const baseMenor = Number(prompt("Informe o valor da base menor do trapézio "));
    const altura = Number(prompt("Informe o valor da altura do trapézio"));
    return ((baseMaior+baseMenor)*altura)/2;
}

function executar() {
    let resposta = 0;

    do {
        resposta = menu();
        let resultado;

        switch (resposta) {
            case 1:
                resultado = circuferenciaDoCirculo();
                alert(`O resultado é: ${resultado}`)
                break;
            case 2:
                resultado = areaDoQuadrado();
                alert(`O resultado é: ${resultado}`)
                break;
            case 3:
                resultado = areaDoTriangulo();
                alert(`O resultado é: ${resultado}`)
                break;
            case 4:
                resultado = areaDoRetangulo();
                alert(`O resultado é: ${resultado}`)
                break;
            case 5:
                resultado = areaDoLosango();
                alert(`O resultado é: ${resultado}`)
                break;
            case 6:
                resultado = areaDoTrapezio();
                alert(`O resultado é: ${resultado}`)
                break;
            case 7:
                alert("O programa será fechado!")
                break;
        
            default:
                alert("Digite um valor válido!")
                break;
        }
    } while (resposta !== 7);
}

executar();