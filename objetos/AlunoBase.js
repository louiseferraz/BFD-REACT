const AlunoBase = require('./escola/AlunoBase')

joao = new AlunoBase();
joao.setMatricula(12345);
console.log(joao.getMatricula());