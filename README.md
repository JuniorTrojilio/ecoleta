<div align="center">
  <img src="https://user-images.githubusercontent.com/39541807/84270647-6077c380-ab01-11ea-8ae2-5795784c29f0.png">
</div>

---

App Ecoleta, criado durante o evento Next Level Week busca facilitar através da tecnologia a comunicação entre pontos de coleta de resíduos e seus usuários. 

---

<h3 align="center">Técnologias utilizadas:</h3>

<div display="flex" align="center">  
  <a href="https://reactjs.org/">
    <img src="https://user-images.githubusercontent.com/39541807/84271397-6f12aa80-ab02-11ea-9df7-c7eacbbb5763.png" width=200px>
  </a>
  <a href="https://www.docker.com/">
    <img src="https://user-images.githubusercontent.com/39541807/84271891-0f68cf00-ab03-11ea-8747-6214e5ed071b.png" width=150px>
  </a>
  <a href="postgresql.org">
     <img src="https://user-images.githubusercontent.com/39541807/84272045-4c34c600-ab03-11ea-8cf0-41914e848580.png" width=130px>
  </a>
   <a href="https://nodejs.org/en/">
     <img src="https://user-images.githubusercontent.com/39541807/84272518-e5fc7300-ab03-11ea-841a-03cdadae9cd4.png" width=130px>
  </a>  
<div>
  
---

<img src="https://user-images.githubusercontent.com/39541807/84273224-cb76c980-ab04-11ea-9b68-3a0209ba0217.png">
<img src="https://user-images.githubusercontent.com/39541807/84273542-2c060680-ab05-11ea-8e40-10aa6fa7d577.png">
<img src="https://user-images.githubusercontent.com/39541807/84273622-450eb780-ab05-11ea-86ca-1e2fdee02a27.png">
 
 ---
 ## Executando o App em sua maquina
 
### Requisitos:

- Docker ^3
- Node ^12
- NPM ^6

### Step by Step

- realize um fork do meu repositório e clone-o em sua maquina

### Iniciando o Backend

- no terminal navegue até a pasta server e execute o seguinte comando
```
npm install
```
- com o docker instalado em sua maquina, execute o seguinte comando para iniciar a imagem do postgres
```
docker run --name ecoleta-postgres -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres &&
```
- Logo após execute o seguinte comando para criar o database que será utilizado.
```
docker exec -it [id da imagemdo postgres criada acima] bash
root@[id da imagemdo postgres criada acima]:/# psql -U postgres
postgres-# CREATE DATABASE ecoleta;
postgres-# \q
```
- execute as migrations da pasta server com o comando
```
npm knex:migrate
```
e se estiver tudo de acordo as tabelas no banco serão geradas, após isto precisará ainda rodar as seeds para popular o banco, para isto execute o seguinte comando
```
npm run knex:seed
```
- feito os items acima está na hora de startar o servidor com o comando
```
npm run dev
```

### Iniciando o Frontend

- Em um novo terminal navegue até a pasta web e execute o seguinte comando
```
yarn install
```
ou caso use npm
```
npm install
```
- Após isto basta colocar a aplicação para rodar com o comando
```
yarn start
```
ou caso use o npm
```
npm start
```

---

Caso tenha interesse em contribuir com este repositório ainsa não desenvolvi o app mobile, aceitaria um pull requeste seu 😄

<p align="center">< > with 💙 by <a href="https://github.com/JuniorTrojilio">Junior Trojilio</a></p>
