console.log("--------- iniciando calculadora ---------")
//soma
console.log("--------- soma ---------")
function soma(x, y){
    return x + y;
}
console.log(soma(5, 8))

//subtração
console.log("--------- subtração ---------")
function sub(x, y) {
    return x - y;
}
console.log(sub(5, 8))

//multiplicação
console.log("--------- multiplicação ---------")
function mult(x, y) {
    return x * y;
}
console.log(mult(5, 8))

//divisão
console.log("--------- divisão ---------")
function divi(x, y) {
    return x / y;
}
console.log(divi(40, 2))

//quadrado do numero
console.log("--------- quadrado ---------")
function quadrado(numero) {
    return mult(numero, numero);
}
console.log(quadrado(5))

//média de três números
console.log("--------- média de 3 números ---------")
function mediatres(a, b, c) {
    let sum = soma(a, b) + c;
    return divi(sum, 3);
}
console.log(mediatres(5, 8, 8))

//calcular porcentagem
console.log("--------- porcentagem ---------")
function porcentagem(total, porc) {
    let parcial = mult(total, porc);
    return divi(parcial, 100);
}
console.log(porcentagem(300, 15))

//gerador de porcentagem ---ARRUMAR
function geradorPorcentagem(x, y) {
    let part = divi(x, y);
    return divi(part, 100).toFixed(2);
}
console.log(geradorPorcentagem(2,200))