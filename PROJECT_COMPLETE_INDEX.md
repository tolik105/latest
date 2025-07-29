# AKRIN Project - Complete Index & Documentation

## 📋 Project Overview

**AKRIN株式会社 (AKRIN K.K.)** is a production-ready, enterprise-grade Next.js website for a leading IT solutions provider in Japan. This comprehensive web application features advanced Content Management System (CMS), bilingual support (English/Japanese), SEO optimization, and comprehensive testing infrastructure.

### Key Information
- **Company**: AKRIN株式会社 (AKRIN Co., Ltd.)
- **Website**: https://akrin.jp
- **Contact**: support@akrin.jp | +81-3-6821-1223
- **Office**: 〒107-0062 Tokyo, Minato City, Minami Aoyama 2-4-15 4F
- **Languages**: English & Japanese (Bilingual)
- **Status**: Production Ready
- **Version**: 1.0.0
- **Last Updated**: January 2025

## 🏗️ Technical Architecture

### Core Technologies
- **Framework**: Next.js 15.2.4 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4.17
- **Database**: PostgreSQL/SQLite (Prisma ORM 6.10.1)
- **UI Components**: Radix UI + shadcn/ui
- **Rich Text Editor**: TinyMCE 7.9.1
- **Animation**: Framer Motion 12.16.0
- **Internationalization**: next-i18next 15.4.2
- **Testing**: Jest 30.0.2 + Testing Library
- **Email**: Nodemailer 7.0.3
- **Forms**: React Hook Form 7.54.1 + Zod 3.24.1
- **Charts**: Recharts 2.15.0
- **Icons**: Lucide React 0.454.0 + Tabler Icons 3.34.0

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint 9.29.0
- **Type Checking**: TypeScript 5.x
- **Build Tool**: Next.js built-in
- **Deployment**: Netlify (configured)

## 📁 Project Structure

```
AKRIN-team/
├── app/                          # Next.js App Router
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
│   │   ├── book-reservation/    # Booking system
│   │   ├── contact/             # Contact form
│   │   ├── leads/               # Lead management
│   │   ├── schedule/            # Appointment scheduling
│   │   ├── seo/                 # SEO analysis APIs
│   │   └── translate/           # Translation service
│   ├── about/                   # About page
│   ├── blog/                    # Blog functionality
│   ├── book-consultation/       # Consultation booking
│   ├── contact/                 # Contact pages
│   ├── itsm/                    # ITSM dashboard
│   ├── privacy/                 # Privacy policy
│   ├── services/                # Service pages
│   ├── terms/                   # Terms of service
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # React Components
│   ├── blog/                    # Blog-specific components
│   ├── content/                 # Content management
│   ├── editor/                  # Rich text editor
│   ├── icons/                   # Custom icon sets
│   ├── media/                   # Media management
│   ├── seo/                     # SEO components
│   ├── ui/                      # shadcn/ui components
│   ├── footer.tsx               # Site footer
│   ├── navbar.tsx               # Site navigation
│   └── [various].tsx            # Business components
├── lib/                         # Utility functions
│   ├── generated/               # Prisma client
│   ├── blog-data.ts            # Blog data management
│   ├── db.ts                   # Database connection
│   ├── email-service.ts        # Email functionality
│   ├── i18n.ts                 # Internationalization
│   ├── seo-optimizer.ts        # SEO optimization
│   ├── seranking-api.ts        # SEO API integration
│   └── utils.ts                # General utilities
├── prisma/                      # Database schema
│   ├── schema.prisma           # Database models (PostgreSQL/SQLite)
│   ├── seed.ts                 # Database seeding
│   └── dev.db                  # SQLite development database
├── public/                      # Static assets
│   ├── fonts/                  # Variable fonts
│   ├── locales/                # Translation files
│   ├── blog-images/            # Blog assets
│   └── [various]               # Icons, images, etc.
├── __tests__/                   # Test suites
│   ├── api/                    # API tests
│   ├── components/             # Component tests
│   ├── e2e/                    # End-to-end tests
│   ├── integration/            # Integration tests
│   └── lib/                    # Library tests
├── contexts/                    # React contexts
├── hooks/                       # Custom React hooks
├── types/                       # TypeScript definitions
├── utils/                       # Utility functions
└── [config files]              # Various configuration files
```

## 🗄️ Database Schema

### Core Models (Prisma)
- **Content**: Articles, pages, blog posts with SEO metadata
- **Category**: Content organization and taxonomy
- **Keyword**: SEO keyword tracking and analytics
- **ContentMedia**: File attachments and media management
- **ContentAnalytics**: Performance metrics and tracking
- **ContentKeyword**: Many-to-many relationship for content-keyword mapping

### Key Features
- Bilingual content support (EN/JA)
- SEO score tracking and optimization
- Content analytics and performance metrics
- Media management with file uploads
- Category-based content organization
- Keyword tracking and ranking analysis

## 🔧 API Endpoints

### Admin APIs (`/api/admin/`)
- **Categories**: CRUD operations for content categories
- **Content**: Full content management with analytics
- **Keywords**: SEO keyword tracking and management
- **Media**: File upload and media library management
- **SEO**: Content analysis and optimization tools

### Public APIs (`/api/`)
- **Contact**: Contact form submission handling
- **Book-reservation**: Appointment booking system
- **Leads**: Lead capture and management
- **Schedule**: Calendar and scheduling integration
- **SEO**: Public SEO analysis tools
- **Translate**: Content translation services

## 🎨 UI Components

### Business Components
- **ServicePageTemplate**: Standardized service page layout
- **ContactForm**: Multi-field contact forms with validation
- **ITSMCharts**: IT service management dashboards
- **BlogComponents**: Magazine-style blog layouts
- **SEODashboard**: SEO analytics and reporting

### UI Library (shadcn/ui)
- Complete set of accessible components
- Custom AKRIN-branded styling
- Responsive design patterns
- Dark/light theme support
- Premium typography system

## 🌐 Internationalization

### Language Support
- **English**: Primary language (`/`)
- **Japanese**: Secondary language (`/ja/`)
- **URL Structure**: Language-specific routing
- **Content**: Bilingual content management
- **SEO**: Language-specific meta tags and hreflang

### Implementation
- React i18next for client-side translations
- Next.js i18n routing
- Language context provider
- Persistent language selection
- Cultural adaptation for Japanese market

## 🔍 SEO & Analytics

### SEO Features
- **SEranking API**: Integration for keyword tracking
- **Content Analysis**: Automated SEO scoring
- **Meta Optimization**: Dynamic meta tags and descriptions
- **Schema Markup**: Structured data for rich snippets
- **Sitemap**: Automated XML sitemap generation
- **Hreflang**: Multi-language SEO support

### Analytics
- **Google Analytics**: Comprehensive tracking
- **Content Performance**: View counts and engagement
- **Keyword Rankings**: Position tracking and trends
- **User Behavior**: Bounce rates and time on page

## 🧪 Testing Infrastructure

### Test Types
- **Unit Tests**: Component and function testing
- **Integration Tests**: API and workflow testing
- **E2E Tests**: End-to-end user journey testing
- **Coverage**: Comprehensive code coverage reporting

### Test Configuration
- **Jest**: Test runner and framework
- **Testing Library**: React component testing
- **jsdom**: Browser environment simulation
- **Coverage**: Automated coverage reporting

## 🚀 Deployment & Configuration

### Environment Setup
- **Development**: `npm run dev`
- **Production**: `npm run build && npm start`
- **Testing**: `npm test` or `npm run test:coverage`
- **Database**: `npm run db:migrate && npm run db:seed`

### Configuration Files
- **next.config.mjs**: Next.js configuration
- **tailwind.config.ts**: Tailwind CSS setup
- **tsconfig.json**: TypeScript configuration
- **jest.config.js**: Testing configuration
- **prisma/schema.prisma**: Database schema
- **netlify.toml**: Deployment configuration

### Environment Variables
- Database connection strings
- API keys (SEranking, Google Analytics)
- Email service configuration
- reCAPTCHA keys
- Feature flags

## 📈 Performance Optimizations

### Frontend Optimizations
- **Image Optimization**: Next.js Image component
- **Font Loading**: Variable font preloading
- **Code Splitting**: Route-based splitting
- **Lazy Loading**: Component lazy loading
- **Caching**: Browser and CDN caching strategies

### Backend Optimizations
- **Database Indexing**: Optimized queries
- **API Caching**: Response caching
- **Static Generation**: Pre-rendered pages
- **Edge Functions**: Netlify edge deployment

## 🔒 Security Features

### Implementation
- **reCAPTCHA**: Form protection (v2 and v3)
- **CSRF Protection**: Cross-site request forgery prevention
- **Input Validation**: Zod schema validation
- **Secure Headers**: Security header configuration
- **Environment Protection**: Secure environment variables
- **Admin Authentication**: Protected admin routes

## 📋 Project Summary

### **Architecture Highlights:**
- **Framework**: Next.js 15.2.4 with App Router
- **Database**: PostgreSQL (production) / SQLite (development) with Prisma ORM
- **UI**: Radix UI + shadcn/ui components with custom AKRIN branding
- **Styling**: Tailwind CSS with enterprise-grade design system
- **Animation**: Framer Motion for smooth interactions
- **Testing**: Jest + Testing Library with comprehensive coverage
- **Deployment**: Netlify-ready with optimized configuration

### **Key Features:**
- ✅ **Bilingual Support** (English/Japanese) with proper i18n routing
- ✅ **Advanced CMS** with TinyMCE rich text editor and media management
- ✅ **SEO Optimization** with SEranking API integration and automated scoring
- ✅ **Comprehensive Testing** (Unit, Integration, E2E) with Jest framework
- ✅ **Admin Dashboard** for content management and analytics
- ✅ **Contact Forms** with reCAPTCHA protection and email integration
- ✅ **Blog System** with magazine-style layouts and analytics
- ✅ **ITSM Dashboard** for IT service management and reporting
- ✅ **Performance Optimized** with image optimization and caching strategies
- ✅ **Security Features** including CSRF protection and input validation

### **Development Status:**
The AKRIN project is **production-ready** and demonstrates enterprise-grade development practices with proper TypeScript usage, comprehensive testing, SEO optimization, and deployment configuration. It serves as a professional website for AKRIN's IT services business in Japan with full bilingual support and modern web standards compliance.

This comprehensive index serves as the complete guide to the AKRIN project structure, features, and implementation details.
