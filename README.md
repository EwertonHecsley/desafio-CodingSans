# Desafio Técnico - Backend Node.js com TypeScript

Este é o meu projeto de solução para o Desafio Técnico CodingSans Backend Test (A), que envolve a criação de um aplicativo da web autenticado via JWT, servindo uma API para listar cervejarias filtradas por consulta usando o OpenBreweryDB.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Docker (para banco de dados MySQL)
- Knex (para query builder)
- Bcrypt (para criptografia de senhas)
- JSON Web Token (JWT) (para autenticação)
- Axios (para requisições HTTP)
- Outras dependências especificadas no arquivo `package.json`

## Configuração do Projeto

Antes de iniciar o projeto, certifique-se de ter o Node.js e o npm instalados. Para instalar as dependências, execute:

```bash
npm install
```

## Configuração do Banco de Dados

Este projeto utiliza Docker para criar um banco de dados MySQL. Certifique-se de ter o Docker instalado e em execução. Execute o seguinte comando para criar e iniciar o contêiner do banco de dados:

```bash
docker-compose up -d
```

## Configuração das Variáveis de Ambiente

Copie o arquivo .env.example para um novo arquivo chamado .env e ajuste as variáveis de ambiente conforme necessário.

## Inicializando o Projeto

Execute o seguinte comando para iniciar o servidor:

```bash
npm start
```

O servidor estará em execução em `http://localhost:3333`


## Endpoints

1. Login

    Endpoint: `POST /login`
   
 Corpo da Requisição:

 ```json
{
  "username": "seu_nome_de_usuario",
  "password": "sua_senha"
}

```
Resposta Bem-Sucedida:

```json
{
  "token": "seu_token_jwt"
}

```

2. Listar Cervejarias

    Endpoint: `GET /breweries`
    Autenticação: JWT Token no cabeçalho Authorization
    Parâmetros de Consulta Opcionais: query (ex: /breweries?query=dog)
   
 Resposta Bem-Sucedida:

 ```json
{
  "breweries": [
    {
    "id": "b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0",
    "name": "MadTree Brewing 2.0",
    "brewery_type": "regional",
    "address_1": "5164 Kennedy Ave",
    "address_2": null,
    "address_3": null,
    "city": "Cincinnati",
    "state_province": "Ohio",
    "postal_code": "45213",
    "country": "United States",
    "longitude": "-84.4137736",
    "latitude": "39.1885752",
    "phone": "5138368733",
    "website_url": "http://www.madtreebrewing.com",
    "state": "Ohio",
    "street": "5164 Kennedy Ave"
}
  ]
}

```
























