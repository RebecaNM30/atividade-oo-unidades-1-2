const Pessoa = require('./Pessoa');
const IE = require('./IE/IEclss');

class PJ extends Pessoa {
  #cnpj;
  #ie;

  setCNPJ(cnpj) {
    if (cnpj) {
      if (cnpj.length < 18) return false;
      this.#cnpj = cnpj;
      return true;
    }
    return false;
  }
  getCNPJ() {
    return this.#cnpj;
  }

  setEmail(email) {
    if (email !== '' && email.includes('@')) {
      super.setEmail(email);
      return true;
    }
    return false;
  }

  setIE(ie) {
    if (ie instanceof IE) {
      this.#ie = ie;
      ie.setPJ(this);
      return true;
    }
    return false;
  }
  getIE() {
    return this.#ie;
  }
}

module.exports = PJ;
