let notas = [];
let acrescentar = notas.split()
let somaDasNotas = 0;

for (let nota of notas) {
  somaDasNotas += nota;
}


const media = somaDasNotas / notas.length;
console.log(acrescentar)

console.log(`A média das notas é ${media}.`);
