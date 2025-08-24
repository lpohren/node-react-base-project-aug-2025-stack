# Base Project Template

A modern full-stack application template with real-time capabilities, ready to be customized for various projects.

## 🚀 Technologies

### Backend

- **Fastify** - Fast web framework for Node.js
- **Drizzle ORM** - TypeScript-first ORM for PostgreSQL
- **PostgreSQL** - Relational database
- **Zod** - Schema validation
- **TypeScript** - Programming language
- **Docker** - Containerization

### Frontend

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Routing for React
- **TanStack Query** - Server state management
- **shadcn/ui** - Re-usable components built with Radix UI and Tailwind CSS

### Tools

- **Biome** - Linter and formatter
- **Yarn Workspaces** - Monorepo management

## 📁 Project Structure

```
├── server/         # Backend API
├── web/            # Frontend React
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

4. **Configure database type (IMPORTANT)**

Before starting the database, consider changing the database image in `server/docker-compose.yml` based on your project needs:

```yaml
# Current: Vector database for AI/ML projects
image: pgvector/pgvector:pg17

# Alternative: Standard PostgreSQL for most applications
image: postgres:17

# Alternative: MySQL for different requirements
image: mysql:8.0
```

The current setup uses `pgvector/pgvector:pg17` which is a PostgreSQL extension for vector operations, ideal for AI/ML projects. For standard applications, consider using regular PostgreSQL.

5. **Start the database**

```bash
docker-compose up -d
```

6. **Setup and seed the database**

```bash
yarn db:seed
```

**Note:** If you encounter database connection issues after renaming the Docker service, make sure your `DATABASE_URL` in `.env` matches the service name in `docker-compose.yml`.

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

### Database Usefull Commands

**Server directory (`cd server`):**

**Required for setup:**

- `docker-compose up -d` - Start database container
- `yarn db:seed` - Create tables and seed database with sample data

**Development workflow:**

- `npx drizzle-kit generate` - Generate migrations when schema changes
- `npx drizzle-kit migrate` - Run migrations (alternative to push)
- `npx drizzle-kit studio` - Open database GUI (requires DATABASE_URL)

**Utility:**

- `docker-compose down` - Stop database container

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
