function somaArray(a) {
    var soma = 0;
    var i = 0;
  while (i < a.length){
      soma += a[i];
      i++;
  }
  console.log(soma);
}
b = [2, 5, 3, 8, 10, 20, 30, -8];
somaArray(b);