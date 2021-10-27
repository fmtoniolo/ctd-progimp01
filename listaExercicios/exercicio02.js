//2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.

function area(l) {
    return `Lado: ${l}\n Área: ${l*l}`;
}

//console.log(area(5));

function perimetro(l) {
    return `Lado: ${l}\n Perímetro: ${4*l}`;
}

console.log(perimetro(5));