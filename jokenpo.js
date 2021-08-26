function valinput(str) {
  // A função validará o input do usuário
  // O retorno será o indice do input do usuário na lista
  while (true) {
    if (options.indexOf(str) != -1) {
      return options.indexOf(str);
    } else {
      console.log("Opção invalidá! Por favor tente novamente!");
      console.log("=========================================================");
      str = String(prompt("Digite novamente a sua escolha: ")).toUpperCase();
    }
  }
}
options = ["PEDRA", "PAPEL", "TESOURA"]; // lista com as opções
var totw = 0; // contador do total de vitorias
var totl = 0; // contador do total de derrotas
var totj = 0; // contador do total de jogos
while (true) {
  // laço de continuação do game
  console.log("-------< JO-KEN-PO >-------");
  while (true) {
    // validação simples do numero de rodadas digitadas pelo usuario
    var rounds = parseInt(prompt("Quantas rodadas deseja jogar? "));
    if (rounds > 0) {
      break;
    } else {
      console.log("Opção invalida! Por favor digite um numero inteiro!");
      console.log("=========================================================");
    }
  }
  let winacc = 0; // contador de vitórias
  let tie = 0; // contador de empates
  let c = 0; // contador de laços
  console.log(" -> Vamos começar ");
  while (c != rounds) {
    let comp = parseInt(Math.random() * (3 - 0));
    console.log("=========================================================");
    console.log(' -> Você pode escolher "Pedra", "Papel" ou "Tesoura"!');
    console.log("=========================================================");
    let user = valinput(String(prompt("Digite a sua escolha: ")).toUpperCase());
    if (comp == user) {
      tie++;
      console.log(
        `Você escolheu ${options[user]} e o computador escolheu ${options[comp]}!\nEntão temos um empate!`
      );
    } else if (
      (comp == 0 && user == 1) ||
      (comp == 1 && user == 2) ||
      (comp == 2 && user == 0)
    ) {
      console.log(
        `Você escolheu ${options[user]} e o computador escolheu ${options[comp]}!\nEntão você venceu!`
      );
      winacc++;
      totw++;
    } else {
      console.log(
        `Você escolheu ${options[user]} e o computador escolheu ${options[comp]}!\nEntão você perdeu!`
      );
      totl++;
    }
    c += 1;
  }
  console.log("=========================================================");
  console.log(`Foram jogadas ${rounds} rodada(s) e houveram ${tie} empate(s)!`);
  if (winacc > (rounds - tie - winacc)) {
    console.log(`Você foi o grande campeão com ${winacc} vitória(s)!`);
    console.log(`E o computador ganhou somente ${rounds -tie -winacc} rodada(s)!`)
  } else if (winacc == (rounds -tie -winacc)){
    console.log(`Você ganhou ${winacc} veze(s), e o computador ganhou ${rounds -tie -winacc} veze(s)!`);
    console.log('Então temos um EMPATE');
  } else {
    console.log(
      `O computador foi o grande campeão com ${rounds - tie - winacc} vitória(s)!`
    );
    console.log(`E você ganhou somente ${winacc} rodada(s)!`)
  }
  console.log("=========================================================");
  while (true) {
    // validação simples do input para continuar jogando
    var conti = String(prompt("Deseja jogar novamente [S/N]? ")).toUpperCase();
    if (conti[0] == "S" || conti[0] == "N") {
      break;
    } else {
      console.log("Opção invalida! Por favor digite novamente!");
      console.log("=========================================================");
    }
  }
  totj++;
  if (conti[0] == "N") {
    console.log('Finalizando...');
    break; // condição de parada do game
  }
}
let ganhador = "";
if (totw > totl) {
  ganhador = `Você venceu ${totw} rodada(s) em ${totj} jogo(s)`;
} else if (totw == totl) {
  ganhador = "Houve um empate";
} else {
  ganhador = `O computador venceu ${totl} rodada(s) em ${totj} jogo(s)!`;
}
console.log(
  `Jogamos ${totj} vez(es) no total!\nAnalisando todo(s) os jogo(s) e todas as rodadas, concluimos que...\n${ganhador}!`
);
