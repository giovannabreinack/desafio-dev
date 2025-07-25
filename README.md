# Desafio Dev 

Este projeto consiste em uma API desenvolvida com **NestJS** para gerenciar agricultores. Foi implementado um CRUD completo com regras de negócio, incluindo **validação de CPF**.

## ✅ Tecnologias Utilizadas

- **NestJS** (backend)
- **MySQL** (banco de dados)
- **Insomnia** (testes de API)
- **Git** (versionamento)

---

## 🚀 Rodando o Projeto Localmente

### 1. Clone o repositório

No terminal:

```bash
git clone https://github.com/giovannabreinack/desafio-dev.git
```

Abra o projeto no VS Code:

```bash
cd desafio-dev
code .
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Instale os pacotes adicionais

```bash
npm install --save @nestjs/typeorm typeorm mysql2
npm install --save class-validator class-transformer
```

---

## 📁 Estrutura do Backend

```
src/
├── agricultor/
│   ├── dto/
│   │   ├── create-agricultor.dto.ts
│   │   └── update-agricultor.dto.ts
│   ├── entities/
│   │   └── agricultor.entity.ts
│   ├── decorators/
│   │   └── is-cpf.decorator.ts
│   ├── service/
│   │   └── agricultor.service.ts
│   ├── controller/
│   │   └── agricultor.controller.ts
│   └── agricultor.module.ts
```

---

## 📌 Funcionalidades

- Criar agricultor
- Listar e buscar agricultores por nome, id e CPF
- Atualizar dados do agricultor (sem CPF)
- Excluir agricultor (apenas se `active = false`)
- Validação de CPF com decorator personalizado
- Regras de negócio aplicadas no service


