let Aluno = function (_nome, _faltas, _notas) {
  this.nome = _nome;
  this.qtdFaltas = _faltas;
  this.notas = _notas;
  this.calcularMedia = function () {
        let media = 0;
        for (let i = 0; i < this.notas.length; i++) {
          media += this.notas[i];
      }
    return media / this.notas.length;
  }
  this.faltas = function (incFaltas = 1) {
    incFaltas != 1
      ? console.log(this.qtdFaltas + incFaltas)
      : console.log(this.qtdFaltas++);
  };
};

let aluno1 = new Aluno("Felipe", 5, [6.5, 7.2, 5.5, 8]);
let aluno2 = new Aluno("José", 7, [4.8, 8.6, 7.1, 6.3]);
let aluno3 = new Aluno("Joana", 0, [9.8, 8.6, 8.1, 9.3]);
let aluno4 = new Aluno("Nazareth", 3, [3.4, 1, 10, 4.2]);
let aluno5 = new Aluno("Carlos", 4, [8.4, 7, 7, 6, 4]);

let listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

//console.log(listaAlunos);

module.exports = {
  aluno: Aluno,
  listaAlunos: listaAlunos,
};
