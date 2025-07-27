# Project Setup

## Backend Initialization (TypeScript, Node.js, Express, Prisma, PostgreSQL)

1. **Clone the repository**
2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Setup environment variables:**
   - Copy `.env.example` to `.env` and fill in the required values (database URL, JWT secret, etc.)
4. **Run database migrations:**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the development server:**

   ```bash
   pnpm run dev
   ```

6. **Access API docs:**
   - Visit `http://localhost:3000/api-docs` for Swagger UI.

---

Comprehensive System Description and API Requirements Based on the Provided Data Model
We require a robust, scalable, and secure backend system that manages products, users, organizations (Tenants), roles, permissions, payments, reservations, subscriptions, logging, and security in a multi-tenant architecture. Each organization must be able to independently manage its users, roles, API keys, subscriptions, and data with complete isolation.

1. Overall Architecture and Key Principles:

- Multi-Tenant Architecture: Each tenant maintains isolated data including users, roles, API keys, subscriptions, and billing information.

- Role-Based Access Control (RBAC): Flexible role management such as Admin, Billing Manager, Member, etc., with fine-grained permissions defining create/read/update/delete access on various resources.

- API Key Management: Tenants must be able to create, activate/deactivate, revoke API keys with scoped permissions and expiry. API keys should have rate limiting based on the subscription plan.

- Billing and Subscription System: Define subscription plans with limits on users, API calls, and storage. Payments must be trackable, verifiable, refundable, and linked to subscriptions and purchases.

- High Security Standards: Password hashing, two-factor authentication (2FA), session management, detailed login and action logs, and secure token management for authentication and API access.

- Comprehensive Logging and Monitoring: Capture login logs, API usage logs, audit logs for sensitive operations, and configurable webhooks to notify external systems.

- Performance and Scalability: Caching, efficient database indexing, query optimization, and horizontal scalability.

2. Core Functionalities
   Users:
   Registration, login with email and password, email and phone verification, password recovery.
   Complete user profile management including personal info, settings, and 2FA.
   Session management and login activity logs.

Notification management.

Tenants (Organizations):
Tenant creation and management including metadata like name, logo, contact info.
Member management with role assignments.
Subscription, invoice, and usage tracking.
API key creation and management with scopes, expiration, and rate limits.
Rate limit policies tied to subscription plans.

Roles and Permissions (RBAC):
Define global and tenant-specific roles.
Assign permissions to roles on specific actions and resources.
Assign roles to tenant members.
Efficient authorization checks on each API request.

Products:
CRUD operations on products including different categories (hotel, accommodation, tour, activity, etc.).
Manage inventory, pricing, discounts, and product status (active, suspended, deleted).
Search and filtering by location, category, price, and status.
Media management (images, gallery).
Link products with reservations.

Reservations:
Users can create reservations for products.
Manage reservation status (pending, paid, cancelled, failed, expired, on hold).
Allow users and admins to update or cancel reservations.
Track payment status linked to reservations.
Support date ranges for reservation usage.

Payments:
Record and track payments for subscriptions, products, reservations, and other purposes.
Support multiple payment gateways (e.g., Zarinpal, Stripe, PayPal).
Payment status tracking, transaction referencing, refunds.
Verify payments and update related entities accordingly.

Subscriptions:
Manage subscription plans with defined limits (users, API requests, storage).
Enable activation, renewal, cancellation, and expiration handling.
Automated reminders for subscription expiry.
Enforce plan-related restrictions throughout the system.

Reporting and Logging:
Login logs with IP and user agent.
Audit logs for all sensitive data changes and actions.
API usage logs with detailed request/response metadata.
Filter and search capabilities on logs.
Webhooks to notify external services about events.

3. Required APIs
   User APIs: Registration, authentication, logout, password reset, email verification, 2FA management, profile CRUD, session and login logs.
   Tenant and Membership APIs: Create/edit/delete tenants, manage members and roles, create/manage/revoke API keys, subscription and invoice management, usage reporting.
   Product APIs: Full CRUD, search and filter, media upload, status management.
   Reservation APIs: Create, view, update, cancel reservations, payment linkage.
   Payment APIs: Initiate payments, check status, confirm payments, refunds.
   Subscription APIs: View plans, subscribe, renew, cancel.
   Logging and Webhook APIs: Retrieve logs, manage webhook subscriptions and deliveries.

4. Implementation Considerations
   Security:

Strong password hashing (e.g., bcrypt).
Secure token generation for authentication and API keys, with expiration.
Rate limiting per API key and IP.
2FA enforcement where applicable.
Input validation and sanitization to prevent SQL injection, XSS, CSRF.
Comprehensive activity logging for auditing and anomaly detection.
Performance:
Cache frequently requested data (e.g., popular products).
Proper database indexing.
Optimize queries to avoid over-fetching.
Efficient media handling and CDN usage.
Queue heavy operations like email sending.
Maintainability and Extensibility:
Comprehensive API documentation (Swagger/OpenAPI).
Unit and integration testing.
Modular architecture with clear separation of concerns.
API versioning to support future changes.
Easy onboarding of new services or resource types.

Here are the endpoints with a brief description of their purpose in parentheses:

User APIs
POST /users/register (Register a new user)
POST /users/login (Authenticate user and provide token)
POST /users/logout (Logout user and invalidate token)
POST /users/refresh-token (Refresh authentication token)
GET /users/me (Get current authenticated user profile)
PUT /users/me (Update current user profile)
POST /users/password-reset/request (Request password reset link or OTP)
POST /users/password-reset/confirm (Confirm and reset password)
POST /users/email/verify (Verify user email address)
POST /users/2fa/enable (Enable two-factor authentication)
POST /users/2fa/disable (Disable two-factor authentication)
GET /users/sessions (List active user sessions)
DELETE /users/sessions/:sessionId (Revoke a specific session)
GET /users/login-logs (Get user login history logs)

Tenant (Organization) APIs
POST /tenants (Create a new tenant/organization)
GET /tenants (List all tenants user belongs to)
GET /tenants/:tenantId (Get tenant details)
PUT /tenants/:tenantId (Update tenant information)
DELETE /tenants/:tenantId (Delete a tenant)
GET /tenants/:tenantId/members (List members of a tenant)
POST /tenants/:tenantId/members (Add a member to tenant)
PUT /tenants/:tenantId/members/:memberId (Update tenant member role)
DELETE /tenants/:tenantId/members/:memberId (Remove member from tenant)
POST /tenants/:tenantId/api-keys (Create API key for tenant)
GET /tenants/:tenantId/api-keys (List API keys of tenant)
PUT /tenants/:tenantId/api-keys/:apiKeyId (Update API key details)
DELETE /tenants/:tenantId/api-keys/:apiKeyId (Revoke/delete API key)
GET /tenants/:tenantId/subscriptions (List tenant subscriptions)
POST /tenants/:tenantId/subscriptions (Create a new subscription for tenant)
GET /tenants/:tenantId/invoices (Get invoices related to tenant)
GET /tenants/:tenantId/usage (Get API and service usage records for tenant)

Role & Permission APIs
GET /roles (List all roles)
POST /roles (Create a new role)
PUT /roles/:roleId (Update role details)
DELETE /roles/:roleId (Delete a role)
GET /roles/:roleId/permissions (List permissions assigned to role)
POST /roles/:roleId/permissions (Assign permissions to role)
DELETE /roles/:roleId/permissions/:permissionId (Remove permission from role)

Product APIs
POST /products (Create a new product or service)
GET /products (List all products)
GET /products/:productId (Get product details)
PUT /products/:productId (Update product information)
DELETE /products/:productId (Delete a product)

Reservation APIs
POST /reservations (Create a new reservation)
GET /reservations (List reservations)
GET /reservations/:reservationId (Get reservation details)
PUT /reservations/:reservationId (Update reservation status or details)
DELETE /reservations/:reservationId (Cancel or delete reservation)

Payment APIs
POST /payments/initiate (Start a new payment process)
GET /payments/:paymentId (Get payment status and details)
POST /payments/:paymentId/confirm (Confirm payment success)
POST /payments/:paymentId/refund (Initiate a refund)

Subscription APIs
GET /subscription-plans (List available subscription plans)
GET /subscriptions/:subscriptionId (Get details of a subscription)
POST /subscriptions/:subscriptionId/renew (Renew an existing subscription)
POST /subscriptions/:subscriptionId/cancel (Cancel a subscription)

Logging & Webhook APIs
GET /logs/login (Retrieve user login logs)
GET /logs/audit (Retrieve audit logs for tenant or system)
GET /logs/api-usage (Get logs of API usage)
GET /webhooks (List all webhooks for tenant)
POST /webhooks (Create a new webhook)
PUT /webhooks/:webhookId (Update webhook details)
DELETE /webhooks/:webhookId (Delete a webhook)
GET /webhooks/:webhookId/deliveries (View webhook delivery attempts)

Notification APIs
GET /notifications (List user notifications)
PUT /notifications/:notificationId/read (Mark notification as read)

Additional APIs (Optional/Advanced)
GET /users/:userId/followers (Get list of user’s followers)
GET /users/:userId/following (Get list of users followed by user)
POST /posts (Create a new post)
GET /posts (List posts)
POST /posts/:postId/like (Like a post)
POST /posts/:postId/comment (Add a comment to a post)

Technical Documentation for Backend Development

1. Technology Stack
   Programming Language: TypeScript (strongly recommended for type safety and maintainability)
   Runtime: Node.js (LTS version)
   Web Framework: Express.js (or Fastify for better performance)
   Database: PostgreSQL (as per schema)
   ORM: Prisma (for type-safe database interactions)
   Authentication & Authorization: JWT (JSON Web Tokens) for stateless auth, OAuth2 support for external providers if needed, and integration of Two-Factor Authentication (2FA)
   API Documentation: OpenAPI (Swagger) for generating API docs and client SDKs; full documentation of all APIs, endpoints, and database schemas is mandatory
   Validation: Zod or Joi for request data validation
   Caching: Redis (for rate limiting, session store, caching frequently accessed data)
   Message Broker (optional): RabbitMQ or Kafka for asynchronous jobs (email sending, webhook delivery retries)
   Logging: Winston or Pino for structured logging
   Monitoring & Metrics: Prometheus + Grafana or similar for performance monitoring and alerting
   Testing: Jest for unit and integration testing
   Security: Helmet middleware for HTTP headers, rate limiting middleware, CORS with strict allowed origins, data sanitization, and input validation
   CI/CD: GitHub Actions, GitLab CI, or CircleCI for automated testing, linting, and deployment pipelines
   Containerization: Docker + Docker Compose for local development and deployment
   API Gateway (optional): Kong, Traefik, or NGINX as a reverse proxy and rate limiting enforcement layer

2. Architecture & Best Practices (Microservices Approach)
   Monolithic Architecture:
   The project will be developed using a monolithic architecture, where all core domains such as authentication, user management, payments, subscription management, access control, reporting, webhooks, and audit logs will be implemented within a single unified backend application.

This approach allows for centralized development, easier management of dependencies, simpler deployment pipelines, and tighter integration between different features.

All modules will be structured as feature-based folders inside a shared codebase, sharing the same runtime and database connection. This promotes rapid development, reduces operational overhead, and is suitable for projects that require cohesive and tightly coupled components.

The backend will expose a unified API and be responsible for all system logic, including but not limited to:

Auth & Identity

Organizations and Teams

Role-Based Access Control (RBAC)

API Key Management

Webhooks

Usage & Audit Logs

Subscription & Billing

Credit Wallet System

Admin Panel Support

All communication between modules will be internal (function calls) instead of network calls, which ensures performance and simplicity.

Use RESTful APIs or gRPC for synchronous communication
Use Message Brokers (e.g., RabbitMQ, Kafka) for asynchronous, event-driven communication
Each microservice should be independently scalable and capable of being updated and maintained separately.
Distributed Tracing and Monitoring:
Implement distributed tracing (e.g., OpenTelemetry) to monitor inter-service communication and identify bottlenecks.

API Gateway:
Implement a central API Gateway responsible for routing requests to appropriate microservices, performing initial authentication/authorization, and applying global rate limiting.

Each service must have independent documentation including API docs with interactive testing capabilities (e.g., Swagger or similar tools).

Configuration Management:
Configuration for each microservice should be independently manageable and centrally controlled (e.g., Consul, Config Server).

Security and Authentication:

Implement a central Authentication Service and use JWT or OAuth2 tokens for inter-service authentication.

Role-based access control should be enforced independently but consistently across services.

Security:
Use HTTPS everywhere (enforce TLS)
Sanitize all inputs to prevent injection attacks
Store passwords securely using bcrypt or Argon2 with proper salting and cost factor
Use short-lived JWT tokens with refresh tokens stored securely
Implement RBAC (Role-Based Access Control) fully, checking permissions on every sensitive endpoint
Secure API keys with scopes and expiry dates, allow revocation
Two-Factor Authentication support with backup codes
IP and user-agent logging for all authentication events and sensitive actions

Logging & Audit:
Log all important actions with metadata, including who did what, when, from which IP and device
Separate audit logs from usage logs
Provide endpoints to query logs efficiently (with pagination and filters)
Error Handling: Centralized error handler returning consistent HTTP status codes and JSON error responses

Performance:
Use connection pooling for database
Implement caching for read-heavy endpoints (e.g., product lists)
Use indexes on frequently queried fields
Paginate all list endpoints
Optimize queries, avoid N+1 problems by using Prisma’s relations wisely

Testing & QA:
Unit tests for services and utilities
Integration tests for API endpoints
Mock external services (payment gateways, email providers) during tests
Load testing to verify performance under expected traffic

Payment Integration:

ZarinPal must be the primary payment gateway for all payment processing
Implement secure and robust integration with ZarinPal’s API, handling all statuses and callbacks reliably
Support payment verification and refund workflows as per ZarinPal specifications
Log all payment transactions and statuses for audit and reconciliation

3. Key Packages and Libraries
   express (or fastify)
   prisma (ORM)
   jsonwebtoken (JWT implementation)
   bcryptjs or argon2 (password hashing)
   zod or joi (request validation)
   helmet (security headers)
   cors (CORS policy)
   express-rate-limit + rate-limiter-flexible (rate limiting)
   redis (caching, session storage, rate limiting)
   winston or pino (logging)
   node-cron or bull (job scheduling and queues)
   swagger-jsdoc + swagger-ui-express (API documentation and interactive testing UI)
   dotenv (environment variable management)
   nodemailer (email service integration)
   axios or node-fetch (for calling external APIs like payment gateways)
   jest + supertest (testing)

4. API Documentation and Testing Interface
   Complete and up-to-date API documentation is mandatory for every endpoint and data schema
   Use OpenAPI (Swagger) or equivalent tools to generate and maintain docs automatically from code annotations or specs
   Documentation should include:
   Endpoint URLs, HTTP methods, request and response schemas
   Authentication and authorization requirements per endpoint
   Error codes and response formats
   Usage examples and descriptions of parameters
   Interactive API testing UI (Swagger UI or Redoc with Try-It-Out) must be provided in the documentation portal so developers and integrators can easily test APIs directly from docs without writing code

5. Additional Considerations for Deployment and Maintenance
   Environment configurations managed with .env files and secrets stored securely (e.g., Vault, AWS Secrets Manager)
   Scalable architecture supporting horizontal scaling behind a load balancer
   Proper health check endpoints (/health) for container orchestration
   Detailed monitoring on API latency, error rates, resource usage
   Backup and restore strategies for database
   Automated migrations using Prisma migrate
   Secure backups for logs and audit data

DATABASE PRISMA SCHEMA :
// This is your Prisma schema file,
// learn more about it in the docs: <https://pris.ly/d/prisma-schema>

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: <https://pris.ly/cli/accelerate-init>

generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}

// ----------
// ENUMS
// ----------

enum InvoiceStatus {
PAID
UNPAID
FAILED
REFUNDED
}

enum NotificationType {
SYSTEM
PAYMENT
FOLLOW
COMMENT
LIKE
}

enum Gender {
MALE
FEMALE
OTHER
}

enum SubscriptionStatus {
ACTIVE
EXPIRED
CANCELLED
}

enum WalletTransactionType {
DEPOSIT
USAGE
REFUND
}

enum LoginStatus {
SUCCESS
FAILURE
}

enum PaymentStatus {
PENDING
SUCCESS
FAILED
CANCELED
EXPIRED
}

enum PaymentPurpose {
SUBSCRIPTION
PRODUCT
TRIP_RESERVATION
DONATION
}

enum PaymentProvider {
ZARINPAL
IDPAY
STRIPE
PAYPAL
MANUAL
}

enum TripStatus {
PLANNED
IN_PROGRESS
COMPLETED
CANCELED
}

enum ProductType {
HOTEL
ACCOMMODATION
TOUR
ACTIVITY
OTHER
}

enum ReservationStatus {
PENDING // در حال انتظار برای پرداخت
PAID // پرداخت‌شده و فعال
CANCELLED // لغوشده
FAILED // پرداخت ناموفق
EXPIRED // تاریخ گذشته و منقضی‌شده
ON_HOLD // معلق نگه‌داشته‌شده (مثلاً به‌دلیل تایید ادمین)
}

enum ReservationPaymentStatus {
PAID
UNPAID
FAILED
REFUNDED
WAITING
}

// ----------
// CORE USER & TENANT MODELS
// ----------

model User {
id String @id @default(cuid())
email String @unique
username String? @unique
passwordHash String
fullName String?
phone String? @unique
avatarUrl String?
gender Gender?
birthdate DateTime?
bio String?
location Json?
social Json?
isEmailVerified Boolean @default(false)
isPhoneVerified Boolean @default(false)
lastLoginAt DateTime?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// Relational Fields
memberships TenantMember[]
profile UserProfile?
twoFactor TwoFactorAuth?
sessions Session[]
loginLogs LoginLog[]
notifications Notification[]
apiKeys ApiKey[]
emailTokens EmailVerificationToken[]
posts Post[]
pins Pin[]
likes Like[]
comments Comment[]
followers Follow[] @relation("following")
following Follow[] @relation("follower")
ownedTenants Tenant[] @relation("OwnedTenants") // Tenant.owner
trips Trip[] // Trip.user
reservations Reservation[] // Reservation.user
createdProducts Product[] @relation("ProductCreatedBy") // Product.createdBy
creditWallets CreditWallet[] // CreditWallet.user
usageRecords UsageRecord[] // UsageRecord.user
auditLogs AuditLog[] @relation("UserAudit") // AuditLog.user
apiUsageLogs ApiUsageLog[] // ApiUsageLog.user
payments Payment[] // Payment.user
}

model UserProfile {
id String @id @default(cuid())
userId String @unique
user User @relation(fields: [userId], references: [id], onDelete: Cascade)
country String?
province String?
city String?
address String?
postalCode String?
timezone String?
language String?
theme String?
preferences Json?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}

model Tenant {
id String @id @default(cuid())
name String
slug String @unique
logoUrl String?
description String?
contactEmail String?
contactPhone String?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// Relational Fields
ownerId String
owner User @relation("OwnedTenants", fields: [ownerId], references: [id])
members TenantMember[]
apiKeys ApiKey[]
subscriptions Subscription[]
invoices Invoice[]
usageRecords UsageRecord[]
auditLogs AuditLog[]
webhooks Webhook[]
creditWallets CreditWallet[] // CreditWallet.tenant
apiUsageLogs ApiUsageLog[] // ApiUsageLog.tenant
}

// Join table for User, Tenant, and Role
model TenantMember {
id String @id @default(cuid())
tenantId String
userId String
roleId String
createdAt DateTime @default(now())

tenant Tenant @relation(fields: [tenantId], references: [id], onDelete: Cascade)
user User @relation(fields: [userId], references: [id], onDelete: Cascade)
role Role @relation(fields: [roleId], references: [id])

@@unique([tenantId, userId])
}

// ----------
// RBAC (ROLE-BASED ACCESS CONTROL)
// ----------

model Role {
id String @id @default(cuid())
name String @unique // e.g., Admin, Member, Billing Manager
description String?
isGlobal Boolean @default(false) // True for SuperAdmin, false for tenant-specific roles
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// Relational Fields
permissions Permission[] @relation("RolePermissions")
members TenantMember[]
}

model Permission {
id String @id @default(cuid())
name String @unique
action String // e.g., "create", "read", "update", "delete"
resource String // e.g., "invoice", "user", "apikey"
description String?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// Relational Fields
roles Role[] @relation("RolePermissions")
}

// ----------
// BILLING & SUBSCRIPTIONS
// ----------

model SubscriptionPlan {
id String @id @default(cuid())
name String
slug String @unique
description String?
price Int // in Toman or cents
billingCycle String // "monthly", "yearly"
durationDays Int
maxUsers Int
maxApiCalls Int
maxStorageMb Int
features Json
isActive Boolean @default(true)
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// Relational Fields
subscriptions Subscription[]
rateLimitPolicies RateLimitPolicy[]
}

model Trip {
id String @id @default(cuid())
userId String
user User @relation(fields: [userId], references: [id])

title String
slug String @unique
description String?

origin String // مبدا
destination String // مقصد
originCoords Json? // مختصات مبدا { lat, lng }
destCoords Json? // مختصات مقصد { lat, lng }

startDate DateTime // تاریخ شروع سفر
endDate DateTime // تاریخ پایان سفر
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

transportGo String? // وسیله نقلیه رفت (مانند هواپیما، قطار، اتوبوس)
transportBack String? // وسیله نقلیه برگشت

accommodation String? // محل اقامت (نام هتل یا آدرس)
accommodationLink String? // لینک رزرو یا اطلاعات اقامت

budget Int? // بودجه تقریبی سفر (ریال)
currency String? @default("IRT")

participants Json? // لیستی از کاربران همراه (نام‌ها یا userIdها)
interests Json? // علاقمندی‌های سفر (مثلاً طبیعت، تاریخی، خرید)

status TripStatus @default(PLANNED)
isPublic Boolean @default(false) // اشتراک‌گذاری یا خصوصی

isDeleted Boolean @default(false)
deletedAt DateTime?

reservations Reservation[] // اگر پرداخت/رزرو دارد

coverImage String?
gallery Json? // تصاویر بیشتر

notes String?
}

model Product {
id String @id @default(cuid())
name String
description String?
category String // هتل، اقامتگاه، تور، یا سایر
subCategory String? // مثلاً "هتل لوکس"، "اقامتگاه بوم‌گردی"
type ProductType // enum: HOTEL | ACCOMMODATION | TOUR | ACTIVITY | OTHER
province String
city String
address String?
locationLat Float?
locationLng Float?

availableQty Int // تعداد موجود
reservedQty Int @default(0)
price Int // قیمت اصلی
discount Int? // درصد تخفیف
finalPrice Int // محاسبه شده (price - discount)

isActive Boolean @default(true)
isSuspended Boolean @default(false)

createdById String
createdBy User @relation("ProductCreatedBy", fields: [createdById], references: [id])

reservations Reservation[]
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}

model Reservation {
id String @id @default(cuid())
userId String
user User @relation(fields: [userId], references: [id])

productId String
product Product @relation(fields: [productId], references: [id])

quantity Int // تعداد رزروشده
status ReservationStatus // enum: PENDING | PAID | CANCELLED | FAILED | EXPIRED | ON_HOLD

paymentId String? // شناسه پرداخت (درگاه)
paymentMethod String? // مثلاً ZARINPAL, STRIPE, WALLET
paymentStatus ReservationPaymentStatus // enum: PAID | UNPAID | FAILED | REFUNDED | WAITING
paidAt DateTime?
cancelledAt DateTime?

startDate DateTime? // تاریخ شروع استفاده (مثلاً تاریخ ورود به هتل)
endDate DateTime? // تاریخ پایان

notes String?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

tripId String?
trip Trip? @relation(fields: [tripId], references: [id])
}

model Subscription {
id String @id @default(cuid())
tenantId String
planId String
startedAt DateTime
expiresAt DateTime
status SubscriptionStatus @default(ACTIVE)
renewalEnabled Boolean @default(true)
paymentMethod String?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// Relational Fields
tenant Tenant @relation(fields: [tenantId], references: [id], onDelete: Cascade)
plan SubscriptionPlan @relation(fields: [planId], references: [id])
}

model Invoice {
id String @id @default(cuid())
tenantId String
amount Int
currency String @default("IRR")
status String // "paid", "unpaid", "failed", "refunded"
issuedAt DateTime @default(now())
paidAt DateTime?
dueDate DateTime
description String?
referenceId String?
gateway String?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// Relational Fields
tenant Tenant @relation(fields: [tenantId], references: [id], onDelete: Cascade)
}

model CreditWallet {
id String @id @default(cuid())
tenantId String
userId String
balance Int @default(0) // in credits
currency String @default("credits")
lastUpdatedAt DateTime @updatedAt
createdAt DateTime @default(now())

// Relational Fields
tenant Tenant @relation(fields: [tenantId], references: [id], onDelete: Cascade)
user User @relation(fields: [userId], references: [id], onDelete: Cascade)
transactions WalletTransaction[]

@@unique([tenantId, userId])
}

model WalletTransaction {
id String @id @default(cuid())
walletId String
amount Int
type WalletTransactionType
description String?
createdAt DateTime @default(now())

// Relational Fields
wallet CreditWallet @relation(fields: [walletId], references: [id], onDelete: Cascade)
}

// ----------
// API & USAGE
// ----------

model ApiKey {
id String @id @default(cuid())
key String @unique
name String
description String?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
expiresAt DateTime?
revokedAt DateTime?
isActive Boolean @default(true)
ipWhitelist String[] // لیست IPهای مجاز به صورت آرایه
metadata Json?
createdById String
createdBy User @relation(fields: [createdById], references: [id])
tenantId String
tenant Tenant @relation(fields: [tenantId], references: [id])

// ریت لیمیت متصل به این کلید
rateLimit RateLimit?

// لاگ‌های مصرف API مرتبط
usageLogs ApiUsageLog[] @relation("ApiKeyUsageLogs")
apiUsageLogs ApiUsageLog[] @relation("ApiKeyApiLogs")
usageRecords UsageRecord[]

@@index([createdById])
}

model RateLimitPolicy {
id String @id @default(cuid())
planId String
limitType String // e.g. "requestsPerMinute", "tokensPerDay"
limitValue Int
timeWindowSec Int
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// Relational Fields
plan SubscriptionPlan @relation(fields: [planId], references: [id])
}

model RateLimit {
id String @id @default(cuid())
apiKeyId String @unique
requestsMade Int @default(0)
resetAt DateTime
limitPerHour Int @default(1000)
lastRequestAt DateTime?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// Relational Fields
apiKey ApiKey @relation(fields: [apiKeyId], references: [id], onDelete: Cascade)
}

model UsageRecord {
id String @id @default(cuid())
tenantId String
userId String
apiKeyId String?
service String // e.g. "text-generation", "email-verification"
usageType String // e.g. "tokens", "requests"
amount Int
metadata Json?
timestamp DateTime @default(now())

// Relational Fields
tenant Tenant @relation(fields: [tenantId], references: [id], onDelete: Cascade)
user User @relation(fields: [userId], references: [id])
apiKey ApiKey? @relation(fields: [apiKeyId], references: [id])
}

// ----------
// LOGGING & WEBHOOKS
// ----------

model LoginLog {
id String @id @default(cuid())
userId String
ipAddress String?
userAgent String?
status LoginStatus
reason String?
createdAt DateTime @default(now())

// Relational Fields
user User @relation(fields: [userId], references: [id], onDelete: Cascade)

@@index([userId])
}

model AuditLog {
id String @id @default(cuid())
tenantId String?
actorId String? // User who performed the action
actorType String // "user", "admin", "system"
action String // e.g. "user.login", "invoice.created"
target String?
ipAddress String?
userAgent String?
metadata Json?
createdAt DateTime @default(now())

// Relational Fields
tenant Tenant? @relation(fields: [tenantId], references: [id])
user User? @relation("UserAudit", fields: [actorId], references: [id])
}

model ApiUsageLog {
id String @id @default(cuid())
timestamp DateTime @default(now())
endpoint String
method String // GET, POST, ...
statusCode Int
responseTimeMs Int?
ipAddress String?
userAgent String?
country String? // geo info
city String?
isRateLimited Boolean @default(false)

// اتصال به API Key به عنوان کلید مصرف‌کننده
apiKeyId String?
apiKey ApiKey? @relation("ApiKeyUsageLogs", fields: [apiKeyId], references: [id])

// اتصال به یوزر در صورت وجود
userId String?
user User? @relation(fields: [userId], references: [id])

// اتصال به Tenant در صورت وجود
tenantId String?
tenant Tenant? @relation(fields: [tenantId], references: [id])

apiKeyDirectId String?
apiKeyDirect ApiKey? @relation("ApiKeyApiLogs", fields: [apiKeyDirectId], references: [id])

@@index([timestamp])
@@index([apiKeyId])
@@index([userId])
@@index([tenantId])
}

model Webhook {
id String @id @default(cuid())
tenantId String
url String
eventTypes String[]
secret String
isActive Boolean @default(true)
lastTriggered DateTime?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// Relational Fields
tenant Tenant @relation(fields: [tenantId], references: [id], onDelete: Cascade)
deliveries WebhookDelivery[]
}

model WebhookDelivery {
id String @id @default(cuid())
webhookId String
event String
statusCode Int?
success Boolean
requestBody Json?
responseBody Json?
deliveredAt DateTime @default(now())

// Relational Fields
webhook Webhook @relation(fields: [webhookId], references: [id], onDelete: Cascade)
}

// ----------
// AUTH & SECURITY
// ----------

model EmailVerificationToken {
id String @id @default(cuid())
userId String
token String @unique
otp String?
expiresAt DateTime

// Relational Fields
user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Session {
id String @id @default(cuid())
userId String
token String @unique // refresh token
ip String?
userAgent String?
createdAt DateTime @default(now())
lastActive DateTime @updatedAt

// Relational Fields
user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model TwoFactorAuth {
id String @id @default(cuid())
userId String @unique
method String // sms / email / authenticator
secret String?
phone String?
backupCodes String[]
enabled Boolean @default(false)
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// Relational Fields
user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}

// ----------
// SOCIAL & CONTENT FEATURES
// ----------

model Post {
id String @id @default(cuid())
userId String
title String
content String
location Json?
media Json[]
tags String[]
visibility String @default("public")
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// Relational Fields
user User @relation(fields: [userId], references: [id], onDelete: Cascade)
likes Like[]
comments Comment[]

@@index([userId])
}

model Pin {
id String @id @default(cuid())
userId String
title String
description String?
location Json
type String
color String?
icon String?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// Relational Fields
user User @relation(fields: [userId], references: [id], onDelete: Cascade)

@@index([userId])
}

model Like {
id String @id @default(cuid())
userId String
postId String
createdAt DateTime @default(now())

// Relational Fields
user User @relation(fields: [userId], references: [id], onDelete: Cascade)
post Post @relation(fields: [postId], references: [id], onDelete: Cascade)

@@unique([userId, postId])
@@index([userId, postId])
}

model Comment {
id String @id @default(cuid())
userId String
postId String
parentId String?
content String
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// Relational Fields
user User @relation(fields: [userId], references: [id], onDelete: Cascade)
post Post @relation(fields: [postId], references: [id], onDelete: Cascade)
parent Comment? @relation("CommentReplies", fields: [parentId], references: [id], onDelete: NoAction)
replies Comment[] @relation("CommentReplies")

@@index([userId, postId, parentId])
}

model Follow {
id String @id @default(cuid())
followerId String
followingId String
createdAt DateTime @default(now())

// Relational Fields
follower User @relation("follower", fields: [followerId], references: [id], onDelete: Cascade)
following User @relation("following", fields: [followingId], references: [id], onDelete: Cascade)

@@unique([followerId, followingId])
@@index([followerId, followingId])
}

model Notification {
id String @id @default(cuid())
userId String
title String
content String
type String
isRead Boolean @default(false)
data Json?
createdAt DateTime @default(now())

// Relational Fields
user User @relation(fields: [userId], references: [id], onDelete: Cascade)

@@index([userId])
}

model Payment {
id String @id @default(cuid())
userId String
user User @relation(fields: [userId], references: [id])

amount Int // مبلغ کل پرداخت‌شده (ریال یا تومان بسته به واحد)
currency String @default("IRT")
status PaymentStatus @default(PENDING) // PENDING, SUCCESS, FAILED, CANCELED, EXPIRED
provider PaymentProvider @default(ZARINPAL) // مثلاً ZARINPAL, IDPAY, STRIPE
referenceId String? // کد پیگیری از سمت درگاه
authorityCode String? // کد authority مثلاً برای زرین‌پال
trackingCode String? // کد رهگیری پرداخت نهایی (مثلاً شماره تراکنش بانکی)

purpose PaymentPurpose // خرید پلن، خرید محصول، رزرو سفر و...
targetId String? // ID موردنظر (مثلاً PlanId یا TripId)
description String?

isVerified Boolean @default(false)
verifiedAt DateTime?
failedAt DateTime?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}
