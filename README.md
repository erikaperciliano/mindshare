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
