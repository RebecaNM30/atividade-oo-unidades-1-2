import { localStorage } from './localStorage.mjs';
import PF from '../PF.js';

export default class PFDAO {
  #pf;

  constructor(pf) {
    if (pf instanceof PF) this.#pf = pf;
  }

  toJSON() {
    let fones = [];
    for (let fone of this.#pf.getTelefones()) {
      fones.push({ ddd: fone.getDdd(), numero: fone.getNumero() });
    }
    const obj = {
      nome: this.#pf.getNome(),
      email: this.#pf.getEmail(),
      cpf: this.#pf.getCPF(),
      endereco: {
        logradouro: this.#pf.getEndereco().getLogradouro(),
        cep: this.#pf.getEndereco().getCep(),
      },
      telefones: fones,
    };
    const titulo = this.#pf.getTitulo();
    if (titulo) {
      obj.titulo = {
        numero: titulo.getNumero(),
        zona: titulo.getZona(),
        secao: titulo.getSecao(),
      };
    }
    return obj;
  }

  saveJSON() {
    localStorage.setItem('pf', JSON.stringify(this.toJSON()));
  }

  recoveryJSON() {
    return JSON.parse(localStorage.getItem('pf'));
  }
}
