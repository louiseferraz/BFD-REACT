const Aluno = require('./escola/Aluno');

const joao = new Aluno();
 
joao.escola = "IFB";
joao.setMatricula(12345);
joao.setCurso("Programação de FrontEnd");

console.log(joao.getMatricula());
console.log(joao.getCurso());
console.log(`Escola : ${joao.escola}`);