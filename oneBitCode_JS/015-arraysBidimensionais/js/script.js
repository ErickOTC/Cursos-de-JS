 const array = [
        "1 nível",
        ["2 nível", 42, true],
        [
            ["3 nível", "primeiro item", "olá, mundo!"],
            ["3 nível", "segundo item", "oi, mundo!"],
        ],
        []
 ];

 console.log(array);

 console.log(array[0]);

 console.log(array[1]);
 console.log(array[1][0]);
 console.log(array[1][1]);
 console.log(array[1][2]);

 console.log(array[2]);
 console.log(array[2][0]);
 console.log(array[2][0][0]);
 console.log(array[2][0][1]);
 console.log(array[2][0][2]);

 console.log(array[2][1]);
 console.log(array[2][1][0]);
 console.log(array[2][1][1]);
 console.log(array[2][1][2]);

 console.log(array[3]);

 const matriz = [
    ["l1,c1", "l1,c2", "l1,c3", "l1,c4"],
    ["l2,c1", "l2,c2", "l2,c3", "l2,c4"],
    ["l3,c1", "l3,c2", "l3,c3", "l3,c4"],
 ];

 console.table(matriz);

 /*
    //---Fazer isso com o metodo .push()---//
 [
    ["l1,c1", "l1,c2", "l1,c3", "l1,c4", "l1,c5"],
    ["l2,c1", "l2,c2", "l2,c3", "l2,c4"],
    ["l3,c1", "l3,c2", "l3,c3", "l3,c4"],
    ["l4,c1",],
 ];
 
 // resposta

    matriz[0].push("l1,c5");
    matriz.push(["l4,c1"]);
    console.table(matriz);
 */

    for (let index = 0; index < matriz.length; index++) {
        for (let inx = 0; inx < matriz[index].length; inx++) {
            console.log(`Posição: (${index},${inx}) Valor:(${matriz[index][inx]})`);
        }
        console.log(matriz[index]);      
    }