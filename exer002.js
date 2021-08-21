console.log('Jogo da advinhação');
const computador = Math.floor(Math.random() * 11);
let user = parseInt(prompt('Digite o numero de sua escolha: '));
if (user == computador){
  console.log('Parabéns, você acertou!')
  console.log(`Você escolheu o numero ${user} e o computador escolheu ${computador}`); 
} else {
  console.log('Você perdeu!')
  console.log(`Você escolheu o numero ${user} e o computador escolheu ${computador}`); 
}