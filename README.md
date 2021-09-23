
<div align="center">
  <img src="https://github.com/TiagoBaratieri/images/blob/main/image-login.png" width="600" />
  <img src="https://github.com/TiagoBaratieri/images/blob/main/image-movie-card.png" width="600" />
  <img src="https://github.com/TiagoBaratieri/images/blob/main/image-movie.png" width="600" />
</div>

# Sobre o Projeto
MovieFlix é uma aplicação full stack web e mobile construída durante o **Bootcamp DevSuperior, evento organizado pela [DevSuperior](https://devsuperior.com.br "Site da DevSuperior").

A aplicação consiste em um banco de filmes, os quais podem ser listados e avaliados pelos usuários. Usuários podem ser visitantes (VISITOR) e membros (MEMBER). Apenas usuários membros podem inserir avaliações no sistema.

Ao acessar o sistema, o usuário deve fazer seu login. Apenas usuários logados podem navegar nos filmes. Logo após fazer o login, o usuário vai para a listagem de filmes, que mostra os filmes de forma paginada, ordenados alfabeticamente por título. O usuário pode filtrar os filmes por gênero.

Ao selecionar um filme da listagem, é mostrada uma página de detalhes, onde é possível ver todas informações do filme, e também suas avaliações. Se o usuário for usuário membro, ele pode ainda registrar uma avaliação nessa tela.

Um usuário possui nome, email e senha, sendo que o email é seu nome de usuário. Cada filme possui um título, subtítulo, uma imagem, ano de lançamento, sinopse, e um gênero. Os usuários membros podem registrar avaliações para os filmes. Um mesmo usuário membro pode deixar mais de uma avaliação para o mesmo filme.

Você pode acessar a aplicação com os usuários:
<p>VISITOR -> email: bob@gmail.com | senha: 123456</p>
<p>MEMBER -> email: ana@gmail.com | senha: 123456</p>

## Modelo Conceitual
![Modelo Conceitual](https://github.com/Lukinhasssss/assets/blob/main/movieflix/modelo-conceitual.png)

# Tecnologias utilizadas
## Backend
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Frontend
- HTML / CSS / TypeScript
- ReactJS
## Implantação em produção
- Backend: Heroku
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/TiagoBaratieri/dsmovieflix.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/TiagoBaratieri/dsmovieflix.git

# entrar na pasta do projeto front end
cd frontend

# instalar dependências
yarn install

# executar o projeto
yarn start


# Autor

Tiago Baratieri


