/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de BlackJack!")

if(confirm("Quer iniciar uma nova rodada?")){
    const carta1Jogador = comprarCarta();
    const carta2Jogador = comprarCarta();
    const pontuacaoJogador = carta1Jogador.valor + carta2Jogador.valor;
    console.log(`Usuário - cartas: ${carta1Jogador.texto} ${carta2Jogador.texto} - ${pontuacaoJogador}`);
    const carta1PC = comprarCarta();
    const carta2PC = comprarCarta();
    const pontuacaoPC = carta1PC.valor + carta2PC.valor;
    console.log(`Computador - cartas: ${carta1PC.texto} ${carta2PC.texto} - ${pontuacaoPC}`);
    if(pontuacaoJogador > pontuacaoPC){
        if(pontuacaoJogador <= 21){
            console.log("O jogador ganhou!!!")
        }
        else{
            console.log("O computador ganhou!!!")
        }
    }
    else if(pontuacaoPC > pontuacaoJogador){
        if(pontuacaoPC <= 21){
            console.log("O computador ganhou!!!")
        }
        else{
            console.log("O jogador ganhou!!!")
        }
    }
    else{
        console.log("Houve um empate!!!")
    }
}
else{
    console.log("O jogo acabou.");
}
