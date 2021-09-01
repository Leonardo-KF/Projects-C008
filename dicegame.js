const prompt = require("prompt-sync")();
var jogadores = [];
console.log('=====================');
console.log('----- DICE GAME -----');
console.log('=====================');
while (true) {
    var rodadas = parseInt(prompt('Digite o numero de rodadas que deseja jogar: '));
    if (rodadas % 1 == 0) {
        break;
    } else {
        console.log('Opção inválida! Por favor tente novamente.');
    }
}
while (true) {
    var pessoas = parseInt(prompt('Digite o numero de jogadores: '));
    if (pessoas % 1 == 0) {
        break;
    } else {
        console.log('Opção inválida! Por favor tente novamente.');
    }
}
for (let i = 0; i < pessoas; i++) {
    jogadores.push( {id: 'Jogador '+ (i + 1), name: '', resultados: [], vitorias: 0});
    while (true) {
        jogadores[i].name = String(prompt(`Digite o nome do ${i + 1}º jogador: `));
        if (isNaN(jogadores[i].name)) {
            break;
        } else {
            console.log('Opção inválida. Por favor digite o seu primeiro nome!');
        }
    }
}
for (let c = 0; c < pessoas; c++) {  // laço que define a posição do jogador
    for (let i = 0; i < rodadas; i++) {
        jogadores[c].resultados.push(Math.floor(Math.random() * 7));
    }
}
for (let r = 0; r < rodadas; r++) { 
jogadores.sort(function(a, b) { return a.resultados[r] - b.resultados[r]}).reverse();
    console.log(`Na ${r + 1}ª rodada:`);
    for (let j = 0; j < pessoas; j++) {
        if (jogadores[i].resultados[r] == jogadores)
        console.log(`${j + 1}ª posição: ${jogadores[j].name} com o valor: ${jogadores[j].resultados[r]}`);
    }
}
