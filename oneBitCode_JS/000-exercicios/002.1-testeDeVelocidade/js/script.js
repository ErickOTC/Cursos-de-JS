const ataquePersonagemA = Number(prompt("Digite o ataque do personagem A:"));

const defesaPersonagemB = parseFloat(prompt("Digite a defesa do personagem B:"));
let escudoDoPersonagemB = confirm("O personagem B possui escudo?");
let vidaDoPersonagemB = Number(prompt("Quanto e o poder de vida do personagem B:"));

if ( ataquePersonagemA <= defesaPersonagemB) {
    alert(`Ataque do personagem A: ${ataquePersonagemA}
        defesa do personagem B: ${defesaPersonagemB}
        possui escudo: ${escudoDoPersonagemB}
        vida do personagem B: ${vidaDoPersonagemB}`)
} else if (ataquePersonagemA > defesaPersonagemB){
    if (escudoDoPersonagemB === true) {
        alert(`
        Ataque do personagem A: ${ataquePersonagemA}
        defesa do personagem B: ${defesaPersonagemB}
        possui escudo: ${escudoDoPersonagemB}
        vida do personagem B: ${vidaDoPersonagemB - ataquePersonagemA/2}`)
    } else {
        alert(`Ataque do personagem A: ${ataquePersonagemA}
        defesa do personagem B: ${defesaPersonagemB}
        possui escudo: ${escudoDoPersonagemB}
        vida do personagem B: ${vidaDoPersonagemB - ataquePersonagemA}`)
    }
}
