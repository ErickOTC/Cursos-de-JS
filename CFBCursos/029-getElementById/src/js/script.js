//pegando o elemento
    const divHTML = document.getElementById('html')

//pegando as informaçoes
    console.log(divHTML) //elemento
    console.log(divHTML.id) //id do elemento
    console.log(divHTML.innerHTML) // o texto html

//alterando as informações
    divHTML.innerHTML = 'HyperText Markup Language — Linguagem de Marcação de Hipertexto (HTML)'


//criando um array com os elementos
    const divCSS = document.getElementById('css')
    const divJS = document.getElementById('javaScript')
    const divMySQL = document.getElementById('mySQL')

    //cria um array com os elementos
    const arrayElementos = [divCSS, divJS, divMySQL]

    //percorrendo elementos com map
    arrayElementos.map((e)=>{
        e.innerHTML = 'Cursos'
        console.log(e)      
    })

    console.log(arrayElementos)