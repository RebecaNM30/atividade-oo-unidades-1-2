# Atividade Avaliativa — Unidades 1 e 2

**Orientação a Objetos em JavaScript: toJSON(), DAO e Armazenamento Local**

Repositório com todos os códigos das apostilas das Unidades 1 e 2, incluindo as classes DAO `PFDAO.mjs` e `AlunoDAO.mjs` e seus respectivos arquivos de uso.

## 📁 Estrutura

```
pessoas/
├── Pessoa.js, Endereco.js, Telefone.js, Titulo.js
├── PF.js, PJ.js, Aluno.js
├── IE/
│   └── IEclss.js
└── DAOs/
    ├── localStorage.mjs
    ├── PJDAO.mjs
    ├── PFDAO.mjs
    ├── AlunoDAO.mjs
    ├── usaPJDAO.mjs
    ├── usaPFDAO.mjs
    └── usaAlunoDAO.mjs
```

## ▶️ Como executar

Requer **Node.js 18+**.

```bash
node pessoas/DAOs/usaPJDAO.mjs
node pessoas/DAOs/usaPFDAO.mjs
node pessoas/DAOs/usaAlunoDAO.mjs
```

## 🧠 Conceitos aplicados

- Herança (PF, PJ e Aluno estendem Pessoa)
- Encapsulamento com atributos privados
- Sobrescrita de métodos
- Relacionamentos 1:1, 1:N e N:N
- Padrão DAO com toJSON(), saveJSON() e recoveryJSON()
- Serialização e desserialização com JSON
- Simulação de localStorage em memória
- ES Modules e CommonJS
