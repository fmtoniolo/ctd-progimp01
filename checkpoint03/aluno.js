let aluno = {
  Aluno: function (_nome, _faltas, _notas) {
    this.nome = _nome;
    this.qtdFaltas = _faltas;
    this.notas = _notas;
    this.calcularMedia = function (a) {
      for (let j of listaAlunos) {
        if (listaAlunos[j].nome === a) {
          let media = 0;
          for (let i = 0; i < this.notas.length; i++) {
            media += this.notas[i];
          }
        }
      }
      return media / this.notas.length;
    };
    this.faltas = function (incFaltas = 1) {
      incFaltas != 1
        ? console.log(this.qtdFaltas + incFaltas)
        : console.log(this.qtdFaltas++);
    };
  },
};

let aluno1 = new aluno.Aluno("Felipe", 5, [6.5, 7.2, 5.5, 8]);
let aluno2 = new aluno.Aluno("José", 7, [4.8, 8.6, 7.1, 6.3]);
let aluno3 = new aluno.Aluno("Joana", 0, [9.8, 8.6, 8.1, 9.3]);
let aluno4 = new aluno.Aluno("Nazareth", 3, [3.4, 1, 10, 4.2]);
let aluno5 = new aluno.Aluno("Carlos", 4, [8.4, 7, 7, 6, 4]);

let listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

module.exports = {
  aluno: aluno,
  listaAlunos: listaAlunos,
};
