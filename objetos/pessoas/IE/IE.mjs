import Aluno from "../Aluno.js";
import PJ from "../PJ.js";
import PF from "../PF.js";

export class IEclss {
  #numero;
  #estado;
  #dataRegistro;
  #pj;
  #pf;
  #aluno;

  setNumero(numero) {
    if (numero) {
      this.#numero = numero; return true; 
    } 
    else{
      return false;}

  }
  getNumero() {
    return this.#numero; 
  } 

  setEstado(estado) {
    if (estado) { 
      this.#estado = estado; return true; 
    } 
    else{
      return false; 
    }
  }
  getEstado() { 
    return this.#estado; 
  } 

  setDataRegistro(dataregistro) { 
    if (dataregistro instanceof Date) { 
      this.#dataRegistro = dataregistro; return true; 
    } 
    else{
      return false; 
    }
  } 
  getDataRegistro() { 
    return this.#dataRegistro; 
  }

  setPJ(pj) { 
    if (pj instanceof PJ) { this.#pj = pj; return true; 
    } 
    else{
      return false; 
    }
  }
  getPJ() { 
    return this.#pj; 
  }
  
  setPF(pf) { 
    if (pf instanceof PF) { this.#pf = pf; return true; 
    } 
    else{
      return false; 
    }
  }
  getPF() { 
    return this.#pf; 
  }

  setAluno(aluno) { 
    if (aluno instanceof Aluno) { this.#aluno = aluno; return true; 
    } 
    else{
      return false; 
    }
  }
  getAluno() { 
    return this.#aluno; 
  }
}
  export default function IEfunc() {
    let dados = { 
      numero: null, estado: null, dataRegistro: null, pj: null ,pf: null, aluno: null,
    };

    function setNumero(numero) { 
      if (numero) { dados.numero = numero; return true; 
      } 
      return false; 
    }
    
    function getNumero() { 
      return dados.numero; 
    }
    
    function setEstado(estado) { 
      if (estado) { 
        dados.estado = estado; return true; 
      } 
      return false; 
    }
    function getEstado() { 
      return dados.estado; 
    }

    function setDataRegistro(data) { 
      if (data instanceof Date) { 
        dados.dataRegistro = data; return true; 
      } 
      return false; } 
    function getDataRegistro() { 
      return dados.dataRegistro; 
    }

    function setPJ(pj) { 
      if (pj instanceof PJ || (pj && pj.cnpj)) { 
        dados.pj = pj; return true; } return false; 
      }
    function getPJ() { 
      return dados.pj; 
    }

    function setPF(pf) { 
      if (pf instanceof PF || (pf && pf.cpf)) { 
        dados.pf = pf; return true; } return false; 
      }
    function getPF() { 
      return dados.pf; 
    }

    function setAluno(aluno) { 
      if (aluno instanceof Aluno || (aluno && aluno.cpf)) { 
        dados.aluno = aluno; return true; } return false; 
      }
    function getAluno() { 
      return dados.aluno; 
    }

    return { setNumero, getNumero, setEstado, getEstado, setDataRegistro, getDataRegistro, setPJ, getPJ, setPF, getPF, setAluno, getAluno,};
}

  export const IEjson = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,
    pf: null,
    aluno: null,
  
    setNumero(numero) { 
      if (numero) { 
        this.numero = numero; return true; 
      } 
      return false; 
    },
    getNumero() { 
      return this.numero; 
    },

    setEstado(estado) {
       if (estado) { this.estado = estado; return true; 
      } 
      return false; 
    }, 
    getEstado() { 
      return this.estado; 
    },

    setDataRegistro(data) { 
      if (data instanceof Date) {
        this.dataRegistro = data; return true; } return false; 
      }, 
    getDataRegistro() { 
      return this.dataRegistro; 
    },

    setPJ(pj) { 
      if (pj instanceof PJ || (pj && pj.cnpj)) { 
        this.pj = pj; return true; } return false; 
      },
    getPJ() { 
      return this.pj; 
    },

    setPF(pf) { 
      if (pf instanceof PF || (pf && pf.cpf)) { 
        dados.pf = pf; return true; } return false; 
      },
    getPF() { 
      return this.pf; 
    },

    setAluno(aluno) { 
      if (aluno instanceof Aluno || (aluno && aluno.cpf)) { 
        dados.aluno = aluno; return true; } return false; 
      },
    getAluno() { 
      return this.aluno; 
    }
  }


