# MindShare

Uma aplicação web para criação, compartilhamento e gerenciamento de ideias, permitindo que usuários publiquem ideias, votem, comentem e gerenciem membros e suas permissões.

## 🚀 Aplicação

A aplicação está disponível em produção:

👉 https://mindshare-virid.vercel.app/

> O backend está hospedado no Render e o frontend na Vercel.

---

## 📌 Sobre o projeto

O MindShare foi desenvolvido como uma aplicação full-stack utilizando React no frontend e Node.js com GraphQL no backend.

A ideia do projeto é criar um espaço colaborativo onde usuários possam:

- Criar novas ideias
- Visualizar ideias cadastradas
- Consultar detalhes de uma ideia
- Votar em ideias
- Adicionar comentários
- Gerenciar usuários
- Editar nome e permissões dos usuários
- Excluir usuários
- Autenticar usuários através de JWT

---

## ✨ Funcionalidades

### 🔐 Autenticação

- Cadastro de usuários
- Login
- Autenticação utilizando JWT
- Controle de acesso baseado em permissões

### 💡 Ideias

- Listagem de ideias
- Criação de ideias
- Visualização detalhada
- Sistema de votação
- Contagem de votos
- Comentários nas ideias

### 👥 Gerenciamento de usuários

- Listagem de membros
- Busca por nome ou e-mail
- Convite/cadastro de usuários
- Edição de nome
- Alteração de papel/permissão
- Exclusão de usuários

### 🎨 Interface

- Interface responsiva
- Componentes reutilizáveis
- Drawer para detalhes das ideias
- Dialogs para criação e edição
- Feedback visual durante carregamentos

---

## 🛠️ Tecnologias

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Apollo Client
- GraphQL
- Zustand
- Lucide React

### Backend

- Node.js
- TypeScript
- Express
- Apollo Server
- GraphQL
- TypeGraphQL
- Prisma ORM
- PostgreSQL
- JWT
- bcrypt

### Deploy

- Vercel — Frontend
- Render — Backend
- Render PostgreSQL — Banco de dados

---

## 🏗️ Arquitetura

```text
mindshare/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── stores/
│   │   ├── types/
│   │   └── ...
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── graphql/
│   │   ├── resolvers/
│   │   └── ...
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
│
└── README.md

---

## 🔄 Comunicação entre Frontend e Backend

React
  │
  │ Apollo Client
  ▼
GraphQL API
  │
  │ Apollo Server
  ▼
Resolvers
  │
  │ Prisma
  ▼
PostgreSQL

O frontend utiliza o Apollo Client para realizar queries e mutations.

O backend utiliza Apollo Server + TypeGraphQL para disponibilizar a API GraphQL.

O Prisma é responsável pela comunicação com o PostgreSQL.

---

## 👤 Papéis dos usuários

A aplicação possui diferentes níveis de permissão:
| Papel    | Descrição                         |
| -------- | --------------------------------- |
| `owner`  | Proprietário da aplicação         |
| `admin`  | Administrador                     |
| `member` | Membro                            |
| `viewer` | Usuário somente para visualização |

---

## ⚙️ Como executar o projeto localmente
Pré-requisitos

Antes de começar, você precisa ter instalado:

Node.js
npm
Git
PostgreSQL

---
1. Clone o repositório
git clone https://github.com/erikaperciliano/mindshare.git

Entre no projeto:
cd mindshare

---

## 🔧 Backend

Entre na pasta:
cd backend

Instale as dependências:
npm install

Crie um arquivo .env:

DATABASE_URL="sua_connection_string"
JWT_SECRET="seu_jwt_secret"
FRONTEND_URL="http://localhost:5173"

Execute as migrations:
npx prisma migrate dev

Gere o Prisma Client:
npx prisma generate

Inicie o servidor:
npm run dev

O backend ficará disponível em:
http://localhost:4000/graphql

---

💻 Frontend

Em outro terminal:
cd frontend

Instale as dependências:
npm install

Crie o arquivo .env:
VITE_API_URL=http://localhost:4000/graphql

Inicie o frontend:
npm run dev

A aplicação estará disponível em:
http://localhost:5173

---

## 🔑 Variáveis de ambiente
Backend
DATABASE_URL=
JWT_SECRET=
FRONTEND_URL=

Frontend
VITE_API_URL=

As variáveis de ambiente contendo informações sensíveis não devem ser versionadas no Git.

---

## 🌎 Produção
Frontend

Hospedado na Vercel:

https://mindshare-virid.vercel.app/

Backend

Hospedado no Render:

https://mindshare-ivjx.onrender.com/graphql

Banco de dados

PostgreSQL hospedado no Render.

---

📚 Aprendizados

Durante o desenvolvimento deste projeto foram trabalhados conceitos como:

Desenvolvimento de aplicações React com TypeScript
Gerenciamento de estado com Zustand
Comunicação com APIs GraphQL
Apollo Client
Criação de resolvers GraphQL
Autenticação utilizando JWT
Controle de permissões
Modelagem de banco de dados com Prisma
PostgreSQL
Migrations
CORS
Variáveis de ambiente
Deploy de aplicações full-stack
Integração entre Vercel, Render e GitHub

---
## 🚧 Melhorias futuras

Algumas melhorias que podem ser implementadas:

 Refresh automático do JWT
 Recuperação de senha
 Paginação de ideias
 Sistema de notificações
 Melhorias no controle de permissões
 Testes automatizados
 Melhor tratamento de erros
 Otimização do bundle do frontend
 Loading states mais elaborados
 Dark mode


⭐ Se você gostou do projeto, considere deixar uma estrela no repositório!


