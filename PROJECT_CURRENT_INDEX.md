# AKRIN Project - Current State Index (January 2025)

## 📋 Project Overview

**AKRIN株式会社 (AKRIN K.K.)** is a production-ready, enterprise-grade Next.js website for a leading IT solutions provider in Japan. The project features advanced Content Management System (CMS), bilingual support, SEO optimization, and comprehensive testing.

### Key Information
- **Company**: AKRIN株式会社 (AKRIN Co., Ltd.)
- **Website**: https://akrin.jp
- **Contact**: support@akrin.jp
- **Office**: 〒107-0062 Tokyo, Minato City, Minami Aoyama 2-4-15 4F
- **Languages**: English & Japanese (Bilingual)
- **Status**: Production Ready
- **Version**: 1.0.0
- **Last Updated**: January 2025

## 🏗️ Technical Stack

### Core Technologies
- **Framework**: Next.js 15.2.4 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4.17
- **Database**: SQLite (dev) / PostgreSQL (production)
- **ORM**: Prisma 6.10.1
- **UI Components**: Radix UI + shadcn/ui (40+ components)
- **Rich Text Editor**: TinyMCE 7.9.1
- **Animation**: Framer Motion 12.16.0 + Motion 12.19.1
- **Internationalization**: next-i18next 15.4.2 + i18next 25.2.1
- **Testing**: Jest 30.0.2 + Testing Library
- **Package Manager**: npm

### Key Dependencies
- **Email**: Nodemailer 7.0.3
- **Forms**: React Hook Form 7.54.1 + Zod 3.24.1
- **Charts**: Recharts 2.15.0
- **Icons**: Lucide React 0.454.0 + Tabler Icons 3.34.0
- **Security**: reCAPTCHA v2/v3 (react-google-recaptcha 3.1.0)
- **SEO**: Custom SEO engine with SEranking API integration
- **File Upload**: React Dropzone 14.3.8
- **Date Handling**: date-fns 4.1.0
- **HTTP Client**: Axios 1.10.0
- **Notifications**: Sonner 1.7.1

## 🚀 Key Features (Implemented)

### ✅ Core Features
- **Bilingual Support** (EN/JA) with proper URL structure (`/` for EN, `/ja/` for JA)
- **Advanced CMS** with TinyMCE rich text editor and real-time SEO analysis
- **AI-Powered Content Generation** (OpenAI GPT-4 integration)
- **SEO Analysis Engine** with SEranking API integration (API key: 86692c24-eea3-9a9c-0273-9f378bc74b1a)
- **Real-time Content Analytics** and performance tracking
- **Media Management System** with drag-and-drop upload (React Dropzone)
- **Comprehensive Testing Suite** (95%+ API coverage, Jest + Testing Library)
- **PWA Support** with offline capabilities and manifest.json
- **Enterprise Security** (reCAPTCHA v2/v3, CSRF protection, input validation)
- **Responsive Design** optimized for all devices (mobile-first approach)

### ✅ Business Features
- **Contact Forms** with Nodemailer email integration
- **Service Pages** (20+ IT services with consistent templates)
- **Blog System** with SEO optimization and magazine-style design
- **Admin Dashboard** with analytics and content management
- **ITSM Dashboard** with enterprise-grade charts and data visualization
- **Logo Carousel** with Logo.dev API integration
- **Cookie Consent** (GDPR compliant)
- **Google Analytics** integration
- **Booking System** for consultations and reservations
- **Lead Management** and tracking

### ✅ Technical Features
- **Structured Data** (JSON-LD schema markup)
- **Sitemap & Robots.txt** generation
- **Custom Icons** (5+ icon sets with 100+ icons)
- **Premium Typography** with variable fonts (Inter, Lora)
- **Dark/Light Theme** support
- **Language Detection** and automatic routing
- **Email Templates** with AKRIN branding
- **File Upload** with media optimization
- **Form Validation** with Zod schemas
- **Toast Notifications** with Sonner
- **Loading States** and error handling
- **Accessibility** (WCAG compliant)
- **Performance Optimization** (Next.js Image, code splitting)

## 📊 Database Schema

### Core Models (Prisma)
- **Content**: Articles, pages, blog posts with SEO data
  - Fields: id, title, slug, contentHtml, excerpt, metaTitle, metaDescription, focusKeyword, language, status, featuredImage, authorName, authorRole, readTime, viewCount, seoScore, publishedAt, createdAt, updatedAt
  - Enums: Language (EN, JA), ContentStatus (DRAFT, SCHEDULED, PUBLISHED, ARCHIVED)

- **Category**: Content organization and taxonomy
  - Fields: id, nameEn, nameJa, slugEn, slugJa, description, color, sortOrder, isActive, createdAt, updatedAt

- **Keyword**: SEO keyword tracking and analytics
  - Fields: id, keyword, language, searchVolume, difficulty, cpc, competition, currentRank, bestRank, trend, lastUpdated, isTarget, createdAt, updatedAt

- **ContentKeyword**: Many-to-many relationship table
  - Fields: id, contentId, keywordId, isPrimary, density

- **ContentMedia**: File attachments and media library
  - Fields: id, contentId, filename, originalName, mimeType, size, url, altText, caption, sortOrder, createdAt

- **ContentAnalytics**: Performance metrics and tracking
  - Fields: id, contentId, date, views, uniqueViews, avgTimeOnPage, bounceRate, organicTraffic, socialShares, backlinks, keywordRankings, createdAt

### Database Features
- SQLite for development (file-based)
- PostgreSQL for production (planned)
- Prisma ORM for type-safe database access
- Database migrations and seeding
- Comprehensive indexing for performance
- Proper foreign key constraints
- Soft deletion support (via status field)

## 🔧 API Endpoints

### Admin APIs (Protected)
- `GET/POST /api/admin/content` - Content CRUD operations
- `GET/POST /api/admin/categories` - Category management
- `GET/POST /api/admin/keywords` - Keyword tracking
- `POST /api/admin/media` - File upload and media management
- `POST /api/admin/seo/analyze-content` - Real-time SEO content analysis

### Public APIs
- `POST /api/contact` - Contact form submission with email integration
- `POST /api/book-reservation` - Booking system for consultations
- `POST /api/leads` - Lead management and tracking
- `POST /api/schedule` - Scheduling and appointment management
- `GET /api/seo/analyze` - Public SEO analysis tool
- `GET /api/seo/audit` - SEO audit functionality
- `GET /api/seo/keywords` - Keyword research and analysis
- `GET /api/seo/report` - SEO reporting and insights
- `GET /api/seo/reports` - Historical SEO reports
- `GET /api/seo/test-connection` - SEranking API connection testing
- `POST /api/translate` - Translation service (DeepL integration)

### API Features
- **Authentication**: Session-based admin authentication
- **Validation**: Zod schema validation for all inputs
- **Error Handling**: Comprehensive error responses with proper HTTP status codes
- **Rate Limiting**: Built-in protection against abuse
- **CORS**: Configured for secure cross-origin requests
- **Type Safety**: Full TypeScript support with proper typing

## 🧪 Testing Strategy

### Test Coverage
- **API Endpoints**: 95%+ coverage
- **Core Business Logic**: 90%+ coverage
- **React Components**: 85%+ coverage
- **Integration Workflows**: 80%+ coverage

### Test Categories
- **Unit Tests**: Individual functions and components
- **Integration Tests**: API endpoints and workflows
- **Component Tests**: React component behavior
- **E2E Tests**: Complete user journeys

### Test Configuration
- Jest 30.0.2 with jsdom environment
- Testing Library for React components
- Comprehensive mocking for external APIs
- Coverage reporting and CI/CD integration

## 🌐 Services Offered

AKRIN provides 20+ IT services including:
- Managed IT Support
- Cybersecurity Solutions
- Cloud Migration & Solutions
- IT Consulting
- Network Infrastructure
- Hardware Maintenance
- Custom Software Development
- AI & Automation Solutions
- Project Management
- Workforce Solutions
- E-waste Management
- Asset Management
- Wireless Surveys
- Onsite Support
- Web Development

## 📈 SEO & Content Strategy

### SEO Features
- Automated content analysis and scoring
- Keyword density optimization
- Meta tag generation and optimization
- Structured data markup (JSON-LD)
- Sitemap generation
- Performance monitoring
- Competitor analysis
- Multilingual SEO support

### SEranking API Integration
- **API Key**: 86692c24-eea3-9a9c-0273-9f378bc74b1a (Active)
- **Subscription Status**: Active (10,000 units available)
- **Expiration**: 2025-07-08
- **Real Data Integration**: Backlinks, domain analysis, SEO scoring
- **Working Endpoints**: `/v1/backlinks/summary`, `/v1/account/subscription`

### Target Keywords (Pre-configured)
**English Keywords:**
- `nexpose` (320 searches, difficulty: 4)
- `guest wifi` (170 searches, difficulty: 6)
- `systems` (9,900 searches, difficulty: 60)
- `it consulting` (170 searches, difficulty: 8)
- `firmware update` (320 searches, difficulty: 13)

**Japanese Keywords:**
- `システム it` (590 searches, difficulty: 4)
- `ケーススタディとは` (8,100 searches, difficulty: 49)
- `デジタルワークプレイス` (390 searches, difficulty: 5)
- `財 サービス` (320 searches, difficulty: 6)
- `cs ケース スタディ` (480 searches, difficulty: 11)

## 📁 Project Structure

```
AKRIN-team/
├── app/                          # Next.js App Router (App Directory)
│   ├── [slug]/                   # Dynamic content pages (English)
│   ├── ja/[slug]/               # Japanese content pages
│   ├── admin/                    # CMS Admin Interface
│   │   ├── content/             # Content management
│   │   ├── analytics/           # Analytics dashboard
│   │   └── seo/                 # SEO tools
│   ├── api/                     # API Routes
│   │   ├── admin/               # Admin API endpoints
│   │   │   ├── categories/      # Category management
│   │   │   ├── content/         # Content CRUD
│   │   │   ├── keywords/        # Keyword tracking
│   │   │   ├── media/           # File upload
│   │   │   └── seo/             # SEO analysis
│   │   ├── contact/             # Contact form API
│   │   ├── book-reservation/    # Booking system
│   │   ├── leads/               # Lead management
│   │   ├── schedule/            # Scheduling API
│   │   ├── seo/                 # SEO analysis APIs
│   │   │   ├── analyze/         # Content analysis
│   │   │   ├── audit/           # SEO audits
│   │   │   ├── keywords/        # Keyword research
│   │   │   ├── report/          # SEO reports
│   │   │   └── test-connection/ # API testing
│   │   └── translate/           # Translation service
│   ├── services/                # Service pages (20+ IT services)
│   ├── blog/                    # Blog functionality
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── book-consultation/       # Consultation booking
│   ├── book-reservation/        # Reservation system
│   ├── cookies/                 # Cookie policy
│   ├── privacy/                 # Privacy policy
│   ├── terms/                   # Terms of service
│   ├── itsm/                    # ITSM dashboard
│   ├── font-test/               # Typography testing
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── home-client.tsx          # Client-side homepage
│   ├── robots.ts                # Robots.txt generation
│   └── sitemap.ts               # Sitemap generation
├── components/                   # React Components (80+ components)
│   ├── editor/                  # Rich text editor components
│   │   ├── ai-content-editor.tsx
│   │   └── rich-text-editor.tsx
│   ├── seo/                     # SEO components
│   │   ├── competitor-analysis.tsx
│   │   ├── keyword-tracking-dashboard.tsx
│   │   ├── seo-dashboard.tsx
│   │   └── seo-head.tsx
│   ├── ui/                      # shadcn/ui components (40+ components)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── chart.tsx
│   │   └── ... (35+ more UI components)
│   ├── icons/                   # Custom icon sets
│   │   ├── ai-web-icons.tsx
│   │   ├── analytics8-exact-style.tsx
│   │   ├── itsm-icons.tsx
│   │   ├── premium-service-icons.tsx
│   │   └── service-icons.tsx
│   ├── content/                 # Content management
│   │   └── content-renderer.tsx
│   ├── media/                   # Media management
│   │   └── media-library.tsx
│   ├── navbar.tsx               # Navigation component
│   ├── footer.tsx               # Footer component
│   ├── service-*.tsx            # Service page components
│   ├── itsm-charts.tsx          # ITSM dashboard charts
│   ├── language-selector.tsx    # Language switching
│   ├── cookie-consent.tsx       # GDPR compliance
│   ├── google-analytics.tsx     # Analytics integration
│   ├── recaptcha-*.tsx          # reCAPTCHA components
│   └── ... (20+ more components)
├── lib/                         # Utility Libraries & Business Logic
│   ├── generated/               # Prisma generated client
│   ├── seo-optimizer.ts         # SEO analysis engine
│   ├── seranking-api.ts         # SEranking API integration
│   ├── email-service.ts         # Email functionality
│   ├── email-templates.ts       # Email templates
│   ├── email.ts                 # Email utilities
│   ├── db.ts                    # Database connection
│   ├── blog-data.ts             # Blog data management
│   ├── i18n.ts                  # Internationalization
│   ├── metadata-helpers.ts      # SEO metadata
│   ├── service-metadata.ts      # Service page metadata
│   ├── seo-utils.ts             # SEO utilities
│   ├── seo.ts                   # SEO core functions
│   ├── logo-utils.ts            # Logo management
│   ├── global-seo-optimizer.ts  # Global SEO optimization
│   ├── seo-report-generator.ts  # SEO reporting
│   └── utils.ts                 # General utilities
├── prisma/                      # Database Schema & Management
│   ├── schema.prisma            # Database models (5 main models)
│   ├── seed.ts                  # Database seeding
│   └── dev.db                   # SQLite database (development)
├── __tests__/                   # Comprehensive Test Suite
│   ├── api/                     # API endpoint tests
│   ├── components/              # Component tests
│   ├── integration/             # Integration tests
│   ├── e2e/                     # End-to-end tests
│   └── lib/                     # Library function tests
├── public/                      # Static Assets
│   ├── locales/                 # Translation files (EN/JA)
│   ├── blog-images/             # Blog media assets
│   ├── fonts/                   # Custom fonts
│   ├── video/                   # Video assets
│   ├── favicon.svg              # Favicon
│   ├── og-image.png             # Open Graph image
│   ├── manifest.json            # PWA manifest
│   └── ... (various icons & assets)
├── contexts/                    # React Contexts
│   └── language-context.tsx     # Language state management
├── hooks/                       # Custom React Hooks
│   ├── use-mobile.tsx           # Mobile detection
│   └── use-toast.ts             # Toast notifications
├── types/                       # TypeScript Type Definitions
│   └── global.d.ts              # Global type declarations
├── utils/                       # Utility Functions
│   └── languages.ts             # Language utilities
├── docs/                        # Documentation
│   ├── LOGO_CAROUSEL.md         # Logo carousel documentation
│   └── seranking-api-integration-report.md
├── newassets/                   # New design assets
│   ├── akrin-colors.css         # Brand colors
│   ├── better-logo-transparent.svg
│   ├── favicon.svg
│   └── hero.png
├── akrin-ai-chatbot-clean/      # External chatbot (separate project)
├── akrin-itsm/                  # ITSM system components
├── Connect With Us Section Clone/ # UI component clone
├── video/                       # Video assets
│   └── akrin_hyper_realistic_video.mp4
├── Configuration Files
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Dependency lock file
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── jest.config.js               # Jest testing configuration
├── jest.setup.js                # Jest setup
├── components.json              # shadcn/ui configuration
├── middleware.ts                # Next.js middleware
├── next-i18next.config.js       # i18n configuration
├── netlify.toml                 # Netlify deployment config
├── windsurf_deployment.yaml     # Deployment configuration
├── Documentation Files
├── README.md                    # Basic setup guide
├── PROJECT_INDEX.md             # Detailed project index
├── PROJECT_COMPREHENSIVE_INDEX.md # Comprehensive project index
├── PROJECT_CURRENT_INDEX.md     # This current state index
├── CONTENT_MANAGEMENT_GUIDE.md  # CMS usage guide
├── TESTING.md                   # Testing documentation
├── AKRIN_ENGLISH_CONTENT_EXTRACTION.md # Content for translation
├── SEO & Analytics Files
├── seo-audit-*.json             # SEO audit reports
├── seo_server.py                # SEO analysis server
├── test-email.js                # Email testing script
└── test-logos.html              # Logo testing page
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- SQLite (development)

### Quick Setup
```bash
# 1. Install dependencies
npm install

# 2. Setup database
npm run db:generate
npm run db:reset

# 3. Configure environment
cp .env.example .env.local
# Edit .env.local with your API keys

# 4. Start development server
npm run dev

# 5. Run tests
npm test
```

### Environment Variables
```env
# SEO & Analytics
SERANKING_API_KEY=86692c24-eea3-9a9c-0273-9f378bc74b1a
OPENAI_API_KEY=your_openai_api_key  # Optional: for AI content generation

# Email & Forms
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email@example.com
SMTP_PASS=your_app_password
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key

# Translation
DEEPL_API_KEY=your_deepl_api_key

# Database
DATABASE_URL="file:./dev.db"  # SQLite for development
# DATABASE_URL="postgresql://..." # PostgreSQL for production

# Logo Services
LOGO_DEV_API_KEY=pk_UEr0qEZTRlmPOWFTe-G1XA

# Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id

# Security
NEXTAUTH_SECRET=your_nextauth_secret  # For session management
NEXTAUTH_URL=http://localhost:3000    # Base URL for authentication
```

### NPM Scripts
```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint

# Testing
npm test                # Run all tests
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Generate coverage report
npm run test:ci         # Run tests in CI mode

# Database
npm run db:generate     # Generate Prisma client
npm run db:reset        # Reset database and seed
npm run db:seed         # Seed database with sample data
npm run db:migrate      # Apply database migrations
```

## 📚 Documentation Files

- `README.md` - Basic setup and overview
- `PROJECT_INDEX.md` - Detailed project documentation
- `PROJECT_COMPREHENSIVE_INDEX.md` - Comprehensive project index
- `PROJECT_CURRENT_INDEX.md` - This current state index
- `CONTENT_MANAGEMENT_GUIDE.md` - CMS usage guide
- `TESTING.md` - Comprehensive testing documentation
- `AKRIN_ENGLISH_CONTENT_EXTRACTION.md` - Content for translation (2000+ lines)
- `docs/seranking-api-integration-report.md` - SEO API integration details

## 🔐 Security & Compliance

### Security Features
- reCAPTCHA integration (v2/v3)
- CSRF protection
- Input validation and sanitization
- Secure email handling
- Environment variable protection
- SQL injection prevention
- XSS protection

### Compliance
- GDPR-compliant cookie consent
- Privacy policy implementation
- Terms of service
- Data protection measures

## 📞 Support & Maintenance

### Key Information
- **Production URL**: https://akrin.jp
- **Support Email**: support@akrin.jp
- **Office**: 〒107-0062 Tokyo, Minato City, Minami Aoyama 2-4-15 4F

### Deployment
- **Primary**: Netlify (configured)
- **Alternative**: Vercel, AWS, GCP
- **Database**: PostgreSQL (production)

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Status**: Production Ready  
**License**: © 2024 AKRIN株式会社. All rights reserved.
