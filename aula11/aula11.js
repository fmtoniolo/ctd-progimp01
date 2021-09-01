/* let pelicula = ["star wars", "totoro", "rocky", "pulp fiction", "a vida é bela"]
for (let i = 0; i < pelicula.length; i++) {
    pelicula[i] = pelicula[i].toUpperCase();
    console.log(pelicula[i]);
}  */

let asiaScores = [8,10,6,9,10,6,6,8,4];
let euroScores = [8,10,6,8,10,6,7,9,5];
let compara = [];

for(let i=0; i < asiaScores.length; i++) {
    compara[i] = asiaScores[i] === euroScores[i];
}
console.log(compara);
console.log(asiaScores);
console.log(euroScores);