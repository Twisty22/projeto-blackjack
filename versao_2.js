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

if(confirm("Boas vindas ao jogo de BlackJack!\nQuer iniciar uma nova rodada?")){
    let jogador = [];
    for(let i = 0; i < 2; i++){
        jogador[i]= comprarCarta();
    }
    if(jogador[0].valor == 11 && jogador[1].valor == 11){
        jogador[1] = comprarCarta();
    }
    let pc = [];
    for(let i = 0; i < 2; i++){
        pc[i] = comprarCarta();
    }
    if(pc[0].valor == 11 && pc[1].valor == 11){
        pc[1] = comprarCarta();
    }
    let pontuacaoJogador = 0;
    for(let i = 0; i < jogador.length; i++){
        pontuacaoJogador = pontuacaoJogador + jogador[i].valor;
     }
    let pontuacaoPC = 0;
    for(let i = 0; i < pc.length; i++){
        pontuacaoPC = pontuacaoPC + pc[i].valor;
    }
    let jogadorCartas = "";
    for(let i = 0; i < jogador.length; i++){
        jogadorCartas = jogadorCartas + jogador[i].texto;
    }
    let pcCartas = "";
    pcCartas = pc[0].texto;
    if(confirm(`Suas cartas são ${jogadorCartas}. A carta revelada do computador é ${pcCartas}\nDeseja comprar uma carta?`)){
        let condicao;
        let i = jogador.length;
        do{
            jogador[i] = comprarCarta();
            jogadorCartas = jogadorCartas + jogador[i].texto;
            pontuacaoJogador = pontuacaoJogador + jogador[i].valor;
            if(pontuacaoJogador > 21){
                condicao = false;
            }
            else{
                condicao = confirm(`Suas cartas são ${jogadorCartas}. A carta revelada do computador é ${pcCartas}\nDeseja comprar uma carta?`);
            }
            i++;
        }while(condicao);
    }
    if(pontuacaoJogador <= 21 && pontuacaoPC < pontuacaoJogador){
        let i = pc.length;
        while(pontuacaoJogador > pontuacaoPC){
            pc[i] = comprarCarta();
            pontuacaoPC = pontuacaoPC + pc[i].valor;
            pcCartas = pcCartas + pc[i].texto;
            i++;
        }
        alert(`Suas cartas são ${jogadorCartas}. Sua pontuação é ${pontuacaoJogador}.\nAs cartas do computador são ${pcCartas}. A pontuação do pc é ${pontuacaoPC}.`);
    }
    for(let i = 0; i < pc.length; i++){
        pcCartas = pcCartas + pc[i].texto;
    }
    if(pontuacaoJogador > pontuacaoPC){
        if(pontuacaoJogador <= 21){
            alert(`Usuario - Cartas: ${jogadorCartas} - Pontuação: ${pontuacaoJogador}.\nComputador - Cartas:  ${pcCartas} - Pontuação: ${pontuacaoPC}.\nO Usuario ganhou!!!`);
        }
        else{
            alert(`Usuario - Cartas: ${jogadorCartas} - Pontuação: ${pontuacaoJogador}.\nComputador - Cartas:  ${pcCartas} - Pontuação: ${pontuacaoPC}.\nO Computador ganhou!!!`);
        }
    }
    else if(pontuacaoPC > pontuacaoJogador){
        if(pontuacaoPC <= 21){
            alert(`Usuario - Cartas: ${jogadorCartas} - Pontuação: ${pontuacaoJogador}.\nComputador - Cartas:  ${pcCartas} - Pontuação: ${pontuacaoPC}.\nO Computador ganhou!!!`);
        }
        else{
            alert(`Usuario - Cartas: ${jogadorCartas} - Pontuação: ${pontuacaoJogador}.\nComputador - Cartas:  ${pcCartas} - Pontuação: ${pontuacaoPC}.\nO Usuario ganhou!!!`);
        }
    }
    else{
        alert(`Usuario - Cartas: ${jogadorCartas} - Pontuação: ${pontuacaoJogador}.\nComputador - Cartas:  ${pcCartas} - Pontuação: ${pontuacaoPC}.\nHouve um empate!!!`);
    }
}
else{
    alert("O jogo acabou.");
}