# Техническое задание: Интернет-магазин компании в стиле Flip.kz / OLX (MVP 1.0)

Регион: Казахстан
Валюта: KZT

## Основные правила:
- Modular Monolith (NestJS API + Next.js Web)
- Single source of truth: PostgreSQL + Prisma ORM
- Redis + BullMQ for queues and reservations
- Halyk ePay / Freedom Pay integrations (Hosted Payment Widget / API)
- Atomic Inventory reservation with background expiration timeout
- Strict idempotency on payment webhooks
- OrderItem price/product snapshotting
