const prompt = require("prompt-sync")();
function valInt(n1) {
  // função para validar um imput de numero inteiro
  while (true) {
    if (n1 % 1 == 0) {
      return n1;
    } else {
      n1 = parseInt(prompt("Opção invalida! Por favor digite novamente: "));
    }
  }
}

while (true) {
  console.log("=====================");
  console.log("----- DICE GAME -----");
  console.log("=====================");
  let jogadores = []; // lista de objetos
  let rounds = valInt(
    parseInt(prompt("Digite o numero de rodadas que deseja jogar: "))
  );
  let players = valInt(parseInt(prompt("Digite o numero de jogadores: ")));
  for (let c = 0; c < players; c++) {
    // adição de dados do jogador
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
  console.log("===========================================");
  for (let n in jogadores) {
    // sorteador de rodadas do game
    for (let i = 0; i < rounds; i++) {
      jogadores[n].resultados.push(Math.floor(Math.random() * 6 + 1));
    }
  }
  for (let i = 0; i < rounds; i++) {
    // ordenação da lista para contagem de vitorias
    jogadores
      .sort(function (a, b) {
        return a.resultados[i] - b.resultados[i];
      })
      .reverse();
    console.log("===========================================");
    console.log(`--> ${i + 1}ª Rodada!`);
    let posi = 1; // numerador da posição de cada rodada
    let ce = 0; // contador de empates
    let cs = 0; // controle switch
    jogadores[0].wins++; // adição da vitória ao jogador que ficou em primeiro
    for (let p = 0; p < jogadores.length; p++) {
      if (ce == 2) {
        // controlador para encerrar a verificação de empates
        ce = 0;
        cs++;
        continue;
      }
      if (cs == 0) {
        // verificador da condição
        switch (
          jogadores[0].resultados[i] // verificador de empate
        ) {
          case jogadores[1].resultados[i]:
            console.log(
              `${posi}ª Posição: ${jogadores[0].name} e ${jogadores[1].name} empataram! Ambos tiraram o valor: ${jogadores[1].resultados[i]}`
            );
            jogadores[1].wins++;
            ce++;
            posi++;
            break;
        }
      }
      if (ce != 0) {
        // varivel para controlar a execução do for no caso de empate
        ce++;
        continue;
      }
      console.log(
        `${posi}ª Posição: ${jogadores[p].name}, tirou o valor ${
          // se não empatar mostra normalmente a ordem
          jogadores[p].resultados[i]
        }`
      );
      posi++;
    }
  }
  jogadores
    .sort(function (a, b) {
      return a.wins - b.wins;
    })
    .reverse(); // ordenador da lista de acordo com o numero de rodadas ganhas
  if (jogadores[0].wins == jogadores[1].wins) {
    //verificação de empate de rodadas ganhas
    console.log("===========================================");
    console.log(
      `Os maiores campeões foram... \n    ${jogadores[0].name.toUpperCase()} e ${jogadores[1].name.toUpperCase()}   \nEmpataram com um total de ${
        jogadores[0].wins
      } rodadas ganhas!`
    );
    console.log("===========================================");
  } else {
    console.log("===========================================");
    console.log(
      `O maior campeão foi... \n    ${jogadores[0].name.toUpperCase()}    \nCom um total de ${
        jogadores[0].wins
      } rodadas ganhas!`
    );
  }
  console.log("===========================================");
  while (true) {
    // validação da resposta para continuar o game
    var user = String(prompt("Deseja jogar novamente [S/N]? ")).toUpperCase();
    if (user[0] == "S" || user[0] == "N") {
      break;
    } else {
      console.log("Você digitou uma opção inválida! Tente novamente... ");
    }
  }
  if (user[0] == "N") {
    // condição de encerramento do game
    console.log("Obrigado por jogar! Volte sempre!");
    break;
  }
}
