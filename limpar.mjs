import fs from 'fs';
import path from 'path';

function limpar(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      limpar(full);
      continue;
    }

    if (!item.endsWith('.js') && !item.endsWith('.mjs')) continue;

    const linhas = fs.readFileSync(full, 'utf8').split('\n');

    // Remove a 1ª linha se começar com "cat >"
    while (linhas.length && linhas[0].trim().startsWith('cat >')) {
      linhas.shift();
    }

    // Remove linhas vazias do final
    while (linhas.length && linhas[linhas.length - 1].trim() === '') {
      linhas.pop();
    }

    // Remove a última linha se for "EOF" ou "EOF;"
    while (linhas.length) {
      const u = linhas[linhas.length - 1].trim();
      if (u === 'EOF' || u === 'EOF;') {
        linhas.pop();
        // remove vazias que ficaram acima do EOF
        while (linhas.length && linhas[linhas.length - 1].trim() === '') {
          linhas.pop();
        }
      } else break;
    }

    fs.writeFileSync(full, linhas.join('\n') + '\n', 'utf8');
    console.log('OK  ' + full);
  }
}

limpar('pessoas');
console.log('\nPronto! Todos os arquivos foram limpos.');
