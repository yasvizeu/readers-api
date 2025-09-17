# 📚 Readers API

**Readers API** é uma aplicação backend construída em **NestJS** que permite:  

- Criar contas de usuários e autenticação via JWT.  
- Pesquisar livros utilizando a API do **Google Books**.  
- Adicionar livros à biblioteca pessoal (separando em **possuo** e **desejo**).  
- Acessar a biblioteca de outros usuários.  
- Propor trocas de livros entre usuários.  

Este repositório contém a **MVP1**, que cobre a fundação do sistema.  

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/) + [NestJS](https://nestjs.com/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [TypeORM](https://typeorm.io/)  
- Banco de dados: **PostgreSQL**
- Autenticação: **JWT (JSON Web Token)**  
- Integração com **Google Books API**  

---

## 📦 Funcionalidades da MVP1

- [x] Cadastro e login de usuários  
- [x] Busca de livros pelo Google Books  
- [x] Biblioteca pessoal com listas: **possuo** e **desejo**  
- [x] Visualizar biblioteca de outros usuários  
- [x] Criar propostas de troca de livros  

---

## ⚙️ Instalação e configuração

### 1. Clone o repositório
```bash
git clone https://github.com/yasvizeu/readers-api.git
cd readers-api
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure variáveis de ambiente  
Crie um arquivo `.env` na raiz do projeto:

```env
# Porta da aplicação
PORT=3000

# Banco de dados
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=readers_api

# JWT
JWT_SECRET=sua_chave_secreta

# Google Books API
GOOGLE_BOOKS_API=https://www.googleapis.com/books/v1/volumes
```

### 4. Rodar as migrations
```bash
npm run migration:run
```

### 5. Iniciar o servidor
```bash
npm run start:dev
```

A API estará disponível em:  
👉 `http://localhost:3000`  

A documentação Swagger (se habilitada) ficará em:  
👉 `http://localhost:3000/api`  

---

## 📚 Estrutura inicial (MVP1)

```
src/
 ├── auth/          # Cadastro e login de usuários
 ├── users/         # Perfil e bibliotecas dos usuários
 ├── books/         # Integração com Google Books
 ├── libraries/     # Lista de livros que possui/deseja
 ├── trades/        # Propostas de troca
 ├── common/        # DTOs, filtros e utils
 └── main.ts        # Ponto de entrada da aplicação
```

---

## 🔮 Próximos Passos (MVP2+)

- Sistema de resenhas, comentários e avaliações por estrelas ⭐  
- Histórico de trocas realizadas  
- Notificações de propostas aceitas  
- Sugestão de matches automáticos entre bibliotecas  
- Deploy em nuvem (Render, Railway, etc.)  

---

💡 **Dica:** No início, foca em ter **CRUD básico + autenticação** rodando. Depois, adiciona a integração com Google Books e só então as trocas. Assim você não trava logo de cara em algo mais complexo.  
