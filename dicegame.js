const prompt = require("prompt-sync")();
console.log("=====================");
console.log("----- DICE GAME -----");
console.log("=====================");
let jogadores = [];

function valInt(n1) { // função para validar um imput de numero inteiro
  while (true) {
    if (n1 % 1 == 0) {
      return n1;
    } else {
      n1 = parseInt(prompt("Opção invalida! Por favor digite novamente: "));
    }
  }
}

while (true) { 
  let rounds = valInt(
    parseInt(prompt("Digite o numero de rodadas que deseja jogar: "))
  );
  let players = valInt(parseInt(prompt("Digite o numero de jogadores: ")));
  for (let c = 0; c < players; c++) { // adição de dados do jogador
    let jogador = {};
    while (true) {
      jogador.name = String(prompt(`Digite o nome do jogador ${c + 1}: `));
      if (isNaN(jogador.name)) {
        break;
      } else {
        console.log("Nome ínvalido! Por favor digite seu nome novamente.");
      }
    }
    jogador.resultados = [];
    jogador.wins = 0;
    jogadores.push(jogador);
  }
  console.log('===========================================')
  for (let n in jogadores) { // sorteador de rodadas do game
    for (let i = 0; i < rounds; i++) { 
      jogadores[n].resultados.push(Math.floor(Math.random() * 7));
    }
  }
  for (let i = 0; i < rounds; i++) { // ordenação da lista para contagem de vitorias
    jogadores
      .sort(function (a, b) {
        return a.resultados[i] - b.resultados[i];
      })
      .reverse();
    console.log('===========================================')
    console.log(`--> ${i + 1}ª Rodada!`);
    let posi = 1
    let ce = 0; // contador de empates
    let cs = 0; // controle switch
    jogadores[0].wins++;
    for (let p = 0; p < jogadores.length; p++) {
      if (ce == 2){
        ce = 0;
        cs++;
        continue;
      }
      if (cs == 0) { // verificador da condição 
        switch (jogadores[0].resultados[i]) {
          case jogadores[1].resultados[i]:
            console.log(`${posi}ª Posição: ${jogadores[0].name} e ${jogadores[1].name} empataram! Ambos tiraram o valor: ${jogadores[1].resultados[i]}`);
            jogadores[1].wins++;
            ce++;
            posi++;
            break;
        }
      } 
      if (ce != 0){
        ce++;
        continue;
      }
      console.log(
          `${posi}ª Posição: ${jogadores[p].name}, tirou o valor ${ // se não empatar mostra normalmente a ordem
            jogadores[p].resultados[i]
          }`
        );
      posi++;
    }
  }
  let campR = 0
  let camp = ''
  for (i = 0; i < players; i++) {
    if (jogadores[0].wins > campR) {
      campR = jogadores[0].wins
      camp = jogadores[0].name
    }
  }
  console.log(`O maior campeão foi... \n    ${camp.toUpperCase()}    \nCom um total de ${campR} rodadas ganhas!`);
  while (true) {
    var user = String(prompt('Deseja jogar novamente [S/N]? ')).toUpperCase();
    if (user[0] == 'S' || user[0] == 'N'){
      break;
    } else {
      console.log("Você digitou uma opção inválida! Tente novamente... ");
    }
  }
  if (user[0] == 'N') {
    break;
  }
}