// run `node index.js` in the terminal
// 1. Buscando as classes que estão guardadas nas pastas
const PJ = require('./pessoas/PJ');
const IE = require('./pessoas/IE/IEclss');

console.log('=== INICIANDO TESTE DO SISTEMA ===');

// 2. Criando e preenchendo a Inscrição Estadual (IE)
const novaInscricao = new IE();
novaInscricao.setNumero('110.456.789.111');
novaInscricao.setEstado('SP');
novaInscricao.setDataRegistro(new Date()); // Cria a data de hoje corretamente

// 3. Criando e preenchendo a Pessoa Jurídica (PJ)
const novaEmpresa = new PJ();
novaEmpresa.setNome('Minha Empresa Didática LTDA');
// O CNPJ precisa ter 18 caracteres por causa da validação do seu código!
novaEmpresa.setCNPJ('12.345.678/0001-99');

// 4. Vinculando um ao outro (Relação 1:1 e Referência Cruzada)
const deuCerto = novaEmpresa.setIE(novaInscricao);

// 5. Mostrando os resultados na tela
if (deuCerto) {
  console.log('✅ Sucesso! Os objetos foram vinculados.');
  console.log('Nome da Empresa:', novaEmpresa.getNome());
  console.log('CNPJ cadastrado:', novaEmpresa.getCNPJ());
  console.log('Número da IE associada:', novaEmpresa.getIE().getNumero());
} else {
  console.log('❌ Algo falhou na validação dos dados!');
}
