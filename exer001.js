console.log('Programa de reajuste! ');
let sal = parseFloat(prompt('Digite seu salário: R$'));
let pct = 0
if (sal <= 280) {
  pct = 20
} else if (280 <= sal <= 700){ 
  pct = 15
} else if (700 <= sal <= 1500){
  pct = 10
} else{
  pct = 5
};

console.log(`O seu salário atual é de: ${sal}`);
console.log(`Você receberá um aumento de ${pct}%`);
console.log(`Você receberá um aumento de: R$${aumt*(pct/100)}`);
console.log(`O seu novo salário será de: R$${(sal(pct/100)).toFixed(2)}`);