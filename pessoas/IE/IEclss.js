class IE {
  #numero;
  #estado;
  #dataRegistro;
  #pj;

  setNumero(numero) {
    if (numero) {
      this.#numero = numero;
      return true;
    }
    return false;
  }
  getNumero() {
    return this.#numero;
  }

  setEstado(estado) {
    if (estado) {
      this.#estado = estado;
      return true;
    }
    return false;
  }
  getEstado() {
    return this.#estado;
  }

  setDataRegistro(data) {
    if (data instanceof Date) {
      this.#dataRegistro = data;
      return true;
    }
    return false;
  }
  getDataRegistro() {
    return this.#dataRegistro;
  }

  setPJ(pj) {
    if (pj) {
      this.#pj = pj;
      return true;
    }
    return false;
  }
  getPJ() {
    return this.#pj;
  }
}

module.exports = IE;
