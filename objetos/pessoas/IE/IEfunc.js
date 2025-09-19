const PJ = require('../PJ');
const PF = require('../PF');
const Aluno = require('../Aluno');

function IE() {
    let dados = {
      numero: null,
      estado: null,
      dataRegistro: null,
      pj: null,
      pf: null,
      aluno: null
    };
  
    function setNumero(numero) {
      if (numero) { dados.numero = numero; return true; }
      return false;
    }
    function getNumero() { return dados.numero; }
  
    function setEstado(estado) {
      if (estado) { dados.estado = estado; return true; }
      return false;
    }
    function getEstado() { return dados.estado; }
  
    function setDataRegistro(data) {
      if (data instanceof Date) { dados.dataRegistro = data; return true; }
      return false;
    }
    function getDataRegistro() { return dados.dataRegistro; }
  
    function setPJ(pj) {
      if (pj) {
        dados.pj = pj; 
        return true;
      }
      return false;
    }
    function getPJ() { return dados.pj; }

    function setPF(pf) {
      if (pf) {
        dados.pf = pf; 
        return true;
      }
      return false;
    }
    function getPF() { return dados.pf; }

    function setAluno(aluno) {
      if (aluno) {
        dados.aluno = aluno; 
        return true;
      }
      return false;
    }
    function getAluno() { return dados.aluno; }
  
    return {
      setNumero, getNumero,
      setEstado, getEstado,
      setDataRegistro, getDataRegistro,
      setPJ, getPJ,
      setPF, getPF,
      setAluno, getAluno
    };
  
  }
  
  /* ------ Exemplo de uso ------
  const pj = new PJ();
  pj.setCNPJ('123455678');
  
  const ie = IE();
  
  ie.setNumero("123456");
  ie.setEstado("SP");
  ie.setDataRegistro(new Date());
  ie.setPJ(pj);
  
  
  console.log("Número IE:", ie.getNumero());
  console.log("Estado:", ie.getEstado());
  console.log("Data Registro:", ie.getDataRegistro());
  console.log("CNPJ:", ie.getPJ());  */