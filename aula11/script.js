/* //olá mundo 5 vezes
for (let i = 0; i < 5; i++) {
  console.log("Olá Mundo");
}

//mostrar apenas números ímpares de 1 a 10
for (let j = 0; j < 10; j++) {
  let x = j / 2;
  if (Number.isInteger(x) == false) {
    console.log(j);
  }
} */
//tabuada
for(let i = 1; i<=10; i++) {
    console.log(`\nTabuada do ${i}\n`);
    for (let j = 0; j <= 10; j++){
        let x = i*j;
        console.log(`${i} x ${j} = ${x}`);
    }
}