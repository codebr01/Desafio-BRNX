# 💼 Desafio BRNX – CodeBR01

Sistema de gerenciamento de demandas técnicas com backend em Fastify, banco de dados PostgreSQL via Prisma ORM e frontend em React + Vite e Tailwind CSS.

---

## 🚀 Como rodar o projeto

### ✅ Pré-requisitos
- 🐳 [Docker](https://www.docker.com/) instalado e em execução

---

### 🛠️ Passo a passo

#### 📥 1. Clone o repositório

```bash
git clone https://github.com/codebr01/Desafio-BRNX.git
```

#### 📂 2. Acesse a pasta do projeto

```bash
cd Desafio-BRNX
```

#### 🐋 3. Suba a aplicação com Docker

```bash
docker compose up --build
```

---

### 🌐 Acesse no navegador

- 💻 Frontend: [http://localhost:5173/demands](http://localhost:5173/demands)
- 🔧 Backend (API): [http://localhost:3333](http://localhost:3333)

> 🧪 Dados de teste são gerados automaticamente via `prisma/seeder.ts` ao subir o container do backend.

---

## 📁 Estrutura do projeto

```bash
codebr01-desafio-brnx/
├── docker-compose.yml
├── backend/
│   ├── Dockerfile
│   ├── prisma/
│   │   ├── schema.prisma
│   │   ├── seeder.ts
│   │   └── migrations/
│   ├── src/
│   │   ├── server.ts
│   │   └── routes/
├── frontend/
│   ├── Dockerfile
│   └── src/
│       ├── pages/
│       └── components/
```

---

## 🧠 Tecnologias

- 🧩 **Backend**: Node.js, Fastify, Prisma ORM
- 🖼️ **Frontend**: React, Vite, TailwindCSS
- 🛢️ **Banco de dados**: PostgreSQL
- 🐳 **Containers**: Docker + Docker Compose

---

## 👨‍💻 Autor

Feito com 💙 por [@codebr01](https://github.com/codebr01)
