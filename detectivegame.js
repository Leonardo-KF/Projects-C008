function valdados(v1){
  // o parametro v1 vai validar o input do usuario como S ou N, caso o input do usuario seja qualquer outra informação
  // o programa não irá deixar o usuario avançar
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
      v1 = String(prompt('Digite a sua resposta novamente [S/N]: ')).toUpperCase();
    };
  };
};

console.log('Jogo do Detetive!');
console.log('Iremos fazer algumas perguntas para verificar seu envolvimento no caso de assassinato!');
console.log('=================================================');
let p1 = valdados(String(prompt('Você ligou para a vítima [S/N]? ')).toUpperCase()); 
console.log('=================================================');
let p2 = valdados(String(prompt('Você esteve no local do crime [S/N]? ')).toUpperCase());
console.log('=================================================');
let p3 = valdados(String(prompt('Você mora perto da vítima [S/N]? ')).toUpperCase());
console.log('=================================================');
let p4 = valdados(String(prompt('Você devia para a vítima [S/N]? ')).toUpperCase());
console.log('=================================================');
let p5 = valdados(String(prompt('Você trabalhou com a vítima [S/N]? ')).toUpperCase());
console.log('=================================================');
let res = (p1 + p2 + p3 + p4 + p5);
let cond = '';
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
