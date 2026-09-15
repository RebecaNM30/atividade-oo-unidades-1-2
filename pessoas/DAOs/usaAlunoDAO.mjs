import Aluno from '../Aluno.js';
import AlunoDAO from './AlunoDAO.mjs';
import Endereco from '../Endereco.js';
import Telefone from '../Telefone.js';

const aluno = new Aluno();
aluno.setNome('João');
aluno.setEmail('joao@ifb.edu.br');
aluno.setCPF('111.222.333-44');
aluno.setMatricula('20240012');
aluno.setCurso('ADS');

const end = new Endereco();
end.setLogradouro('QNM 40, Área Especial');
end.setCep('72210-000');
aluno.setEndereco(end);

const fone1 = new Telefone();
fone1.setDdd('61');
fone1.setNumero('97777-3333');
aluno.addTelefone(fone1);

const alunodao = new AlunoDAO(aluno);
const dados = alunodao.toJSON();
alunodao.saveJSON();

console.log('--- AlunoDAO: Objeto Literal ---');
console.log(dados);
console.log('--- AlunoDAO: String JSON ---');
console.log(JSON.stringify(dados));
console.log('--- AlunoDAO: Recuperado ---');
console.log(alunodao.recoveryJSON());
