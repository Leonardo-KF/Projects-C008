const prompt = require("prompt-sync")();

class person {
  constructor(nome, idade, sexo, id) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.id = id;
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
      if (resp[0] == "m" || resp[0] == "f") {
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
