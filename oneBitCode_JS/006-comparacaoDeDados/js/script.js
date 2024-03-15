// retornam resultados booleanos como: true ou false

    // comparação
        // compara apenas valores
        let comparacao01 = 3 == 3
        let comparacao02 = 3 == "3"
        let comparacao03 = 3 == 4
        let comparacao04 = 3 == "4"

        // compara valores e tipo de dados como number e string
        let comparacao05 = 3 === 3
        let comparacao06 = 3 === "3"
        let comparacao07 = 3 === 4
        let comparacao08 = 3 === "4"

    // diferente
        // compara apenas valores
        let diferente01 = 3 != 3
        let diferente02 = 3 != "3"
        let diferente03 = 3 != 4
        let diferente04 = 3 != "4"
        
        // compara valores e tipo de dados como number e string
        let diferente05 = 3 !== 3
        let diferente06 = 3 !== "3"
        let diferente07 = 3 !== 4
        let diferente08 = 3 !== "4"

    // maior e menor
        // maior
        let maior01 = 3 > 3
        let maior02 = 3 > "3"
        let maior03 = 3 > 4
        let maior04 = 3 > "4"
        let maior05 = 4 > 3
        let maior06 = "4" > 3 

        // maior ou igual
        let maiorigual01 = 3 >= 3
        let maiorigual02 = 3 >= "3"
        let maiorigual03 = 3 >= 4
        let maiorigual04 = 3 >= "4"
        let maiorigual05 = 4 >= 3
        let maiorigual06 = "4" >= 3 
        
        // menor
        let menor01 = 3 < 3
        let menor02 = 3 < "3"
        let menor03 = 3 < 4
        let menor04 = 3 < "4"
        let menor05 = 4 < 3
        let menor06 = "4" < 3 

        // menor ou igual
        let menorigual01 = 3 <= 3
        let menorigual02 = 3 <= "3"
        let menorigual03 = 3 <= 4
        let menorigual04 = 3 <= "4"
        let menorigual05 = 4 <= 3
        let menorigual06 = "4" <= 3 

        // resultado
        window.alert(`entendendo os comparadores lógicos:
        comparação:
            compara apenas valores:
            3 == 3 = ${comparacao01}
            3 == "3" = ${comparacao02}
            3 == 4 = ${comparacao03}
            3 == "4" = ${comparacao04}
        
            compara valores e tipo de dados como number e string:
            3 === 3 = ${comparacao05}
            3 === "3" = ${comparacao06}
            3 === 4 = ${comparacao07}
            3 === "4" = ${comparacao08}`)
        window.alert(`
        diferente:
            compara apenas valores:
            3 != 3 = ${diferente01}
            3 != "3" = ${diferente02}
            3 != 4 = ${diferente03}
            3 != "4" = ${diferente04}
            
            compara valores e tipo de dados como number e string:
            3 !== 3 = ${diferente05}
            3 !== "3" = ${diferente06}
            3 !== 4 = ${diferente07}
            3 !== "4" = ${diferente08}`)

        window.alert(`maior e maior igual
            maior:
            3 > 3 = ${maior01}
            3 > "3" = ${maior02}
            3 > 4 = ${maior03}
            3 > "4" = ${maior04}
            4 > 3 = ${maior05}
            "4" > 3 = ${maior06}
    
            maior ou igual:
            3 >= 3 = ${maiorigual01}
            3 >= "3" = ${maiorigual02}
            3 >= 4 = ${maiorigual03}
            3 >= "4" = ${maiorigual04}
            4 >= 3 = ${maiorigual05}
            "4" >= 3 = ${maiorigual06}`)
            
         window.alert(`menor e menor igual
            menor:
            3 < 3 = ${menor01}
            3 < "3" = ${menor02}
            3 < 4 = ${menor03}
            3 < "4" = ${menor04}
            4 < 3 = ${menor05}
            "4" < 3 = ${menor06}
    
            menor ou igual:
            3 <= 3 = ${menorigual01}
            3 <= "3" = ${menorigual02}
            3 <= 4 = ${menorigual03}
            3 <= "4" = ${menorigual04}
            4 <= 3 = ${menorigual05}
            "4" <= 3 = ${menorigual06}`)