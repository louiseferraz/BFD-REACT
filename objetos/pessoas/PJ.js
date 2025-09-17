const Pessoa = require('./Pessoa');
const IE = require('./IE/IEclss');

class PJ extends Pessoa {
  #cnpj;
  setCNPJ(cnpj) {
    if (cnpj) {
      if (cnpj.length < 18) {
        return true;
      }
      this.#cnpj = cnpj;
      return true;
    } 
    else {
      return false;
    }
  }
  getCNPJ() {
    return this.#cnpj;
  }

  setEmail(email){
    if(email !== ''){
      if (email.includes('@')&&email.includes(".")){
        super.setEmail(email);
          return true;
      } 
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
  #ie;
  setIE(ie){
    if(ie instanceof IE){
      this.#ie = ie;
      ie.setPJ(this);
      return true;
    }
    else{
      return false;
    }
  }
  getIE(){
    return this.#ie;
  }
}
module.exports = PJ;