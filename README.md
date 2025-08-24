# Base Project Template

A modern full-stack application template with real-time capabilities, ready to be customized for various projects.

## 🚀 Technologies

### Backend

- **Fastify** - Fast web framework for Node.js
- **Drizzle ORM** - TypeScript-first ORM for PostgreSQL
- **PostgreSQL** - Relational database
- **Zod** - Schema validation
- **TypeScript** - Programming language

### Frontend

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Routing for React
- **TanStack Query** - Server state management
- **shadcn/ui** - Re-usable components built with Radix UI and Tailwind CSS

### Tools

- **Biome** - Linter and formatter
- **Docker** - Containerization
- **Yarn Workspaces** - Monorepo management

## 📁 Project Structure

```
├── server/         # Backend API
├── web/            # Frontend React
├── docker/         # Docker configurations
└── package.json    # Workspace root
```

## 🛠️ Setup

### Prerequisites

- Node.js 18+
- Yarn
- Docker and Docker Compose

### Installation

1. **Install dependencies**

```bash
yarn install
```

### Server Setup

2. **Navigate to server directory**

```bash
cd server
```

3. **Configure environment variables**

```bash
cp .env.example .env
```

Configure the following variables:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

4. **Start the database**

```bash
docker-compose up -d
```

5. **Run migrations**

```bash
yarn db:seed
```

### Development

**Backend:**

```bash
cd server
yarn dev
```

**Frontend:**

```bash
cd web
yarn dev
```

### Available Scripts

- `yarn format` - Format code
- `yarn lint` - Run linter
- `yarn check` - Run formatting and linting

## 🏗️ Project Patterns

- **Monorepo** with Yarn Workspaces
- **TypeScript** throughout the project
- **ESLint/Biome** for code quality
- **Docker** for development
- **PostgreSQL** with Drizzle ORM
- **Fastify** for REST API
- **React** with Vite for frontend

## 📝 License

MIT
