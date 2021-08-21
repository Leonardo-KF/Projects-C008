console.log('Caixa Elêtronico');
let valor = parseInt(prompt('Digite o valor que deseja sacar: '));

  cem = parseInt(valor / 100)
  valor = (valor % 100)

  cinq = parseInt(valor / 50)
  valor = valor % 50

  dez = parseInt(valor / 10)
  valor = valor % 10

  cin = parseInt(valor / 5)
  valor = valor % 5

  um = (valor / 1)
  valor = valor % 1
console.log(`Você irá receber ${cem} notas de 100R$ `);
console.log(`Você irá receber ${cinq} notas de 50R$ `);
console.log(`Você irá receber ${dez} notas de 10R$ `);
console.log(`Você irá receber ${cin} notas de 5R$ `);
console.log(`Você irá receber ${um} notas de 1R$ `);