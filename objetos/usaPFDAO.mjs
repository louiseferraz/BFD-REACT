import PF from './pessoas/PF.js';
import PFDAO from './pessoas/DAOs/PFDAO.mjs';
import Endereco from './pessoas/Endereco.js';
import Telefone from './pessoas/Telefone.js';   
import IE from './pessoas/IE/IEclss.js';
import Titulo from './pessoas/Titulo.js';

const pf = new PF();
pf.setNome("Pedro");
pf.setEmail("pedro@ifb.edu.br");
pf.setCPF("123456789-10");

const tit = new Titulo();
tit.setNumero("1234567891010");
tit.setZona("123");
tit.setSecao("1234");
pf.setTitulo(tit);

const end = new Endereco();
end.setLogradouro("QNM 40");
end.setCep("12345-678");
pf.setEndereco(end);

const fone = new Telefone();
fone.setDdd("61");
fone.setNumero("99999-8888");
pf.addTelefone(fone);

const fone2 = new Telefone();
fone2.setDdd("62");
fone2.setNumero("99999-7777");
pf.addTelefone(fone2);

const ie = new IE();
ie.setNumero('123456');
ie.setEstado('SP');
ie.setDataRegistro(new Date());
pf.setIE(ie);

const pfdao = new PFDAO(pf);

var x = pfdao.toJSON();
pfdao.saveJSON();

console.log(x);
console.log(JSON.stringify(x));
console.log(pfdao.recoveryJSON());