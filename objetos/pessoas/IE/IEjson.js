const PJ = require('../PJ');
const PF = require('../PF');
const Aluno = require('../Aluno');

const IE = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,
    pf: null,
    aluno: null,
  
    setNumero: function (numero) {
      if (numero) {
        this.numero = numero;
        return true;
      }
      return false;
    },
    getNumero: function () {
      return this.numero;
    },
  
    setEstado: function (estado) {
      if (estado) {
        this.estado = estado;
        return true;
      }
      return false;
    },
    getEstado: function () {
      return this.estado;
    },
  
    setDataRegistro: function (data) {
      if (data instanceof Date) {
        this.dataRegistro = data;
        return true;
      }
      return false;
    },
    getDataRegistro: function () {
      return this.dataRegistro;
    },
  
    setPJ: function (pj) {
      if (pj instanceof PJ) {
        this.pj = pj;
        return true;
      }
      return false;
    },
    getPJ: function () {
      return this.pj;
    },

    setPF: function (pf) {
      if (pf instanceof PF) {
        this.pf = pf;
        return true;
      }
      return false;
    },
    getPF: function () {
      return this.pf;
    },

    setAluno: function (aluno) {
      if (aluno instanceof Aluno) {
        this.aluno = aluno;
        return true;
      }
      return false;
    },
    getAluno: function () {
      return this.aluno;
    }
  };
  
  /* ------ Exemplo de uso ------
  
  // Criando uma PJ
  const pj = new PJ();
  pj.setCNPJ("12.345.678/0001-99");
  
  // Manipulando o IE (JSON)
  IE.setNumero("123456");
  IE.setEstado("SP");
  IE.setDataRegistro(new Date());
  IE.setPJ(pj);
  
  console.log("Número IE:", IE.getNumero());
  console.log("Estado:", IE.getEstado());
  console.log("Data Registro:", IE.getDataRegistro());
  console.log("PJ vinculada:", IE.getPJ());
  
  const iejson = JSON.stringify(IE);
  console.log(iejson);  */