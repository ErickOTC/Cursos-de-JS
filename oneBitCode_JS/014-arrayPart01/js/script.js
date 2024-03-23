let arr = ["Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
let tamanho = 0;
console.log(arr);
//---Adicionar Elementos---//

    //push 
        //adcionar no final da array

    tamanho = arr.push("Boromir");
    console.log(arr);
    console.log(tamanho);

    //unshift
        //adcionar no começo da array
    
    tamanho = arr.unshift("Frodo");
    console.log(arr);
    console.log(tamanho);

//---Remover Elementos---//

    //pop
        //remove no final da array
    const ultimoElemento = arr.pop();
    console.log(arr);
    console.log(ultimoElemento);

    //shift
        //remove no começo da array
    const primeiroElemento = arr.shift();
    console.log(arr);
    console.log(primeiroElemento);

//---Pesquisar Elementos---//

    //includes
        //pesquisa a palavra
    const includes01 = arr.includes("Gandalf");
    console.log(includes01);

    const includes02 = arr.includes("Gandalf o Cizento");
    console.log(includes02);

    //indexof
        //pesquisa a posição da palavra
    const indesOf01 = arr.indexOf("Gandalf");
    console.log(indesOf01);

//Cortar / Concatenar
    //slice
        //copia elementos
    const hobbits = arr.slice(0,4); // pega do 0 o total de 4 elementos por isso (0,4)
    const arrFinal = arr.slice(-3); // -1 pega o ultimo elemento, se colocarmos -2 pega o penultimo e o ultimo e assim sucessivamente.
    console.log(arr);
    console.log(hobbits);
    console.log(arrFinal);
