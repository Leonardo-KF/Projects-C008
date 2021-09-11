const prompt = require("prompt-sync")();
now = new Date();
let tf = 0;
let votes = {
  // objeto contabilizador de votos
  vtc1: 0,
  vtc2: 0,
  vtc3: 0,
  vtnull: 0,
  veb: 0,
  vwin: 0,
};
let winner = ""; // variavel que receberá o vencedor
function autorizaVoto(anodenasc) {
  while (true) {
    // validação ano de nascimento
    if (
      anodenasc % 1 == 0 &&
      now.getFullYear() - anodenasc < 122 &&
      anodenasc < now.getFullYear()
    ) {
      break;
    } else {
      console.log(
        "===================================================================================================="
      );
      console.log(
        "Você está tentando usar dados falsos! Que segundo o artigo 307 do Código Penal é considerado crime de falsa identidade!"
      );
      console.log("E devido a essas circunstâncias seu voto será NEGADO!");
      console.log(
        "===================================================================================================="
      );
      tf++;
      return "Negado";
    }
  }
  if (now.getFullYear() - anodenasc >= 18) {
    return "Obrigatório";
  } else if (now.getFullYear() - anodenasc >= 16) {
    return "Opcional";
  } else {
    return "Negado";
  }
}
function votacao(aut, voto) {
  // função que vão utilizar
  if (aut == "Negado") {
    console.log(
      "================================================================"
    );
    console.log("                     Você não pode votar!");
    console.log(
      "================================================================"
    );
  } else {
    while (true) {
      // validação da opção de voto
      if (voto % 1 == 0) {
        while (true) {
          // confirma votação
          var conf = String(
            prompt(
              `Você escolheu a opção [${voto}]! Deseja confirmar esse voto [S/N]? `
            )
          ).toUpperCase();
          if (conf[0] == "S" || conf[0] == "N") {
            break;
          } else {
            console.log("Você digitou uma opção inválida!");
          }
        }
        if (conf[0] == "N") {
          voto = parseInt(prompt("Digite novamente o seu voto: "));
          continue;
        }
        if (voto >= 1 && voto <= 5) {
          // validação da escolha das opções
          return voto;
        } else {
          console.log(
            "Você escolheu uma opção inválida! Por favor digite uma opção válida."
          );
          voto = parseInt(prompt("Digite o seu voto: "));
        }
      } else {
        console.log("Você digitou uma opção invalida! Tente novamente");
        voto = parseInt(prompt("Digite o seu voto novamente: "));
      }
    }
  }
}

function exibirRes() {
  // função que exibe o resultado final da votação
  console.log("=============================");
  console.log(
    `O Candidato 1 teve ${votes.vtc1} votos!\nO Candidato 2 teve ${votes.vtc2} votos!\nO Candidato 3 teve ${votes.vtc3} votos!`
  );
  console.log(`O total de votos nulos foi: ${votes.vtnull} votos!`);
  console.log(`O total de votos em branco foi: ${votes.veb} votos!`);
  for (let i = 0; i < 3; i++) {
    if (votes.vtc1 > votes.vwin) {
      votes.vwin = votes.vtc1;
      winner = "Candidato 1";
    } else if (votes.vtc2 > votes.vwin) {
      votes.vwin = votes.vtc2;
      winner = "Candidato 2";
    } else if (votes.vtc3 > votes.vwin) {
      votes.vwin = votes.vtc3;
      winner = "Candidato 3";
    }
  }
  if (winner == "") {
    console.log(
      "======================================================================"
    );
    console.log(
      "Não houve um ganhador, pois não houveram votos nos candidatos citados."
    );
  } else {
    console.log(
      "============================================================="
    );
    console.log(
      `O vencedor da votação foi: ${winner} com ${votes.vwin} votos!`
    );
  }
}
while (true) {
  console.log(`         Eleição ${now.getFullYear()}`);
  console.log("===============================");
  var condition = autorizaVoto(
    parseInt(prompt("Digite o ano do seu nascimento: "))
  );
  if (condition == "Negado") {
    votacao(condition, 0);
    continue;
  }
  console.log("=============================");
  console.log("        Urna Tabajara        ");
  console.log("=============================");
  console.log("[1] - Canditato 1");
  console.log("[2] - Canditado 2");
  console.log("[3] - Canditado 3");
  console.log("[4] - Voto Nulo");
  console.log("[5] - Voto em Branco");
  console.log("=============================");
  console.log("A condição do seu voto é: " + condition);
  var vote = votacao(condition, prompt("Digite o seu voto: "));
  if (vote == 1) {
    votes.vtc1++;
  } else if (vote == 2) {
    votes.vtc2++;
  } else if (vote == 3) {
    votes.vtc3++;
  } else if (vote == 4) {
    votes.vtnull++;
  } else if (vote == 5) {
    votes.veb++;
  }
  console.log("=============================");
  while (true) {
    var user = String(
      prompt("Deseja cadastrar um novo voto? [S/N]? ")
    ).toUpperCase();
    if (user[0] == "N" || user[0] == "S") {
      break;
    } else {
      console.log(
        "Você digitou uma opção inválida. Por favor tente novamente!"
      );
    }
  }
  if (user[0] == "N") {
    break;
  }
}
console.log(`Houveram ${tf} tentativas de fraude nessa eleição!!!`);
exibirRes();
