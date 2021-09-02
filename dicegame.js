const prompt = require("prompt-sync")();
console.log("=====================");
console.log("----- DICE GAME -----");
console.log("=====================");
let jogadores = [];

function valInt(n1) {
  while (true) {
    if (n1 % 1 == 0) {
      return n1;
    } else {
      n1 = parseInt(prompt("Opção invalida! Por favor digite novamente: "));
    }
  }
}

let rounds = valInt(
  parseInt(prompt("Digite o numero de rodadas que deseja jogar: "))
);
let players = valInt(parseInt(prompt("Digite o numero de jogadores: ")));
for (let c = 0; c < players; c++) {
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
for (let n in jogadores) {
  for (let i = 0; i < rounds; i++) {
    jogadores[n].resultados.push(Math.floor(Math.random() * 7));
  }
}

for (let i = 0; i < rounds; i++) {
  jogadores
    .sort(function (a, b) {
      return a.resultados[i] - b.resultados[i];
    })
    .reverse();
  console.log(`${i + 1}ª Rodada!`);
  for (let p = 0; p < jogadores.length; p++) {
    if (jogadores[0].resultados[i] == jogadores[1].resultados[i]) {
      console.log(
        `${p + 1}ª Posição: ${jogadores[0].name} e ${
          jogadores[1].name
        } empataram, ambos tiraram o valor: ${jogadores[0].resultados[i]}`
      );
      jogadores[1].wins += 1;
      jogadores[0].wins += 1;
      continue;
    } else {
      console.log(
        `${p + 1}ª Posição: ${jogadores[p].name}, tirou o valor ${
          jogadores[p].resultados[i]
        }`
      );
      jogadores[0].wins += 1;
    }
  }
}
console.log(jogadores);
