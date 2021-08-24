const prompt = require('prompt-sync')();
function valdados(v1, ind){
    // o parametro v1 vai validar o input do usuario como S ou N, caso o input do usuario seja qualquer outra informação
    // o programa não irá deixar o usuario avançar
    // o parametro ind irá o indice de uma pergunta em um array de perguntas
    while (true){
      if (v1[0] == 'S' || v1[0] == 'N'){
        if (v1[0]=='S'){
        return 1;
        } else {
          return 0;
        };
      } else {
        console.log('=================================================');
        console.log('Opção inválida! Por favor, tente novamente!');
        console.log('Não fique nervoso!');
        v1 = String(prompt(answers[ind])).toUpperCase();
      };
    };
  };
  answers = ['Você ligou para a vítima [S/N]? ', 'Você esteve no local do crime [S/N]? ', 'Você mora perto da vítima [S/N]? ', 'Você devia para a vítima [S/N]? ', 'Você trabalhou com a vítima [S/N]? '] // lista de perguntas
  console.log('Jogo do Detetive!');
  console.log('Iremos fazer algumas perguntas para verificar seu envolvimento em um caso de assassinato!');
  let res = 0;
  for (let i = 0; i < 5; i++){ 
  console.log('=================================================');
  let p1 = valdados((String(prompt(answers[i])).toUpperCase()), i); 
  if (p1 == 1){
    res += 1
    };
  };
   let cond = ''; // abaixo faremos a verificação da condição de acordo com o numero de respostas positivas da variavel res
  if (res === 2){ 
    cond = 'Suspeito(a)!';
  }else if(res === 4 || res === 3){
    cond = 'Cúmplice!';
  }else if (res > 4){
    cond = 'ASSASSINO!!!';
  } else {
    cond = 'Inocente!';
  };
  console.log(`Você respondeu de forma positiva a ${res} perguntas! Isso classifica você como: ${cond}`);
  
