const PF = require('./PF');

class Aluno extends PF{
  #matricula;
  #curso;
  
  setMatricula(matricula){
    if(matricula){
      if((matricula.length===8) && (matricula.startswith('20'))){
      this.#matricula = matricula;
      return true;}
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
  getMatricula(){
    return this.#matricula;
  }
  setCurso(curso){
    if((curso === 'ADS') || (curso === 'SI')){
      this.#curso = curso;
      return true;
    }
    else{
      return false;
    }
  }
  getCurso(){
    return this.#curso;
  }
}
module.exports = Aluno;
