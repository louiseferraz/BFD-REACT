const Endereco = require('./Endereco');
const Telefone = require('./Telefone');

class Pessoa{
  #nome;
  #email;
  #nascimento;
  //Relacionamento N-1 Endereco
  #endereco;
  setEndereco(endereco){
    if(endereco instanceof Endereco){
      this.#endereco = endereco;
      endereco.addPessoa(this); //referencia cruzada
      return true;
    }
    else{
      return false;
    }
  }
  getEndereco(){
    return this.#endereco;
  }
  //Relacionamento N-N telefone
  #telefones = []
  addTelefone(telefone){
    if(telefone instanceof Telefone){
      this.#telefones.push(telefone);
      telefone.addPessoa(this);
      return true;
    }
    else{
      return false;
    }
  }
  getTelefones(){
    return this.#telefones;
  }
  //============================
  setNome(nome){
    if(nome){
      this.#nome = nome;
      return true;
    }
    else{
      return false;
    }
  }
  getNome(){
    return this.#nome;
  }
  setEmail(email){
    if(email){
    this.#email = email;
    return true;
  }
  else{
    return false;
  }
  }
  getEmail(){
    return this.#email;
  }

  setNascimento(nascimento){
    if(nascimento){
      this.#nascimento = nascimento;
      return true;
    }
    else{
      return false;
    }
  }
  getNascimento(){
    return this.#nascimento;
  }
}
module.exports = Pessoa;
