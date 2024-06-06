//querySelector e querySelectorAll

    //retorna o primeiro a ser encontrado
    const querySelector = document.querySelector('div')

    //tag name
    const querySelectorAll = [...document.querySelectorAll('div')]

    //classe com querySelectorALL
    const classeSelectorAll = [...document.querySelectorAll('.curso')]

    //classe com querySelectorALL posição específica
    const SelectorAllPosicao = document.querySelectorAll('.curso')[0] // posição

    //id com querySelectorAll
    const idSelector = document.querySelector('#mqtt')

    //duas classes com querySelectorALL
    const duasClasses = [...document.querySelectorAll('div, p')]
        //podemos misturar entre classe e tag, id e classe e id e tag

    //tag e class
    const tagClass = [...document.querySelectorAll('div[class]')]

    //tag e class específica
    const tagClassEspecificaM1 = [...document.querySelectorAll('div[class].m1')]
    const tagClassEspecificaM2 = [...document.querySelectorAll('div[class].m2')]

    //div com um filho da tag p
    const divFilhoP = [...document.querySelectorAll('div > p')]

//console
console.log(querySelector)
console.log(querySelectorAll)
console.log(classeSelectorAll)
console.log(SelectorAllPosicao)
console.log(idSelector)
console.log(duasClasses)
console.log(tagClass)
console.log(tagClassEspecificaM1)
console.log(tagClassEspecificaM2)
console.log(divFilhoP)