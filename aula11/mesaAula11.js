let a = [5, 8, 4, 9, 5];
let b = [8, 7, 8, 6, 8];
let c = [7, 5, 10, 8, 3];
let participantes = [a, b, c];

//representar cada participante com suas pontuações

for (let i = 0; i < 3; i++) {
  console.log(`Participante ${i + 1}\n Notas: ${participantes[i]}`);
}

//criar função pontuacaoMedia que recebe um participante como parâmetro e retorna a pontuação média dele
var soma = 0;
function pontuacaoMedia(part) {
  for (var j = 0; j < part.length; j++) {
    soma += part[j];
  }
  var media = soma / part.length;
  return media;
}

//criar função pontuacaoMaior que recebe um participante como parâmetro e retorna a nota mais alta dele

function pontuacaoMaior(part) {
  for (let j = 0; j < part.length; j++) {
    if (part[j] > part[j - 1]) {
      var maiorNota = part[j];
    }
  }
  return maiorNota;
}

//função competicao

function competicao(part1, part2) {
  let mediaP1 = pontuacaoMedia(part1);
  let mediaP2 = pontuacaoMedia(part2);
  if (mediaP1 > mediaP2) {
    console.log(`Maior média: ${mediaP1}`);
  } else if (mediaP2 > mediaP1) {
    console.log(`Maior média: ${mediaP2}`);
  } else console.log("Empate!");
}

console.log(competicao(a, b));
console.log(pontuacaoMedia(a));
