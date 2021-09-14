const prompt = require("prompt-sync")();

class person {
  constructor(nome, idade, sexo, id) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.id = id;
  }
}
class personagens extends person {
  constructor(nome, idade, sexo, id, caracteristicas) {
    super(nome, idade, sexo, id);
    this.caracteristicas = caracteristicas;
  }
}
function authChoices(x) {
  while (true) {
    if (x >= 1 && x <= 3) {
      return x;
    } else {
      console.log(
        "Você digitou uma opção inválida! Por favor digite uma escolha valida!"
      );
      x = parseInt(prompt("Digite a sua escolha: "));
    }
  }
}
function authInfo(k, resp) {
  if (k == "nome") {
    while (true) {
      if (isNaN(resp)) {
        return resp;
      } else {
        console.log("Você digitou uma opção inválida! Tente novamente.");
        resp = String(prompt(`${k}: `));
      }
    }
  } else if (k == "idade" || k == "id") {
    while (true) {
      if (resp % 1 == 0) {
        return resp;
      } else {
        console.log("Opção inválida! Por favor digite um numero inteiro.");
        resp = parseInt(prompt(`${k}: `));
      }
    }
  } else if (k == "sexo") {
    while (true) {
      if (
        resp[0] == "m" ||
        resp[0] == "f" ||
        resp[0] == "M" ||
        resp[0] == "F"
      ) {
        return resp;
      } else {
        console.log("Opção inválida! Por favor insira Masculino ou Feminino.");
        resp = String(prompt(`${k}: `)).toLowerCase();
      }
    }
  }
}
console.log("Bem vindo!!");
while (true) {
  var user = String(prompt("Você está pronto [S/N]? ")).toUpperCase();
  if (user[0] == "N" || user[0] == "S") {
    break;
  }
}
if (user[0] == "N") {
  console.log("Vamos dar um tempo para você se preparar, use-o com sabedoria!");
  while (true) {
    console.log(
      "==============================================================="
    );
    prompt(
      "Assim que estiver pronto pressione a tecla 'ENTER' para continuarmos! "
    );
    console.log(
      "==============================================================="
    );
    break;
  }
} else {
  console.log("Ótimo, vamos começar...");
}
console.log("Primeiramente precisamos de algumas informações sobre você!");
let player = new person();
for (k in player) {
  player[k] = authInfo(k, prompt(`${k}: `));
}
if (player.sexo[0] == "M") {
  player.pronome = "Sr.";
} else {
  player.pronome = "Sr.ª";
}
let dia = 1;
while (true) {
  console.log(
    "O relógio desperta e você nota que dormiu na frente do seu computador, ele esta com a tela azul mas sem nenhuma informação aparente...\nVocê não lembra nada sobre o dia anterior, o que é muito estranho, mas você se encontra atrasado para o trabalho..."
  );
  console.log("[1] - Tomar um café");
  console.log("[2] - Sair correndo para o trabalho");
  console.log(
    "[3] - Faltar ao trabalho, dormir na cama e depois ver o que aconteceu com o computador"
  );
  let choice1 = authChoices(parseInt(prompt("Digite a sua escolha: ")));
  if (choice1 == 1) {
    console.log("Uma escolha um tanto duvidosa...");
    console.log(
      "Você tomou um café para acordar e decidiu ir ao trabalho correndo."
    );
  } else if (choice1 == 3) {
    console.log(
      "Você acordou duas horas depois seu computador segue com a tela azul, porém vê que há uma mensagem no centro da tela!"
    );
    console.log(
      "Você levanta e vai direto ao computador ver o que esta acontecendo!!!"
    );
    console.log("Na tela esta a seguinte mensagem:");
    console.log(`Olá ${player.pronome} ${player.name}!`);
    // continuação da história para a decisão correta
  }
  console.log(
    "Você chegou no trabalho e tomou uma bronca do seu chefe por chegar frequentemente atrasado..."
  );
  console.log("[1] - Pedir desculpas e falar que não irá acontecer novamente");
  console.log("[2] - Simplesmente pedir demissão e voltar pra casa");
  console.log("[3] - Não responder e ir á sua mesa trabalhar normalmente");
  let choice2 = authChoices(parseInt(prompt("Digite a sua escolha: ")));
  if (choice2 == 1 || choice2 == 3) {
    console.log(
      "Você foi até a sua mesa e estava trabalhando novamente, quando derrepente a tela do computador no seu trabalho fica azul e seu telefone toca... "
    );
    console.log(
      'Você atende e ouve uma voz desconhecida falando: "Eles sabem o que você fez e estão atrás de você saia daí agora!" E desliga o telefone.'
    );
    console.log(
      "Você olha para a porta e vê dois guardas federais entrando no escritório onde você trabalha, você rapidamente se abaixa e pensa que tem que tomar uma decisão"
    );
    console.log("[1] - ");
    let choice = authChoices(parseInt(prompt("Digite a sua escolha: ")));
  } else {
    console.log(
      "Ao chegar em casa você se depara com seu computador ainda na tela azul, porém com uma mensagem escrita no centro da tela!"
    );
    console.log(
      "Você vai direto até ele e se depara com a seguinte mensagem: "
    );
    console.log(`Sábia escolha ${player.pronome} ${player.nome}!`);
  }

  if ((escolha = 1)) {
    break;
  }
  dia++;
}
