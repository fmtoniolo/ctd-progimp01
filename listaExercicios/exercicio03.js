//3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

const pi = 3.14;
function area(r) {
    return `Raio: ${r}\n Área: ${pi*(r**2)}`;
}

//console.log(area(5));

function perimetro(r) {
    return `Raio: ${r}\n Perímetro: ${2*pi*r}`;
}

console.log(perimetro(5));