const alice = [23, 69, 32];
const bob = [12, 67, 43];

function comparaPontos(a, b) {
  let pontoP1 = 0;
  let pontoP2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      pontoP1++;
    } else if (a[i] < b[i]) {
      pontoP2++;
    } else continue;
  }
  console.log(pontoP1);
  console.log(pontoP2);

  console.log (pontoP1 == pontoP2 ? "Empate!" : pontoP1 > pontoP2 ? "O jogador A ganhou" : "O jogador B ganhou");
}
 
comparaPontos(alice, bob);

