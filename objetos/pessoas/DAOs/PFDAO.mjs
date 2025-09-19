import {localStorage} from './localStorage.mjs';
import PF from '../PF.js';

export default class PFDAO{
    #pf;
    constructor(pf){
        if(pf instanceof PF){
            this.#pf = pf;
        }
    }

    toJSON(){
        let fones = [];
        for(let fone of this.#pf.getTelefones()){
          fones.push({
            ddd: fone.getDdd(),
            numero: fone.getNumero(),
          });
        }
        return{
          nome: this.#pf.getNome(),
          email: this.#pf.getEmail(),
          cnpj: this.#pf.getCPF(),
          titulo: this.#pf.getTitulo(),
          endereco: {
            logradouro: this.#pf.getEndereco().getLogradouro(),
            cep: this.#pf.getEndereco().getCep(),
          },
          telefone: fones,
          ie:{
            numero: this.#pf.getIE().getNumero(),
            estado: this.#pf.getIE().getEstado(),
            dataRegistro: this.#pf.getIE().getDataRegistro(),
          }
        };
    }

    saveJSON(){
      localStorage.setItem("pf", JSON.stringify(this.toJSON()));
    }
    
    recoveryJSON(){
      return JSON.parse(localStorage.getItem("pf"));
    }
}