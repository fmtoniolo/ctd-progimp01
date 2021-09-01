/* function teste1(x,y){
    return y - x;    
}

//console.log(teste1(40,10))

function teste2(x,y){
    return x * 2;
    console.log(x);
    return x / 2;
}
teste2(10) */

//polegadas para centímetros
function converter(pol){
    let cm = pol * 2.54
    return cm;
}

console.log(converter(1))

// receber uma sting e converter em url
function convertUrl(texto){
    let url = "http://www."+texto+".com.br"
    return url;
}

console.log(convertUrl("digitalhouse"))

//recebe uma string e retorna a mesma frase com uma exclamação no final
function exclamacao(frase){
    let resultado = frase+"!";
    return resultado;
}

console.log(exclamacao("Estamos programando"))

//calcular a idade dos dogs
function idadeDogs(idade){
    let idadeHumano = idade * 7;
    return idadeHumano;
}

console.log("Seu dog tem " +idadeDogs(7) +" anos!");

//calcular o valor da hora de trabalho com o salário como parâmetro
function calcHora(salario){
    let valorHora = salario / 160;
    return valorHora.toFixed(2);
}

console.log("O valor da sua hora de trabalho é de " +calcHora(2800) + " reais.")

//calcular IMC
function calcImc(peso, altura){
    let imc = peso / (altura*altura);
    return imc.toFixed(2);
}

console.log("O seu Índice de Massa Corporal é de " +calcImc(64, 1.70) +".")
