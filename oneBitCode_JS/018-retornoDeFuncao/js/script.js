function calcularMedia(a, b) {
    const media = (a + b) /2
    return media // retorna o valor media e armazena em resultado
}
const resultado = calcularMedia(7, 2);
console.log(resultado)
//------------------------------//

function criarProduto(nome, preco) {
    const produto = {
        nome: nome,
        preco: preco,
        estoque: 1
    }
    return produto
}

const notebook = criarProduto("Dell i5 16GB", 3500);
const lavaAndSeca = criarProduto("Samsung", 3000);
console.log(notebook)
console.log(lavaAndSeca)
//------------------------------//

function areaRetangular(base, altura) {
    return base * altura 
}

function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}

console.log(areaRetangular(3,5))
console.log(areaQuadrada(9))
//------------------------------//

function ola() {
    let texto = '...'  
    texto = "Olá, Mundo!"
    return texto // o retorno acaba a função
    // nada aqui para baixo funciona
    console.log(texto)
    
}

console.log(ola())
//------------------------------//

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return `Sua idade é: ${idade}, você é maior de idade!`
    } else {
        return `Sua idade é: ${idade}, você é menor de idade!`
    }
}

console.log(maiorDeIdade(29))
console.log(maiorDeIdade(13))