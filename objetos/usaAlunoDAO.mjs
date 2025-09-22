import Aluno from './pessoas/Aluno.js';
import AlunoDAO from './pessoas/DAOs/AlunoDAO.mjs';
import Endereco from './pessoas/Endereco.js';
import Telefone from './pessoas/Telefone.js';   
import Titulo from './pessoas/Titulo.js';

const aluno = new Aluno();
aluno.setNome("Pedro");
aluno.setEmail("pedro@ifb.edu.br");
aluno.setCPF("123456789-10");
aluno.setMatricula("20250001");
aluno.setCurso("ADS");

const tit = new Titulo();
tit.setNumero("1234567891010");
tit.setZona("123");
tit.setSecao("1234");
aluno.setTitulo(tit);


const end = new Endereco();
end.setLogradouro("QNM 40");
end.setCep("12345-678");
aluno.setEndereco(end);

const fone = new Telefone();
fone.setDdd("61");
fone.setNumero("99999-8888");
aluno.addTelefone(fone);

const fone2 = new Telefone();
fone2.setDdd("62");
fone2.setNumero("99999-7777");
aluno.addTelefone(fone2);

const alunodao = new AlunoDAO(aluno);

var x = alunodao.toJSON();
alunodao.saveJSON();

console.log(x);
console.log(JSON.stringify(x));
console.log(alunodao.recoveryJSON());