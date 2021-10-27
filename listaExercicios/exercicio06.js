//6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

const divisao = (a,b) => {
    return `Quociente de ${a}/${b}: ${a/b}\nResto da divisão de ${a} por ${b}: ${a%b}`;
}

console.log(divisao(10,3));