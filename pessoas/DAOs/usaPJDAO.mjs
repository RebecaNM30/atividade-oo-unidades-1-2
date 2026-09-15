import PJ from '../PJ.js';
import PJDAO from './PJDAO.mjs';
import Endereco from '../Endereco.js';
import Telefone from '../Telefone.js';
import IE from '../IE/IEclss.js';

const pj = new PJ();
pj.setNome('Pedro');
pj.setEmail('pedro@ifb.edu.br');
pj.setCNPJ('1234567890/0001-99');

const end = new Endereco();
end.setLogradouro('QNM 40');
end.setCep('12345-678');
pj.setEndereco(end);

const fone1 = new Telefone();
fone1.setDdd('61');
fone1.setNumero('99999-8888');
pj.addTelefone(fone1);

const fone2 = new Telefone();
fone2.setDdd('62');
fone2.setNumero('99999-7777');
pj.addTelefone(fone2);

const ie = new IE();
ie.setNumero('123456');
ie.setEstado('SP');
ie.setDataRegistro(new Date());
pj.setIE(ie);

const pjdao = new PJDAO(pj);
const dados = pjdao.toJSON();
pjdao.saveJSON();

console.log('--- PJDAO: Objeto Literal ---');
console.log(dados);
console.log('--- PJDAO: String JSON ---');
console.log(JSON.stringify(dados));
console.log('--- PJDAO: Recuperado ---');
console.log(pjdao.recoveryJSON());
