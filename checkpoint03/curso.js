const bd = require("./aluno");
let aprovados = [];

let curso = {
  nomeDoCurso: "CTD",
  notaDeAprovacao: 7,
  faltasMaximas: 10,
  listaDeEstudantes: bd.listaAlunos,
  adicionaAluno: function (nome, faltas, notas) {
    let novoAluno = new bd.aluno(nome, faltas, notas);
    this.listaDeEstudantes.push(novoAluno);
    console.log(
      "Adicionado novo aluno: " + novoAluno.nome + ". Lista atualizada:"
    );
    return this.listaDeEstudantes;
  },
  aprovado: function (nome) {
    for (let i = 0; i < this.listaDeEstudantes.length; i++) {
      if (this.listaDeEstudantes[i].nome === nome) {
        if (
          this.listaDeEstudantes[i].calcularMedia() >=
            this.notaDeAprovacao &&
          this.listaDeEstudantes[i].qtdFaltas < this.faltasMaximas
        ) {
          aprovados.push(true);
          return true;
        } else if (
          this.listaDeEstudantes[i].calcularMedia() >=
            this.notaDeAprovacao * 1.1 &&
          this.listaDeEstudantes[i].qtdFaltas == this.faltasMaximas
        ) {
          aprovados.push(true);
          return true;
        } else {
          aprovados.push(false)
          return false;
        }
      } 
    }
    return `Aluno ${nome} não encontrado.`;
  },
  listaAprovados: function () {
    return aprovados;
  }
}
console.log(curso.listaAprovados());
//console.log(curso.listaDeEstudantes);
