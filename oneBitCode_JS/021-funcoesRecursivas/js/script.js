//função recursiva: função que chama ela mesma
//divisão
function dividir(num) {
    console.log(num);
    if (num % 2 === 0) {
        dividir(num/2)
    } else {
        return num
    }
}

dividir(256);
//---------------ex01---------------//

//multiplicação
function dobrar(num) {
    console.log(num);
    if (num < 256) {
        dobrar(num*2);
    } else {
        return num
    }
}

dobrar(1);
//---------------ex02---------------//

//fatorial !num
function fatorial(num) {
    console.log(`Número: ${num}`);
    if (num === 0) {
        return 1
    } else if(num === 1) {
        return 1
    }else{
        console.log(`${num} * !${num - 1}`)
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(10));