//toUpperCase
function converteEmMaiusc(string) {
    let maiusc = string.toUpperCase()
    return console.log(maiusc)
}
converteEmMaiusc("aaaaaaa")

//typeof
function tipo(entrada){
    return console.log(typeof entrada);
}

tipo(true)

//Math
function circ(raio) {
    let result = 2 * Math.PI * raio
    return console.log("A circunferência de um cículo de raio " +raio +" é de valor igual a " +result.toFixed(2) +".");
}
circ(5)