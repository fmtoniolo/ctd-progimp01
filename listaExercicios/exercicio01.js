//1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.
function area(b, h) {
    return `Base: ${b}\n Altura: ${h}\n Área: ${b*h}`;
}

//console.log(area(10,2));

function perimetro(b, h) {
    return `Base: ${b}\n Altura: ${h}\n Perímetro: ${2*(b+h)}`;
}

console.log(perimetro(10,2));