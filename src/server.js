// Importacao dos modulos.
// "express" e o framework que cria o servidor web.
// "path" e um modulo nativo do Node.js usado para montar caminhos de arquivos.
const express = require('express');
const path = require('path');

// Criacao da aplicacao Express.
// A constante "app" concentra todas as configuracoes do servidor.
const app = express();

// Definicao da porta.
// Em producao a porta costuma vir de uma variavel de ambiente (process.env.PORT).
// Se ela nao existir, usamos 3000 como valor padrao para o ambiente local.
const PORT = process.env.PORT || 3000;

// Arquivos estaticos.
// express.static entrega automaticamente os arquivos da pasta "public"
// (HTML, CSS, JavaScript e imagens) para o navegador.
// path.join monta o caminho absoluto ate a pasta, o que evita erros
// quando o projeto e executado a partir de outro diretorio.
app.use(express.static(path.join(__dirname, '..', 'public')));

// Inicializacao do servidor.
// app.listen coloca a aplicacao no ar e executa a funcao de callback
// assim que o servidor estiver pronto para receber requisicoes.
app.listen(PORT, () => {
  console.log(`Servidor OS Track rodando em http://localhost:${PORT}`);
});
