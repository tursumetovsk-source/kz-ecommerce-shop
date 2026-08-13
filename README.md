# Modular Monolith E-Commerce Platform (Kazakhstan MVP 1.0)

Flip.kz / OLX style e-commerce shop monorepo for single company operating in Kazakhstan.

## Tech Stack
- **Frontend**: Next.js (App Router), TypeScript, React, Tailwind CSS, shadcn/ui, TanStack Query, Zod
- **Backend**: NestJS, TypeScript, REST API, Swagger/OpenAPI, Prisma ORM, PostgreSQL, Redis, BullMQ
- **Architecture**: Modular Monolith

## Project Structure
```text
shop/
├── apps/
│   ├── web/       # Next.js 14+ Frontend (SSR, Catalog, Cart, Checkout, User Account)
│   └── api/       # NestJS Modular Monolith API Backend
├── packages/
│   ├── contracts/ # Shared DTOs, OpenAPI schemas
│   ├── config/    # Shared configs (ESLint, Prettier, TSConfig)
│   └── types/     # Common TypeScript types
├── docker/
├── docker-compose.yml
└── README.md
```
