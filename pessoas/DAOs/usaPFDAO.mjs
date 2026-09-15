import PF from '../PF.js';
import PFDAO from './PFDAO.mjs';
import Endereco from '../Endereco.js';
import Telefone from '../Telefone.js';
import Titulo from '../Titulo.js';

const pf = new PF();
pf.setNome('Maria');
pf.setEmail('maria@ifb.edu.br');
pf.setCPF('123.456.789-00');

const end = new Endereco();
end.setLogradouro('Rua das Flores, 100');
end.setCep('72000-000');
pf.setEndereco(end);

const fone1 = new Telefone();
fone1.setDdd('61');
fone1.setNumero('98888-1111');
pf.addTelefone(fone1);

const titulo = new Titulo();
titulo.setNumero('1234156');
titulo.setZona('DF');
titulo.setSecao('01');
pf.setTitulo(titulo);

const pfdao = new PFDAO(pf);
const dados = pfdao.toJSON();
pfdao.saveJSON();

console.log('--- PFDAO: Objeto Literal ---');
console.log(dados);
console.log('--- PFDAO: String JSON ---');
console.log(JSON.stringify(dados));
console.log('--- PFDAO: Recuperado ---');
console.log(pfdao.recoveryJSON());
