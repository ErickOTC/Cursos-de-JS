const polindromo = prompt("Digite uma palavra:");
let palavraInvertida = "";


for (let index = polindromo.length -1; index >=0; index--) {
    palavraInvertida += polindromo[index];
    alert(`Palavra escolhida: ${polindromo}\nSoletrando de trás para frente: ${polindromo[index]}\nPalavra invertida: ${palavraInvertida}`)
}

if (polindromo === palavraInvertida) {
    alert(`A palavra ${polindromo} é um políndromo.\nPossui ${polindromo.length} letras.`)
} else {
    alert(`Palavra escolhida: ${polindromo}\nNumero de letras: ${polindromo.length}\nPalavra invertida: ${palavraInvertida}`);
}