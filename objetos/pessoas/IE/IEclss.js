const PJ = require('../PJ');
const PF = require('../PF');
const Aluno = require ('../Aluno');

class IE{
  #numero;
  #estado;
  #dataRegistro;

  setNumero(numero){
    if(numero){
      this.#numero = numero;
      return true;
    }
    else{
      return false;
    }
  }
  getNumero(){
    return this.#numero;
  }

  setEstado(estado){
    if(estado){
      this.#estado = estado;
      return true;
    }
    else{
      return false;
    }
  }
  getEstado(){
    return this.#estado;
  }

  setDataRegistro(dataregistro){
    if(dataregistro){
      this.#dataRegistro = dataregistro;
      return true;
    }
    else{
      return false;
    }
  }
  getDataRegistro(){
    return this.#dataRegistro;
  }

  #pj;
  setPJ(pj){
    if(pj){
      this.#pj = pj;
      return true;
    }
    else{
      return false;
    }
  }
  getPJ(){
    return this.#pj;
  }

  #pf;
  setPF(pf){
    if(pf){
      this.#pf = pf;
      return true;
    }
    else{
      return false;
    }
  }
  getPF(){
    return this.#pf;
  }

  #aluno;
  setAluno(aluno){
    if(aluno){
      this.#aluno = aluno;
      return true;
    }
    else{
      return false;
    }
  }
  getAluno(){
    return this.#aluno;
  }

}

module.exports = IE;