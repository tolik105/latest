# AKRIN Project - Comprehensive Index

## 📋 Project Overview

**Project Name:** AKRIN IT Solutions Website  
**Company:** AKRIN株式会社 (AKRIN K.K.)  
**Description:** A professional, multilingual website for AKRIN IT Solutions - a leading IT services provider in Japan offering managed services, cybersecurity, cloud migration, and 24/7 support.

**Production URL:** https://akrin.jp  
**Office Location:** 〒107-0062 Tokyo, Minato City, Minami Aoyama 2-4-15 4F  
**Contact:** support@akrin.jp

## 🛠 Technology Stack

### Core Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### Database & ORM
- **Prisma 6.10.1** - Database ORM
- **SQLite** - Database (development)
- **Database Models:** Content, Categories, Keywords, Media, Analytics

### UI Components & Libraries
- **Radix UI** - Headless UI components
- **Framer Motion 12.16.0** - Animation library
- **Shadcn/ui** - Component library
- **Lucide React** - Icon library
- **TinyMCE** - Rich text editor

### Internationalization
- **i18next** - Internationalization framework
- **next-i18next** - Next.js i18n integration
- **Languages:** English (EN), Japanese (JA)

### Authentication & Security
- **Google reCAPTCHA v2/v3** - Bot protection
- **SMTP Integration** - Email services via Nodemailer

### Development Tools
- **Jest 30.0.2** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

### External Integrations
- **DeepL API** - Translation services
- **Botpress** - AI chatbot
- **Google Analytics** - Web analytics
- **Calendly** - Appointment scheduling

## 📁 Directory Structure

```
AKRIN-team/
├── app/                          # Next.js App Router pages and API routes
│   ├── [slug]/                   # Dynamic content pages
│   ├── about/                    # About page
│   ├── admin/                    # Admin dashboard
│   │   ├── analytics/            # Analytics dashboard
│   │   ├── content/              # Content management
│   │   ├── seo/                  # SEO tools
│   │   └── test-ai/              # AI testing tools
│   ├── api/                      # API routes
│   │   ├── admin/                # Admin API endpoints
│   │   ├── book-reservation/     # Reservation API
│   │   ├── contact/              # Contact form API
│   │   ├── leads/                # Lead management API
│   │   ├── schedule/             # Scheduling API
│   │   ├── seo/                  # SEO analysis API
│   │   └── translate/            # Translation API
│   ├── blog/                     # Blog section
│   ├── book-consultation/        # Consultation booking
│   ├── contact/                  # Contact page
│   ├── cookies/                  # Cookie policy
│   ├── itsm/                     # IT Service Management
│   ├── ja/                       # Japanese language routes
│   ├── privacy/                  # Privacy policy
│   ├── services/                 # Service pages
│   └── terms/                    # Terms of service
├── components/                   # React components
│   ├── ui/                       # UI components library
│   ├── blog/                     # Blog-specific components
│   ├── content/                  # Content rendering components
│   ├── editor/                   # Rich text editor components
│   ├── icons/                    # Custom icon components
│   ├── media/                    # Media management components
│   └── seo/                      # SEO-related components
├── contexts/                     # React contexts
│   └── language-context.tsx      # Language management
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions and services
│   ├── generated/prisma/         # Generated Prisma client
│   ├── blog-data.ts             # Blog data management
│   ├── db.ts                    # Database connection
│   ├── email-service.ts         # Email functionality
│   ├── i18n.ts                  # Internationalization config
│   ├── seo-optimizer.ts         # SEO optimization
│   └── service-metadata.ts      # Service metadata
├── prisma/                       # Database schema and migrations
│   ├── schema.prisma            # Database schema
│   └── seed.ts                  # Database seeding
├── public/                       # Static assets
│   ├── fonts/                   # Custom fonts
│   ├── locales/                 # Translation files
│   ├── video/                   # Video assets
│   └── blog-images/             # Blog images
├── __tests__/                    # Test files
│   ├── api/                     # API tests
│   ├── components/              # Component tests
│   ├── e2e/                     # End-to-end tests
│   └── integration/             # Integration tests
└── types/                        # TypeScript type definitions
```

## 🌟 Key Features

### 1. **Multilingual Support**
- Full English and Japanese language support
- DeepL API integration for translations
- Language switcher component
- SEO optimized for both languages

### 2. **Content Management System**
- Admin dashboard for content creation
- Rich text editor with TinyMCE
- Media library management
- SEO optimization tools
- Content analytics tracking

### 3. **Service Pages**
- IT Consulting & Project Management
- IT Managed Services
- Dynamic service page template
- Service-specific CTAs

### 4. **SEO & Analytics**
- Comprehensive SEO metadata
- Structured data (JSON-LD)
- Sitemap generation
- Google Analytics integration
- SEO audit and reporting tools
- Keyword tracking

### 5. **Contact & Lead Management**
- Multiple contact forms
- reCAPTCHA protection
- Email notification system
- Lead tracking in database
- Consultation booking

### 6. **Blog System**
- Dynamic blog posts
- Table of contents
- Reading progress indicator
- Social share buttons
- Newsletter subscription

### 7. **AI Integration**
- Botpress chatbot
- AI content editor
- AI-powered SEO analysis

### 8. **Progressive Web App (PWA)**
- Offline support
- App manifest
- Service worker ready
- Mobile-optimized

## 🔌 API Routes

### Public APIs
- `POST /api/contact` - Contact form submission
- `POST /api/book-reservation` - Book reservation
- `POST /api/leads` - Lead capture
- `POST /api/schedule` - Schedule appointment
- `POST /api/translate` - Translation service

### Admin APIs
- `GET/POST /api/admin/content` - Content CRUD
- `GET/POST /api/admin/categories` - Category management
- `GET/POST /api/admin/keywords` - Keyword management
- `GET/POST /api/admin/media` - Media management
- `POST /api/admin/seo/analyze-content` - SEO analysis

### SEO APIs
- `POST /api/seo/analyze` - Analyze content SEO
- `GET /api/seo/audit/:id` - Get SEO audit
- `GET /api/seo/keywords` - Keyword data
- `GET /api/seo/reports` - SEO reports

## 📊 Database Schema

### Main Entities
1. **Content** - Blog posts and pages
   - Multi-language support
   - SEO metadata
   - Publishing workflow
   - View tracking

2. **Category** - Content categorization
   - Bilingual names
   - Custom sorting
   - Active/inactive status

3. **Keyword** - SEO keyword tracking
   - Search volume
   - Difficulty metrics
   - Ranking tracking

4. **ContentMedia** - Media attachments
   - File management
   - Alt text support
   - Sorting capability

5. **ContentAnalytics** - Performance tracking
   - View counts
   - Time on page
   - Traffic sources
   - Keyword rankings

## 🧩 Component Library

### Core UI Components
- Button, Card, Dialog, Drawer
- Form elements (Input, Select, Textarea)
- Navigation (Navbar, Sidebar, Breadcrumb)
- Data display (Table, Chart, Progress)
- Feedback (Alert, Toast, Skeleton)

### Custom Components
- **VideoHero** - Hero section with video background
- **LanguageSelector** - Language switching
- **ParticleBackground** - Animated background
- **DataStream** - Real-time data visualization
- **CapabilitiesCarousel** - Service showcase
- **TechPartnersAnimated** - Partner logos display

### Business Components
- **ServicePageTemplate** - Service page layout
- **ContactForm** - Multi-field contact form
- **BookingWidget** - Calendly integration
- **ITSMCharts** - IT service metrics
- **SEODashboard** - SEO analytics display

## 🔧 Configuration Files

- **next.config.mjs** - Next.js configuration
- **tailwind.config.ts** - Tailwind CSS setup
- **tsconfig.json** - TypeScript configuration
- **jest.config.js** - Testing configuration
- **.env.local** - Environment variables
- **prisma/schema.prisma** - Database schema

## 🚀 Development Workflow

### Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database

### Environment Variables Required
- `DEEPL_API_KEY` - DeepL translation API
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - reCAPTCHA public key
- `RECAPTCHA_SECRET_KEY` - reCAPTCHA secret
- `SMTP_HOST/PORT/USER/PASS` - Email configuration
- `DATABASE_URL` - Database connection string

## 📝 Testing Structure

- **Unit Tests** - Component and utility testing
- **Integration Tests** - API and workflow testing
- **E2E Tests** - Full user flow testing
- **SEO Tests** - SEO optimization validation

## 🎨 Design System

- **Colors**: Custom purple/gray theme
- **Typography**: Inter (sans) + Lora (serif) variable fonts
- **Spacing**: Tailwind default scale
- **Components**: Consistent design tokens
- **Animations**: Framer Motion powered
- **Responsive**: Mobile-first approach

## 📦 Deployment

- **Platform**: Compatible with Vercel, Netlify, Node.js
- **Build**: Next.js static/server rendering
- **Database**: SQLite (dev), PostgreSQL/MySQL (prod ready)
- **Assets**: Optimized images and fonts
- **Performance**: Lazy loading, code splitting

## 🔒 Security Features

- reCAPTCHA protection on forms
- CSRF protection
- Input validation with Zod
- Secure headers configuration
- Environment variable protection
- Admin route protection

## 📈 Performance Optimizations

- Image optimization with Next.js Image
- Font preloading and subsetting
- Code splitting by route
- Lazy loading components
- Static generation where possible
- Browser caching strategies

This comprehensive index serves as a complete guide to the AKRIN project structure, features, and implementation details.