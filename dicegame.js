const prompt = require("prompt-sync")();
function rollDice(){
    return (Math.floor(Math.random() * 6) + 1);
}

let jogadores = [];
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
    jogadores[i] = { id: 'Jogador ' + (i+1), nome: '',resultados: []}
    console.log('=====================================')
    jogadores[i].nome = String(prompt(`Digite o nome do ${i + 1}º jogador: `));
    for (let c = 0; c < rodadas; c++) {
        jogadores[i].resultados.push(rollDice());
        console.log(`${c+1}ª Rodada!`)
        console.log(jogadores[i].resultados[c]);
    }
    console.log('=====================================');
} 
let empataram = '';
let ganhador = '';
for (let c = 0; c < rodadas; c++) { 
    let maior = 0;
    for (v of jogadores) {
        if (v.resultados[c] > maior){
            maior = v.resultados[c];
            ganhador = v.nome;
        }
    }
    var cont = 0
    for (v of jogadores){
        if (v.resultados[c] == maior) {
            cont++;
            if (cont >= 2)    
                empataram += `${v.nome},`;
        }
    }
    if (cont >= 2) {
        console.log(`Houve um empate entre ${ganhador} e ${empataram} ambos tiraram o valor: ${maior} no dado. `);
        continue;
    }
    console.log(`O ${ganhador} ganhou a ${c+1}ª rodada, tirando o valor: ${maior} no dado!`);
}