const personagens = [
{nivel: 42, nome: "Thrall", raça: "Orc", classe: "Xamã"},
{nivel: 28, nome: "Garrosh", raça: "Orc", classe: "Guerreiro"},
{nivel: 35, nome: "Varok", raça: "Orc", classe: "Guerreiro"},
{nivel: 35, nome: "Uther", raça: "Humano", classe: "Paladino"},
{nivel: 26, nome: "Jaina", raça: "Humano", classe: "Maga"},
{nivel: 39, nome: "Tyrande", raça: "Elfo Noturno", classe: "Sacerdotisa"},
{nivel: 29, nome: "Muradin", raça: "Anão", classe: "Guerreiro"}
];

// Map (cria uma nova array)

    // comportamento do map usando o for
    /*
    const nomes = [];

    for (let i = 0; i < personagens.length; i++) {
        nomes.push(personagens[i].nome)
    }
    console.log(nomes)
    */
    //-------------------------------------------------//

    //usando o método map

    const nomes = personagens.map(function(personagem){
        return personagem.nome
    })
    console.log(nomes)
    //-------------------------------------------------//

// Filter (cria uma nova array)

    // comportamento do filter usando o for e if 

    /*
    const orcs = []

    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i].raça === "Orc") {
            orcs.push(personagens[i])
            console.log(personagens[i].nome)
        }   
    }

    console.log(orcs)
    */
    //-------------------------------------------------//

    //usando o filter

    const orcs = personagens.filter(function(personagem){
        return personagem.raça === "Orc"
    })

    console.log(orcs)
    //-------------------------------------------------//

// reduce (cria uma nova array)

    const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
        return valorAcumulado + personagem.nivel
    }, 0)

    console.log(nivelTotal)
    //-------------------------------------------------//
    
    //separando os personagens pela raça

    const racas = personagens.reduce(function(valorAcumulado, personagem){
        if (valorAcumulado[personagem.raça]) {
            valorAcumulado[personagem.raça].push(personagem)
        }else{
            valorAcumulado[personagem.raça] = [personagem]
        }
        return valorAcumulado
    }, {})

    console.log(racas)
    //-------------------------------------------------//

// sort (altera o array original)

    //alterando o array original

    personagens.sort(function(personagemA, personagemB){
        return personagemA.nivel - personagemB.nivel
    })

    console.log(personagens)


    //criando um array

    const personagensOrdenados = personagens.slice().sort(function(personagemA, personagemB){
        return personagemB.nivel - personagemA.nivel
    })

    console.log(personagensOrdenados)