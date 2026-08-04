# OS Track

Template base da disciplina de Programacao para Internet do curso Tecnico em Informatica.
Este repositorio e o ponto de partida do sistema OS Track, uma aplicacao de controle de
ordens de servico que sera construida em camadas ao longo das aulas.

## Pre requisitos

Antes de comecar, instale os seguintes programas no Windows:

1. **Node.js LTS**: baixe a versao LTS em https://nodejs.org e instale com as opcoes padrao.
   Para conferir se deu certo, abra o terminal e rode `node -v` e `npm -v`.
2. **Git**: baixe em https://git-scm.com/download/win e instale com as opcoes padrao.
   Para conferir, rode `git --version`.
3. **Visual Studio Code**: baixe em https://code.visualstudio.com e instale.

## Como rodar localmente

1. Clone o repositorio:

   ```
   git clone https://github.com/diogofelixti/os-track.git
   ```

2. Entre na pasta do projeto:

   ```
   cd os-track
   ```

3. Instale as dependencias:

   ```
   npm install
   ```

4. Suba o servidor em modo de desenvolvimento:

   ```
   npm run dev
   ```

5. Abra o navegador em http://localhost:3000 e a pagina inicial do OS Track sera exibida.

Observacao: o modo `npm run dev` usa o nodemon, que reinicia o servidor sozinho toda vez
que voce salva uma alteracao. Para parar o servidor, pressione Ctrl + C no terminal.
Para rodar sem o nodemon, use `npm start`.

## Estrutura de pastas

```
os-track/
├── public/              Arquivos entregues direto ao navegador (front-end)
│   ├── index.html       Pagina inicial da aplicacao
│   ├── css/
│   │   └── style.css    Estilos e variaveis de cor do projeto
│   └── js/
│       └── main.js      JavaScript que roda no navegador
├── src/
│   └── server.js        Servidor Express, ponto de entrada da aplicacao
├── .env.example         Modelo das variaveis de ambiente, sem valores
├── .gitignore           Lista de arquivos e pastas que o Git deve ignorar
├── package.json         Nome, scripts e dependencias do projeto
└── README.md            Este arquivo, com as instrucoes de uso
```

Alem desses itens, o comando `npm install` cria a pasta `node_modules/`, onde ficam as
bibliotecas baixadas, e o arquivo `package-lock.json`, que trava as versoes exatas
instaladas. A pasta `node_modules/` nao vai para o Git.

## Variaveis de ambiente

O arquivo `.env.example` lista as chaves de configuracao que o projeto vai usar nas
proximas aulas, sem nenhum valor preenchido. Ele serve como modelo e pode ser versionado
sem risco.

Para usar essas variaveis na sua maquina, copie o modelo para um arquivo chamado `.env`:

```
copy .env.example .env
```

Depois abra o `.env` e preencha os valores. O arquivo `.env` guarda dados sensiveis, como
senhas e chaves de acesso, e por isso esta listado no `.gitignore`. Ele nunca e versionado
e nunca deve ser enviado para o GitHub.

Nesta primeira etapa, apenas a chave `PORT` tem efeito. As chaves `MONGODB_URI` e
`SESSION_SECRET` serao usadas nas aulas de banco de dados e de autenticacao.

## Roteiro da disciplina

Cada aula adiciona uma camada ao sistema: primeiro o front-end (HTML, CSS e JavaScript),
depois o back-end com rotas e regras de negocio, em seguida o banco de dados, a
autenticacao de usuarios e, por fim, o deploy da aplicacao em um servidor online.
