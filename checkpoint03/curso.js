const aluno = require("./aluno");

let curso = {
  nomeDoCurso: "CTD",
  notaDeAprovacao: 7,
  faltasMaximas: 10,
  listaDeEstudantes: aluno.listaAlunos,
  adicionaAluno: function (nome, faltas, notas) {
    let novoAluno = new aluno.aluno.Aluno(nome, faltas, notas);
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
          this.listaDeEstudantes[i].calcularMedia(nome) >=
            this.notaDeAprovacao &&
          this.listaDeEstudantes[i].faltas < this.faltasMaximas
        ) {
          return true;
        } else if (
          this.listaDeEstudantes[i].calcularMedia(nome) >=
            this.notaDeAprovacao * 1.1 &&
          this.listaDeEstudantes[i].faltas == this.faltasMaximas
        ) {
          return true;
        } else {
          return false;
        }
      } else return `Aluno ${nome} não encontrado.`;
    }
  },
  listaAprovados: function () {
    let aprovados = [];
    for (apr of this.listaDeEstudantes) {
      if (this.aprovado() == true) {
        aprovados.push(true);
      } else aprovados.push(false);
    }
    return aprovados;
  },
};
