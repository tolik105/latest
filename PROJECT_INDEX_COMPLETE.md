# AKRIN Team Project Complete Index

## Project Overview
AKRIN K.K. IT Solutions Provider - Enterprise-grade web application built with Next.js 15, TypeScript, and Tailwind CSS. Features bilingual support (EN/JA), advanced CMS, SEO tools, and comprehensive IT service offerings.

## Technology Stack

### Frontend
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript 5.x** - Type-safe development
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI + shadcn/ui** - Accessible component library
- **Framer Motion 12.16.0** - Animation library

### Backend & Database
- **Prisma 6.10.1** - Type-safe ORM
- **SQLite** (development) / **PostgreSQL** (production)
- **Nodemailer 7.0.3** - Email service
- **reCAPTCHA v2/v3** - Security

### Development Tools
- **Jest 30.0.2** - Testing framework
- **ESLint** - Code linting
- **Testing Library** - React component testing

## Directory Structure

### `/app` - Next.js App Router
```
├── about/                  # About page with company information
├── admin/                  # Admin dashboard and content management
├── api/                    # API routes
│   ├── admin/             # Protected admin endpoints
│   │   ├── categories/    # Category CRUD operations
│   │   ├── content/       # Content management
│   │   ├── keywords/      # SEO keyword tracking
│   │   ├── media/         # Media upload/management
│   │   └── seo/          # SEO analysis tools
│   ├── book-reservation/  # Booking system endpoint
│   ├── contact/          # Contact form submission
│   ├── leads/            # Lead capture system
│   ├── schedule/         # Appointment scheduling
│   ├── seo/              # Public SEO endpoints
│   └── translate/        # Translation services
├── blog/                 # Blog section with dynamic routes
├── book-consultation/    # Consultation booking page
├── contact/              # Contact page
├── contact-form/         # Standalone contact form
├── cookies/              # Cookie policy page
├── itsm/                 # IT Service Management dashboard
├── ja/                   # Japanese language routes
├── services/             # IT service pages (20+ services)
│   ├── ai-automation/
│   ├── ai-solutions/
│   ├── cloud/
│   ├── cloud-solutions/
│   ├── cybersecurity/
│   ├── it-consulting/
│   ├── it-security/
│   ├── it-support/
│   ├── managed-it-support/
│   ├── managed-services/
│   ├── network-infrastructure/
│   ├── project-management/
│   ├── relocation/
│   ├── web-development/
│   └── wireless-survey/
├── [slug]/               # Dynamic content pages
├── layout.tsx            # Root layout
├── page.tsx              # Home page
├── globals.css           # Global styles
└── sitemap.ts            # Dynamic sitemap generation
```

### `/components` - React Components
```
├── ui/                   # UI components (shadcn/ui based)
│   ├── button.tsx
│   ├── input.tsx
│   ├── skeleton.tsx
│   ├── textarea.tsx
│   ├── circular-progress.tsx
│   ├── logo-carousel.tsx
│   ├── premium-typography.tsx
│   ├── simple-blog-with-grid.tsx
│   ├── tech-partners-animated.tsx
│   ├── tech-partners-feature.tsx
│   └── use-mobile.tsx
├── content/              # Content-related components
├── editor/               # Rich text editor components
├── icons/                # Custom icon components
├── media/                # Media handling components
├── seo/                  # SEO-related components
├── akrin-logo.tsx        # Company logo component
├── calendly-widget.tsx   # Calendly integration
├── connect-cta-section.tsx
├── cookie-consent.tsx    # Cookie consent banner
├── custom-icons.tsx      # Custom icon definitions
├── data-stream.tsx       # Data visualization
├── footer.tsx            # Site footer
├── hreflang-links.tsx    # Language alternate links
├── hydration-boundary.tsx
├── hydration-error-boundary.tsx
├── itsm-charts.tsx       # ITSM dashboard charts
├── itsm-mini-charts.tsx  # Compact chart components
├── navbar.tsx            # Navigation bar
├── particle-background.tsx
├── recaptcha-flexible.tsx
├── recaptcha-v2.tsx      # reCAPTCHA components
├── service-cta-section.tsx
├── service-feature-card.tsx
├── service-link-card.tsx
└── video-hero.tsx        # Video hero section
```

### `/lib` - Core Libraries and Utilities
```
├── blog-data.ts          # Blog content management
├── db.ts                 # Database connection
├── email-service.ts      # Email sending service
├── email-templates.ts    # Email template definitions
├── global-seo-optimizer.ts
├── i18n.ts               # Internationalization helpers
├── logo-utils.ts         # Logo handling utilities
├── metadata-helpers.ts   # Next.js metadata utilities
├── seo-optimizer.ts      # SEO optimization functions
├── seo-report-generator.ts
├── seo-utils.ts          # SEO utility functions
├── seo.ts                # SEO configuration
└── seranking-api.ts      # SEranking API integration
```

### `/prisma` - Database Schema
```
├── schema.prisma         # Database schema definition
├── migrations/           # Database migrations
└── dev.db               # SQLite development database
```

### `/public` - Static Assets
```
├── fonts/                # Custom fonts (Inter, SF Pro)
├── locales/              # Translation files
│   ├── en/common.json   # English translations
│   └── ja/common.json   # Japanese translations
├── video/                # Video assets
├── favicon.ico           # Site favicon
├── grid.svg              # Background graphics
└── manifest.json         # PWA manifest
```

### `/contexts` - React Context Providers
```
└── language-context.tsx  # Language switching context
```

### `/hooks` - Custom React Hooks
```
└── use-mounted.tsx       # Hydration helper hook
```

### `/types` - TypeScript Type Definitions
```
├── blog.ts               # Blog-related types
├── content.ts            # Content management types
├── seo.ts                # SEO-related types
└── index.ts              # Common type exports
```

### `/docs` - Documentation
```
├── seranking-api-integration-report.md
├── LOGO_CAROUSEL.md
└── TECH_PARTNERS_ANIMATED.md
```

### `/__tests__` - Test Suites
```
├── components/           # Component tests
├── api/                  # API endpoint tests
└── lib/                  # Utility function tests
```

## Configuration Files

- **`next.config.mjs`** - Next.js configuration
- **`tsconfig.json`** - TypeScript configuration
- **`tailwind.config.ts`** - Tailwind CSS configuration
- **`package.json`** - Dependencies and scripts
- **`prisma/schema.prisma`** - Database schema
- **`.env.example`** - Environment variables template
- **`.env.local.example`** - Local environment example
- **`.eslintrc.json`** - ESLint rules
- **`.gitignore`** - Git ignore patterns
- **`jest.config.js`** - Jest testing configuration
- **`jest.setup.js`** - Jest setup file
- **`middleware.ts`** - Next.js middleware

## Key Features

1. **Bilingual Support** - Full English/Japanese language support with route-based switching
2. **Advanced CMS** - Custom content management system with rich text editing
3. **SEO Optimization** - Built-in SEO tools, analysis, and reporting
4. **Email Integration** - SMTP-based email service with templates
5. **Security** - reCAPTCHA integration, secure forms, and API protection
6. **Performance** - Image optimization, caching, and lazy loading
7. **Analytics** - Content analytics and performance tracking
8. **Responsive Design** - Mobile-first approach with custom breakpoints
9. **Testing** - Comprehensive test coverage with Jest
10. **Admin Dashboard** - Full-featured admin panel for content management

## Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test": "jest",
  "test:watch": "jest --watch",
  "type-check": "tsc --noEmit",
  "prisma:generate": "prisma generate",
  "prisma:migrate": "prisma migrate dev",
  "prisma:studio": "prisma studio"
}
```

## Environment Variables

Required environment variables (see `.env.example`):
- `DATABASE_URL` - Database connection string
- `SMTP_HOST` - Email server host
- `SMTP_PORT` - Email server port
- `SMTP_USER` - Email username
- `SMTP_PASS` - Email password
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - reCAPTCHA site key
- `RECAPTCHA_SECRET_KEY` - reCAPTCHA secret key
- `NEXT_PUBLIC_SITE_URL` - Production site URL
- `SERANKING_API_KEY` - SEranking API key

## Service Offerings

The application showcases comprehensive IT services:
- Cloud Solutions & Migration
- IT Consulting & Support
- Cybersecurity Services
- AI Solutions & Automation
- Network Infrastructure
- Web Development
- Project Management
- Managed IT Services
- Wireless Site Surveys
- IT Relocation Services

## Development Status

- Production-ready application
- Active development with regular updates
- Comprehensive test coverage
- SEO optimized with built-in tools
- Performance optimized
- Fully responsive design
- Accessibility compliant