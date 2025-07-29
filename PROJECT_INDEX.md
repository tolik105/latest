# AKRIN Project Index

## 📋 Project Overview

**AKRIN株式会社 (AKRIN K.K.)** is a comprehensive Next.js-based website for a leading IT solutions provider in Japan. The project features a modern, SEO-optimized website with an advanced Content Management System (CMS), bilingual support (English/Japanese), and enterprise-grade features.

## 🏗️ Architecture & Tech Stack

### Core Technologies
- **Framework**: Next.js 15.2.4 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4.17
- **Database**: SQLite (Prisma ORM 6.10.1)
- **UI Components**: Radix UI + shadcn/ui
- **Rich Text Editor**: TinyMCE 7.9.1
- **Animation**: Framer Motion 12.16.0
- **Internationalization**: next-i18next 15.4.2

### Key Features
- ✅ **Bilingual Support** (EN/JA)
- ✅ **Advanced CMS** with SEO optimization
- ✅ **AI-Powered Content Generation** (OpenAI GPT-4)
- ✅ **SEO Analysis Engine** with SEranking API integration
- ✅ **Real-time Content Analytics**
- ✅ **Media Management System**
- ✅ **Comprehensive Testing Suite**
- ✅ **PWA Support**
- ✅ **Enterprise Security** (reCAPTCHA, SMTP)

## 📁 Project Structure

```
AKRIN-team/
├── app/                          # Next.js App Router
│   ├── [slug]/                   # Dynamic content pages (EN)
│   ├── ja/[slug]/               # Japanese content pages
│   ├── admin/                    # CMS Admin Interface
│   │   ├── content/             # Content management
│   │   ├── analytics/           # Analytics dashboard
│   │   └── seo/                 # SEO tools
│   ├── api/                     # API Routes
│   │   ├── admin/               # Admin API endpoints
│   │   └── seo/                 # SEO analysis APIs
│   ├── services/                # Service pages
│   ├── blog/                    # Blog functionality
│   └── contact/                 # Contact forms
├── components/                   # React Components
│   ├── editor/                  # Rich text editor
│   ├── seo/                     # SEO components
│   ├── ui/                      # shadcn/ui components
│   └── icons/                   # Custom icons
├── lib/                         # Utility Libraries
│   ├── seo-optimizer.ts         # SEO analysis engine
│   ├── seranking-api.ts         # SEranking integration
│   ├── email-service.ts         # Email functionality
│   └── db.ts                    # Database connection
├── prisma/                      # Database Schema
│   ├── schema.prisma            # Database models
│   ├── seed.ts                  # Database seeding
│   └── dev.db                   # SQLite database
├── __tests__/                   # Test Suite
│   ├── api/                     # API tests
│   ├── components/              # Component tests
│   ├── integration/             # Integration tests
│   └── e2e/                     # End-to-end tests
└── public/                      # Static Assets
    ├── locales/                 # Translation files
    └── blog-images/             # Media assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- SQLite (for development)

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

### Environment Configuration
Required environment variables:
```env
# SEO & Analytics
SERANKING_API_KEY=your_seranking_api_key
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
DATABASE_URL="file:./dev.db"
```

## 🎯 Key Features Deep Dive

### 1. Content Management System
- **Rich Text Editor**: TinyMCE with real-time SEO analysis
- **Bilingual Support**: English and Japanese content management
- **SEO Optimization**: Automated analysis and recommendations
- **Media Library**: Advanced file upload and management
- **Analytics Dashboard**: Content performance tracking

### 2. SEO Optimization Engine
- **Real-time Analysis**: Content quality scoring
- **Keyword Research**: SEranking API integration
- **Technical SEO**: Meta tags, structured data, sitemaps
- **Competitor Analysis**: Market positioning insights
- **Performance Tracking**: Keyword ranking monitoring

### 3. AI Content Generation
- **OpenAI Integration**: GPT-4 powered content creation
- **Multilingual Support**: English and Japanese content
- **Content Types**: Articles, guides, tutorials, case studies
- **SEO Optimization**: AI-generated meta tags and descriptions
- **Content Enhancement**: Automated optimization suggestions

### 4. Bilingual Architecture
- **URL Structure**: `/` for English, `/ja/` for Japanese
- **Dynamic Routing**: Automatic language detection
- **SEO Optimization**: Language-specific meta tags and hreflang
- **Cultural Adaptation**: Localized content and formatting

## 📊 Database Schema

### Core Models
- **Content**: Articles, pages, blog posts
- **Category**: Content organization
- **Keyword**: SEO keyword tracking
- **ContentMedia**: File attachments
- **ContentAnalytics**: Performance metrics

### Key Relationships
- Content → Category (many-to-one)
- Content → Keywords (many-to-many)
- Content → Media (one-to-many)
- Content → Analytics (one-to-many)

## 🔧 API Endpoints

### Admin APIs
- `GET/POST /api/admin/content` - Content CRUD operations
- `GET/POST /api/admin/categories` - Category management
- `GET/POST /api/admin/keywords` - Keyword tracking
- `POST /api/admin/media` - File upload
- `POST /api/admin/seo/analyze-content` - SEO analysis

### Public APIs
- `POST /api/contact` - Contact form submission
- `POST /api/book-reservation` - Booking system
- `GET /api/seo/analyze` - Public SEO analysis
- `POST /api/translate` - Translation service

## 🧪 Testing Strategy

### Test Categories
- **Unit Tests**: Individual functions and components
- **Integration Tests**: API endpoints and workflows
- **Component Tests**: React component behavior
- **E2E Tests**: Complete user journeys

### Test Coverage
- API Endpoints: 95%+
- Core Business Logic: 90%+
- React Components: 85%+
- Integration Workflows: 80%+

### Running Tests
```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
npm run test:ci       # CI/CD mode
```

## 🌐 Deployment & Production

### Build Process
```bash
npm run build         # Production build
npm start            # Production server
```

### Deployment Targets
- **Primary**: Netlify (configured)
- **Alternative**: Vercel, AWS, GCP
- **Database**: PostgreSQL (production)

### Performance Optimizations
- Image optimization (Next.js Image)
- Code splitting and lazy loading
- SEO-optimized meta tags
- PWA capabilities
- Caching strategies

## 📈 SEO & Analytics

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

### SEO Features
- Automated content analysis
- Keyword density optimization
- Meta tag generation
- Structured data markup
- Sitemap generation
- Performance monitoring

## 🔐 Security & Compliance

### Security Features
- reCAPTCHA integration (v2/v3)
- CSRF protection
- Input validation and sanitization
- Secure email handling
- Environment variable protection

### Compliance
- GDPR-compliant cookie consent
- Privacy policy implementation
- Terms of service
- Data protection measures

## 📚 Documentation

### Available Guides
- `CONTENT_MANAGEMENT_GUIDE.md` - CMS usage guide
- `TESTING.md` - Testing documentation
- `README.md` - Basic setup instructions
- `PROJECT_INDEX.md` - This comprehensive index

### API Documentation
- Inline code documentation
- TypeScript type definitions
- Example usage in tests
- Postman collection (can be generated)

## 🚀 Future Enhancements

### Planned Features
- Advanced analytics dashboard
- Multi-language support expansion
- E-commerce integration
- Advanced SEO reporting
- Mobile app development
- API rate limiting
- Advanced caching strategies

### Technical Debt
- Migrate to PostgreSQL for production
- Implement Redis caching
- Add comprehensive logging
- Enhance error handling
- Improve test coverage

## 📞 Support & Maintenance

### Key Contacts
- **Production URL**: https://akrin.jp
- **Support Email**: support@akrin.jp
- **Office**: 〒107-0062 Tokyo, Minato City, Minami Aoyama 2-4-15 4F

### Maintenance Schedule
- Regular dependency updates
- Security patches
- Performance monitoring
- SEO optimization reviews
- Content quality audits

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Status**: Production Ready  
**License**: © 2024 AKRIN株式会社. All rights reserved. 