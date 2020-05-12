# Cadastro de ferramentas

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/79ab9d06865346539cc75d0ddf02b047)](https://app.codacy.com/manual/Pedroh1510/Cadastro-Ferramentas?utm_source=github.com&utm_medium=referral&utm_content=Pedroh1510/Cadastro-Ferramentas&utm_campaign=Badge_Grade_Dashboard)

<p align="justify">Projeto proposto pela plataforma [Bossbox](https://bossabox.com/para-profissionais), com o intuito de saber um pouco de como programo. Uma API de cadastro e consulta de ferramentas</p>

## Começando
Para executar o projeto, será necessário instalar os seguintes programas:
- [Node.js, necessario para execução do projeto](https://nodejs.org/en/)
- [Yarn, para gerenciar pacotes de instalação](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable) (opcional)
- [Docker, para a alocação local da aplicação](https://www.docker.com/products/docker-desktop)

## Desenvolvimento
Para iniciar o desenvolvimento, é necessario clonar o projeto
```
git clone
```
### Executando:
Modo desenvolvimento
```
docker-compose -f docker-compose.dev.yml up -d
```
Modo produção
```
docker-compose up -d
```

Agora acesse [localhost:3000](localhost:3000), recomendo que utilize o insominia para acessar as rotas desta aplicação

