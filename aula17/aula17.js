/* Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares. */

let numerosPares = [2,4,6,8,10,12];

let impares = numerosPares.map(function (imp){
    return imp % 2 != 0;
           
})
console.log(impares);
//-------------------------------------------------------------------------------------------

/* Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria. */

let nomes = ["Maria", "José", "Abraão", "Maria", "Joana", "João"];

let soMaria = nomes.filter(function(a){
    if (a == "Maria") return a;
});
console.log("Todos os nomes: " + nomes);
console.log("Filter Maria: " + soMaria);


/* Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7” */

let arrNum = [1,5,4,8,6,7,6,1,5];

let formatNum = arrNum.reduce(function(acc, elem){
    return `${acc} - ${elem}`;
})

console.log(formatNum);

/* Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
 */