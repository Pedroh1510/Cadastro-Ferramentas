# Cadastro de ferramentas

[![Build Status](https://travis-ci.org/Pedroh1510/Cadastro-Ferramentas.svg?branch=master)](https://travis-ci.org/Pedroh1510/Cadastro-Ferramentas)
[![Coverage Status](https://coveralls.io/repos/github/Pedroh1510/Cadastro-Ferramentas/badge.svg?branch=master)](https://coveralls.io/github/Pedroh1510/Cadastro-Ferramentas?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/79ab9d06865346539cc75d0ddf02b047)](https://app.codacy.com/manual/Pedroh1510/Cadastro-Ferramentas?utm_source=github.com&utm_medium=referral&utm_content=Pedroh1510/Cadastro-Ferramentas&utm_campaign=Badge_Grade_Dashboard)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Projeto proposto pela plataforma [Bossbox](https://bossabox.com/para-profissionais), com o intuito de saber um pouco de como programo. Uma API de cadastro e consulta de ferramentas

## Começando

Para executar o projeto, será necessário instalar os seguintes programas:

- [Node.js, necessario para execução do projeto](https://nodejs.org/en/)
- [Yarn, para gerenciar pacotes de instalação](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable) (opcional)
- [Docker, para a alocação local da aplicação](https://www.docker.com/products/docker-desktop)(opcional)

## Desenvolvimento

Para iniciar o desenvolvimento, é necessario clonar o projeto

```
git clone https://github.com/Pedroh1510/Cadastro-Ferramentas.git
```

### Executando com o docker:

Modo desenvolvimento

```
docker-compose -f docker-compose.dev.yml up -d
```

Modo produção

```
docker-compose up -d
```

### Executando sem o docker:

Para instalar as dependencias

```
yarn ou npm install
```

Rodando o projeto no modo de produção

```
yarn start ou npm start
```

Agora acesse [localhost:3000](localhost:3000), recomendo que utilize o insominia para acessar as rotas desta aplicação

##Autor

- GitHub: [Pedroh1510](https://github.com/Pedroh1510)
- Linkein: [Pedroh1510](www.linkedin.com/in/pedroh1510)
