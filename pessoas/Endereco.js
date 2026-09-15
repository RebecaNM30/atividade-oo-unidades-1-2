class Endereco {
  #logradouro;
  #cep;
  #pessoas = [];

  addPessoa(pessoa) {
    if (pessoa) {
      this.#pessoas.push(pessoa);
      return true;
    }
    return false;
  }
  getPessoas() {
    return this.#pessoas;
  }

  setLogradouro(logradouro) {
    if (logradouro) {
      this.#logradouro = logradouro;
      return true;
    }
    return false;
  }
  getLogradouro() {
    return this.#logradouro;
  }

  setCep(cep) {
    if (cep) {
      this.#cep = cep;
      return true;
    }
    return false;
  }
  getCep() {
    return this.#cep;
  }
}

module.exports = Endereco;
