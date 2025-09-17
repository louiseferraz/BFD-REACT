const Pessoa = require('./Pessoa');
const PF = require('./PF');
const PJ = require('./PJ');
const Aluno = require('./Aluno')
const Endereco = require('./Endereco')
const Telefone = require('./Telefone')

//teste pessoa

const x = new Pessoa();
var resposta = x.setNome("Leandro");
console.log(resposta);
if(resposta){
  console.log(x.getNome());
}
else{
  console.log("Nome Vazio!");
}
var resposta = x.setEmail("leandro@gmail.com");
console.log(resposta);
if(resposta){
  console.log(x.getEmail());
}
else{
  console.log("Email vazio!");
}
var resposta = x.setNascimento("10/03/1970");
console.log(resposta);
if(resposta){
  console.log(x.getNascimento());
}
else{
  console.log("Data de nascimento vazia!")
}

//teste PF

const y = new PF();
var resposta = y.setNome('Leandro');
if(resposta){
  console.log(y.getNome());
}
else{
  console.log("Nome Invalido.")
}
var resposta = y.setEmail('leandro@gmail.com');
if(resposta){
  console.log(y.getEmail());
}
else{
  console.log("E-mail Invalido.")
}
var resposta = y.setCPF('123.456.789-10');
if(resposta){
  console.log(y.getCPF());
}
else{
  console.log("CPF Invalido.")
}

//teste PJ

const z = new PJ();

var resposta = z.setCNPJ('123456789123456789');
console.log(resposta);
resposta = z.setEmail('teste@teste.com');
console.log(resposta);

//teste Aluno

const a = new Aluno();

var resposta = a.setMatricula('2025123456');
console.log(resposta);
resposta = a.setCurso('ADS');
console.log(a.getMatricula);
console.log(a.getCurso);

//teste Endereco

const end = new Endereco();
end.setLogradouro('QNM 40')
const obj = new Pessoa();
obj.setNome('José');
obj.setEndereco(end);
console.log(obj.getNome());
console.log(obj.getEndereco().getLogradouro())

// teste Telefone

const fone1 = new Telefone();
const fone2 = new Telefone();
fone1.setNumero('91234-5678');
fone2.setNumero('98765-4321');
obj.addTelefone(fone1);
obj.addTelefone(fone2);
console.log(obj.getTelefones());
end.addPessoa(obj);
console.log(end.getPessoas());
console.log(fone1.getPessoas());